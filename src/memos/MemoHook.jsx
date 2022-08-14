import { useMemo } from 'react';
import { useCounter } from '../hooks';



export const heavyStuff  = ( iterationNumber=10) =>{
  for( let i = 0; i < iterationNumber ; i ++ ){
    console.log('ahi vamoe');
  }
    return `${ iterationNumber } itereaxiones realizadas `
}


export const MemoHook = () => {

  const { counter , increment } = useCounter(10);

  const memorizeValue = useMemo(() => heavyStuff(counter), [counter] )
  
  return ( <>
    <h1>Counter:  <small>{ counter }</small></h1>
    <hr />

    <h4>{ memorizeValue }</h4>

    <button
      className="btn btn-primary"
      onClick={() => increment() } 
    >
      +1
    </button>
  
  
  </> );
}
 
export default MemoHook;