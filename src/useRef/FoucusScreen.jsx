import { useRef } from "react";


const FocusScreeen = () => {

  const inputRef =  useRef();


  const onFocus = () =>{
    inputRef.current.select();
  }



  return ( <>
    <h1>Foucus screen</h1>
    <hr/>

    <input 
      type="text"
      className="form-control"
      placeholder="Ingrese su nombre" 
      ref={ inputRef }
    />

    <button className="btn btn-primary mt-5" onClick={ onFocus } >
      Set focus
    </button>


  </> );
}
 
export default FocusScreeen;