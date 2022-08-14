



export const TodoList = ({ todo, deleteTodo,onToggleTodo }) => {
  
  return (
    <ul className="list-group">
      <li className="list-group-item d-flex justify-content-between">
        <span className={`align-self-center  ${ (todo.done) ? 'text-decoration-line-through' : ''}`} onClick={ () => onToggleTodo( todo.id ) } >{ todo.description }</span>
        <button className="btn btn-danger" onClick={() => deleteTodo(todo.id) }>Delete</button>
      </li>
    </ul>
  )
}



export default TodoList;
