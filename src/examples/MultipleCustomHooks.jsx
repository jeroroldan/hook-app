import { useFetch, useCounter } from '../hooks';
import LoadingQuote from './LoadingQuote';
import Quote from './Quote';



export const MultipleCustomHooks = () => {

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
 
export default MultipleCustomHooks;


// https://www.breakingbadapi.com/api/
// https://www.breakingbadapi.com/api/quotes/1