
import useForm from '../hooks/useForm';

export const TodoAdd = ({ todos, onNewTodo }) => {

 const { description,onInputChange , onResetForm } = useForm({
    description:''
 })


  const onFormSubmit = (e) =>{
    e.preventDefault();

    if( description.length <=1 ) return;


    const newTodo = {
      id:new Date().getTime(),
      done:false, 
      description
    }
    
    onNewTodo(newTodo);
    onResetForm();
  }



  return (
    <form onSubmit={ onFormSubmit }>
      <input 
        type="text" 
        name="description"
        value={ description } 
        onChange = { onInputChange  }
        placeholder="Que hay que hacer"
        className="form-control mt-3"
      />
      <button 
        type="submit"
        className="btn btn-outline-primary mt-3"
      >
        Agregar
      </button>
    </form>
  )
}


export default TodoAdd;
