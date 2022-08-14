import { Soon } from './Soon'
import { useState, useCallback } from 'react';

export const Father = () => {

    const numeros = [2,4,6,8,10];
    const [valor, setValor] = useState(0);


const incrementFather = useCallback(
  (num) => {
    setValor( (value) => value + num );
  },
  [],
)

    return (
        <div>
            <h1>Padre</h1>
            <p> Total: { valor } </p>

            <hr />

            {
                numeros.map( n => (
                    <Soon 
                        key={ n }
                        numero={ n }
                        incrementar={ incrementFather }
                    />
                ))
            }
            {/* <Hijo /> */}
        </div>
    )
}


export default Soon;
