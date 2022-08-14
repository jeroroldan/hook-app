import { useState } from "react";




export const useCounter = (initialValue = 10 ) => {
  const [counter, setcounter] = useState(initialValue);

  const increment = ( value = 1 ) =>{
    setcounter(prevValue => prevValue + value )
  }
  const decrement = ( value = 1 ) =>{
    if(counter >= 0 ) { 
      setcounter(prevValue => prevValue - value )
     }
  }
  const reset = () =>{
    if(counter === 0 ){ return; }
    setcounter( 0 )
  }

  return {
    counter,
    increment,
    reset,
    decrement
  }
 
}
 
export default useCounter;