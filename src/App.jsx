import { useEffect, useState, useCallback } from 'react'
import Cookies from 'js-cookie'
import { useNavigate, Link } from 'react-router-dom'
import { ClipLoader } from 'react-spinners'

import Sidebar from './components/Sidebar'
import TodoItem from './components/TodoItem/TodoItem'

import {
  ContentContainer,
  HeaderTitle,
  TodoContainer,
  TargetIcon,
  TargetFont,
  InputRow,
  TargetContainer,
  ProfileIcon,
  TaskInput,
  AddButton,
  HeaderContainer,
  LogoutButton,
  ProfileSection
} from './AppStyle'

const API_BASE_URL = 'https://todo-backend-production-a5b2.up.railway.app/todo'

const App = () => {
  const navigate = useNavigate()

  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(false)
  const [todoTitle, setTodoTitle] = useState('')
  const [tempId, setTempId] = useState(0) // ✅ temp id counter
  const [adding, setAdding] = useState(false)

  /* ---------- Logout ---------- */
  const handleLogout = useCallback(() => {
    Cookies.remove('jwt_token')
    navigate('/user/login', { replace: true })
  }, [navigate])

  /* ---------- Fetch Todos ---------- */
  const getUserTodo = async () => {
    setLoading(true)

    const token = Cookies.get('jwt_token')
    if (!token) {
      setLoading(false)
      return handleLogout()
    }

    try {
      const response = await fetch(API_BASE_URL, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      })

      const data = await response.json()
      setTodos(data)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getUserTodo()
  }, [])

  /* ---------- Add Todo ---------- */
  const TodoAddRequest = async () => {
    if (adding) return // 🚫 block rapid clicks

    const token = Cookies.get('jwt_token')
    if (!token) return handleLogout()
    if (!todoTitle.trim()) return

    setAdding(true)

    const optimisticTodo = {
      _id: `temp-${tempId}`,
      todoTitle,
      tag: 'ALL',
      isCompleted: false
    }

    setTodos(prev => [...prev, optimisticTodo])
    setTempId(prev => prev + 1)
    setTodoTitle('')

    try {
      const response = await fetch(API_BASE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          todoTitle: todoTitle.trim(),
          tag: 'ALL'
        })
      })

      if (!response.ok) throw new Error()

      await response.json()
      getUserTodo() // sync with DB
    } catch (error) {
      console.error(error)
    } finally {
      setAdding(false) // ✅ unlock
    }
  }

  /* ---------- Update Status ---------- */
  const TodoStatusUpdate = async (todoId, status) => {
    if (!todoId) return

    const token = Cookies.get('jwt_token')
    if (!token) return handleLogout()

    let rollback
    setTodos(prev => {
      rollback = prev
      return prev.map(t => (t._id === todoId ? { ...t, isCompleted: status } : t))
    })

    try {
      const response = await fetch(`${API_BASE_URL}/${todoId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ isCompleted: status })
      })
      if (!response.ok) throw new Error()
    } catch {
      setTodos(rollback)
    }
  }

  /* ---------- Delete Todo ---------- */
  const deleteRequest = async todoId => {
    if (!todoId) return

    const token = Cookies.get('jwt_token')
    if (!token) return handleLogout()

    let rollback
    setTodos(prev => {
      rollback = prev
      return prev.filter(t => t._id !== todoId)
    })

    try {
      const response = await fetch(`${API_BASE_URL}/${todoId}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` }
      })
      if (!response.ok) throw new Error()
    } catch {
      setTodos(rollback)
    }
  }

  /* ---------- Edit Todo ---------- */
  const editTodoRequest = async (todoId, newTitle) => {
    if (!todoId || !newTitle.trim()) return

    const token = Cookies.get('jwt_token')
    if (!token) return handleLogout()

    let rollback
    setTodos(prev => {
      rollback = prev
      return prev.map(t => (t._id === todoId ? { ...t, todoTitle: newTitle } : t))
    })

    try {
      const response = await fetch(`${API_BASE_URL}/${todoId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ todoTitle: newTitle })
      })
      if (!response.ok) throw new Error()
    } catch {
      setTodos(rollback)
    }
  }

  /* ---------- Progress ---------- */
  const completedTodos = todos.filter(t => t.isCompleted).length
  const progressPercent = todos.length ? Math.round((completedTodos / todos.length) * 100) : 0

  return (
    <>
      <Sidebar
        progressPercent={progressPercent}
        totalTodos={todos.length}
        completedTodos={completedTodos}
      />

      <ContentContainer>
        <HeaderContainer>
          <HeaderTitle>Todo List</HeaderTitle>
          <ProfileSection>
            <TargetContainer>
              <TargetIcon />
              <TargetFont>{todos.length}</TargetFont>
            </TargetContainer>
            <Link to="/user/register">
              <ProfileIcon />
            </Link>
            <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
          </ProfileSection>
        </HeaderContainer>

        <InputRow>
          <TaskInput
            placeholder="What needs to be done?"
            value={todoTitle}
            onChange={e => setTodoTitle(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && TodoAddRequest()}
          />
          <AddButton onClick={TodoAddRequest}>Add Task</AddButton>
        </InputRow>

        <TodoContainer>
          {loading ? (
            <div style={{ textAlign: 'center', marginTop: 20 }}>
              <ClipLoader />
            </div>
          ) : todos.length === 0 ? (
            <p style={{ textAlign: 'center', color: '#666' }}>No tasks found. Add one above!</p>
          ) : (
            todos.map(todo => (
              <TodoItem
                key={todo._id}
                todoId={todo._id}
                todo={todo.todoTitle}
                completed={todo.isCompleted}
                TodoStatusUpdate={TodoStatusUpdate}
                deleteRequest={deleteRequest}
                editTodoRequest={editTodoRequest}
              />
            ))
          )}
        </TodoContainer>
      </ContentContainer>
    </>
  )
}

export default App
