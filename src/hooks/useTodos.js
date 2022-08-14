import { useReducer,useEffect } from 'react';
import todoReducer from '../useReducer/todoReducer';


const initialState = [];

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodos = () => {
  
  const [todos, dispatch] = useReducer( todoReducer, initialState, init );


  const todosCount = () =>{
    return todos.length
  }

  const pendingTodosCount = () =>{
    return todos.filter(todo => !todo.done).length
  }


  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos)) ;
  }, [todos])
  

  const handleNewTodo = (todo) =>{
    const action = {
      type: '[TODO] Add Todo',
      payload: todo
    }

    dispatch(action);
  }

  const deleteTodo = (id) =>{
    const action = {
      type: '[TODO] Delete Todo',
      payload: id
  }

    dispatch(action);
    
  }

  const handleToggleTodo = (id) =>{
    dispatch({
      type: '[TODO] Toggle Todo',
      payload: id
    });
  }

 return {
      todos,
      handleNewTodo,
      deleteTodo,
      handleToggleTodo,
      pendingTodosCount,
      todosCount
  }
}



