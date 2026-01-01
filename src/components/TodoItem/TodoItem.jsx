import { FaTrashAlt } from 'react-icons/fa'
import { MdEdit } from 'react-icons/md'

import {
  TodoItemContainer,
  TodoLeft,
  Checkbox,
  DeleteIcon,
  TodoText,
  TodoActions,
  IconButton
} from './TodoItemStyle'

const TodoItem = ({
  todo,
  completed,
  onToggle,
  todoId,
  onEdit,
  onDelete,
  TodoStatusUpdate,
  deleteRequest
}) => {
  return (
    <TodoItemContainer>
      <TodoLeft onClick={() => TodoStatusUpdate(todoId, !completed)}>
        <Checkbox type="checkbox" checked={completed} onChange={onToggle} />

        <TodoText completed={completed}>{todo}</TodoText>
      </TodoLeft>

      <TodoActions>
        <IconButton onClick={onEdit}>
          <MdEdit size={10} />
        </IconButton>

        <IconButton onClick={() => deleteRequest(todoId)}>
          <DeleteIcon />
        </IconButton>
      </TodoActions>
    </TodoItemContainer>
  )
}

export default TodoItem
