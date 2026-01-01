import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'

import Sidebar from './components/Sidebar'
import AnimatedMenu from './components/Dropdown/Dropdown'
import TodoItem from './components/TodoItem/TodoItem'
import { TailSpin } from 'react-loader-spinner'

import {
  ContentContainer,
  HeaderTitle,
  TodoContainer,
  InputRow,
  ProfileIcon,
  TaskInput,
  Loader,
  AddButton,
  HeaderContainer,
  LogoutButton,
  ProfileSection
} from './AppStyle'

const App = () => {
  const navigate = useNavigate()
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true) // Start with loading true

  // todos useState section
  const [todoTitle, setTodoTitle] = useState('')
  const [tag, setTag] = useState('ALL')

  const [todoStatus, setTodoStatus] = useState(false)

  const tagRequest = value => {
    setTag(value)
  }

  const TodoAddRequest = async () => {
    const token = Cookies.get('jwt_token')
    const newTodo = {
      todoTitle,
      tag,
      isCompleted: false
    }
    console.log(todoTitle)
    console.log(tag)
    const url = 'https://todo-backend-4-v3q0.onrender.com/todo'
    const option = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(newTodo)
    }
    const response = await fetch(url, option)
    getUserTodo()
    const data = await response.json()
    console.log(data)
    console.log(response)
  }

  const TodoStatusUpdate = async (todoId, status) => {
    //setTodoStatus(status)
    const todo = {
      isCompleted: status
    }
    const token = Cookies.get('jwt_token')
    const url = `https://todo-backend-4-v3q0.onrender.com/todo/${todoId}`
    const option = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(todo)
    }
    const response = await fetch(url, option)
    const data = await response.json()
    getUserTodo()
  }

  const deleteRequest = async todoId => {
    const token = Cookies.get('jwt_token')
    const url = `https://todo-backend-4-v3q0.onrender.com/todo/${todoId}`
    const option = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    }
    const response = await fetch(url, option)
    const data = await response.json()
    getUserTodo()
  }

  const getUserTodo = async () => {
    const token = Cookies.get('jwt_token')

    // 1. Check if token exists before fetching
    if (!token) {
      navigate('/user/login', { replace: true })
      return
    }

    try {
      setLoading(true)
      const response = await fetch('https://todo-backend-4-v3q0.onrender.com/todo', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      if (response.ok) {
        const data = await response.json()
        // 2. Map the data correctly (ensure backend returns an array)
        setTodos(data.todos || data)
        console.log(data)
      } else {
        console.error('Failed to fetch todos')
      }
    } catch (error) {
      console.error('Network error:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getUserTodo()
  }, [])

  const handleLogout = () => {
    Cookies.remove('jwt_token')
    navigate('/user/login', { replace: true })
  }

  return (
    <>
      <Sidebar />
      <ContentContainer>
        <HeaderContainer>
          <HeaderTitle>Todo</HeaderTitle>
          <ProfileSection>
            <ProfileIcon />
            <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
          </ProfileSection>
        </HeaderContainer>

        <InputRow>
          <TaskInput placeholder="Add a task..." onChange={e => setTodoTitle(e.target.value)} />
          <AnimatedMenu tagRequest={tagRequest} />
          <AddButton onClick={() => TodoAddRequest()}>Add</AddButton>
        </InputRow>

        <TodoContainer>
          {loading ? (
            <Loader>
              <TailSpin
                height="40"
                width="40"
                color="#000000"
                ariaLabel="tail-spin-loading"
                visible={loading}
              />
            </Loader>
          ) : todos.length === 0 ? (
            <p>No todos found</p>
          ) : (
            todos.map(each => (
              <TodoItem
                key={each._id}
                todoId={each._id}
                todo={each.todoTitle}
                completed={each.isCompleted}
                TodoStatusUpdate={TodoStatusUpdate}
                deleteRequest={deleteRequest}
              />
            ))
          )}
        </TodoContainer>
      </ContentContainer>
    </>
  )
}

export default App
