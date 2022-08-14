import { useState } from "react";



const CounterApp = () => {

  const [{ counterOne,counterTwo,counterTrhee }, setCounter] = useState({
    counterOne: 2, 
    counterTwo: 34, 
    counterTrhee: 2 
  });


  const handleIncrementButton = () =>{
    setCounter(prevValue =>(
      {
        counterOne: counterOne +1 ,
        counterTwo,
        counterTrhee,
      }
    ))
  }




  return ( <>
  
    <h1>Counter: { counterOne } </h1>
    <h1>Counter: { counterTwo } </h1>
    <h1>Counter: { counterTrhee } </h1>

    <hr />


    <button className="btn btn-primary" onClick={ handleIncrementButton }>Increment +1</button>
  
  </> );
}
 
export default CounterApp;