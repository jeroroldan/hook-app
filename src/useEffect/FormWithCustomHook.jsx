import { useEffect } from 'react';
import useForm from '../hooks/useForm';


export const FormWithCustomHook = () => {

 const { formState, onInputChange, onResetForm } = useForm({
    username:'',
    email:'',
    password:''
 })

 const { username , email, password } = formState;


  useEffect( () =>{
    
  },[formState]);

  return ( <>
  
    <h1>Form Simple</h1>
    <hr />

    <label htmlFor='userName'>Username: </label>
    <input
      id="userName" 
      type="text"
      className="form-control mt-2"
      placeholder="Username"
      name="username"
      value={ username }
      onChange = {  onInputChange }
    />

    <label htmlFor="email">Email</label>
    <input
      id="email" 
      type="email"
      placeholder = "jeronimoroldan.com"
      className="form-control mt-3"
      name="email"
      value={ email }
      onChange = {  onInputChange }
    />

    <label htmlFor="userpassword">Password</label>
    <input
      id="userpassword" 
      type="password"
      placeholder = "userpassword"
      className="form-control mt-3"
      name="password"
      value={ password }
      onChange = { onInputChange }
    />

    <button 
      className='btn btn-primary mt-3' 
      onClick={ onResetForm }
    >
      Reset
    </button>


  </> );
}
 
export default FormWithCustomHook;