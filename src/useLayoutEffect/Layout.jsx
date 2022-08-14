import { useFetch, useCounter } from '../hooks';
import LoadingQuote from '../examples/LoadingQuote';
import Quote from '../examples/Quote';



export const Layout = () => {

  const  { increment , counter } = useCounter(1);
  const {data , isLoading , hasError} = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);

  

  const { quote, author } = !!data && data[0];

  return ( 
    <>
      <h1>BreackinBad Quotes</h1>
      <hr/>

      {
        isLoading ? <LoadingQuote /> : <Quote author={ author } quote ={ quote } />
      }

      <button className="btn btn-primary" onClick={ () => increment() } disabled = { isLoading }  >
        Next quote
      </button>
  </> );
}
 
export default Layout;


// https://www.breakingbadapi.com/api/
// https://www.breakingbadapi.com/api/quotes/1