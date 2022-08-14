import { useState,useCallback } from 'react';
import ShowIncrement from './ShowIncrement';

export const CallBackHook = () => {

const [counter, setcounter] = useState( 10 );


const incrementFather = useCallback(
  () => {
    setcounter( (value) => value + 1 );
  },
  [],
)
 
  return ( <>
    <h1>useCallback Hook: { counter }</h1> 
    <hr />
    <ShowIncrement increment={ incrementFather } />



  </> );
}
 
export default CallBackHook;