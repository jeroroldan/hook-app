import { useEffect, useState } from 'react';
import { Message } from './MessageForm';

export const SimpleForm = () => {

  const [formState, setformState] = useState({
    username: 'strider',
    email: 'jeronimoroldan.com'
  });

  const { username, email } = formState;


  const onInputChange = ({ target }) =>{
    
    const { name , value } = target;

    setformState({
      ...formState,
      [name] : value
    })
    
  };


  useEffect( () =>{
    
  },[formState]);

 
  


  return ( <>
  
    <h1>Form Simple</h1>
    <hr />

    <label htmlFor='usrName'>Username</label>
    <input
      id="userName" 
      type="text"
      className="form-control"
      placeholder="Username"
      name="username"
      value={ username }
      onChange = { onInputChange }
    />

    <label htmlFor="email">Email</label>
    <input
      id="email" 
      type="email"
      placeholder = "jeronimoroldan.com"
      className="form-control mt-3"
      name="email"
      value={ email }
      onChange = { onInputChange }
    />

    { ( username === 'strider2' ) &&  <Message /> }

  </> );
}
 
export default SimpleForm;