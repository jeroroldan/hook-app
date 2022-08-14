import { useEffect } from "react";








export const Message = () => {


  useEffect( () =>{

    const onMouseMove = ( { x,y } ) =>{
      const cords = { x, y } ;

    }

    window.addEventListener( 'mousemouve', onMouseMove)
     
    return () => {
      window.removeEventListener('mousemove',onMouseMove)
    }
  },[])

  return ( 
    <>
      <h3>User already exist!!</h3>
  
  
    </> );
}
 
export default Message;