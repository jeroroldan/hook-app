import { useLayoutEffect, useRef, useState } from "react";



export const Quote = ({ quote, author }) => {

  const pRef = useRef();
  
  const [ boxSixe, sexBoxSize ] = useState({ width:0 , height:0 })

  useLayoutEffect(() =>{
    const { width , height } = pRef.current.getBoundingClientRect();
    sexBoxSize({
      width,
      height  
    })
  },[quote])

  return ( <>
    <blockquote 
      className="blockquote text-end"
      style={{ display: 'flex' }}
    >
        <p className="mb-1" ref={ pRef } >{ quote }</p>
        <footer className="blockquote-footer"> { author } </footer>
    </blockquote>

    <code>{ JSON.stringify(boxSixe) }</code>
  </> );
}
 
export default Quote;