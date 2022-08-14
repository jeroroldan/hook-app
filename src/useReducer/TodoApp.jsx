import { useTodos } from '../hooks/useTodos';
import TodoAdd from './TodoAdd';
import TodoList from './TodoList';




export const TodoApp = () => {
 
  const { todos,handleNewTodo,todosCount ,pendingTodosCount,deleteTodo,handleToggleTodo } = useTodos()
  

  return (
    <>

      <h1>TodoApp: { todosCount(todos) }, <small>pendientes: { pendingTodosCount(todos) }</small> </h1>
      <hr/>
      {
        todos.length === 0 && <h3 className="text-center">No hay todos que mostrar</h3>
      }
        <div className="row">
          <div className="col-7 cursor-pointer">
          {
            todos.map( todo =>(
              <TodoList key={ todo.id } onToggleTodo={ handleToggleTodo } deleteTodo={ deleteTodo } todo ={ todo } />
            ))
          }
          </div> 

          <div className="col-5">
            <h4>Agregar Tode</h4>
            <hr />
              <TodoAdd todos={todos } onNewTodo = { handleNewTodo } />
          </div>

        </div>  
    
    </>
  )
}
 

export default TodoApp;
