import { MdEdit, MdCheck, MdClose } from 'react-icons/md' // Added Check and Close icons
import { useState } from 'react'

import {
  TodoItemContainer,
  TodoLeft,
  Checkbox,
  DeleteIcon,
  TodoText,
  TodoActions,
  IconButton,
  EditInput
} from './TodoItemStyle'

const TodoItem = ({
  todo,
  completed,
  todoId,
  TodoStatusUpdate,
  deleteRequest,
  editTodoRequest
}) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editText, setEditText] = useState(todo)

  const handleToggle = () => {
    TodoStatusUpdate(todoId, !completed)
  }

  const handleSave = () => {
    if (editText.trim() === '') {
      setEditText(todo) // Reset if empty
      setIsEditing(false)
      return
    }
    editTodoRequest(todoId, editText)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setEditText(todo) // Revert to original text
    setIsEditing(false)
  }

  return (
    <TodoItemContainer>
      <TodoLeft>
        <Checkbox type="checkbox" checked={completed} onChange={handleToggle} />

        {isEditing ? (
          <EditInput
            value={editText}
            autoFocus
            onChange={e => setEditText(e.target.value)}
            // Removed onBlur to prevent accidental closing without saving
            onKeyDown={e => {
              if (e.key === 'Enter') handleSave()
              if (e.key === 'Escape') handleCancel()
            }}
          />
        ) : (
          <TodoText $completed={completed} onClick={handleToggle}>
            {todo}
          </TodoText>
        )}
      </TodoLeft>

      <TodoActions>
        {isEditing ? (
          <>
            {/* Show Save and Cancel when editing */}
            <IconButton onClick={handleSave} title="Save">
              <MdCheck size={18} color="green" />
            </IconButton>
            <IconButton onClick={handleCancel} title="Cancel">
              <MdClose size={18} color="red" />
            </IconButton>
          </>
        ) : (
          <>
            {/* Show Edit and Delete normally */}
            <IconButton onClick={() => setIsEditing(true)} title="Edit">
              <MdEdit size={14} />
            </IconButton>
            <IconButton onClick={() => deleteRequest(todoId)} title="Delete">
              <DeleteIcon />
            </IconButton>
          </>
        )}
      </TodoActions>
    </TodoItemContainer>
  )
}

export default TodoItem
