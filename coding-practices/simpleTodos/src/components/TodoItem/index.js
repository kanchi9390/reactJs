import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteTodo} = props
  const {id, title} = todoDetails

  const onDelete = () => {
    deleteTodo(id)
  }
  return (
    <li className="todo-container">
      <p className="title">{title}</p>
      <button onClick={onDelete} type="button" className="delete-btn">
        Delete
      </button>
    </li>
  )
}

export default TodoItem
