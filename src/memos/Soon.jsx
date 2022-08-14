import React,{ memo } from 'react'


export const Soon = React.memo(({ numero, incrementar }) => {

    console.log('  Me volví a generar :(  ');

    return (
        <button
            className="btn btn-primary mr-3"
            onClick={ () => incrementar( numero ) }
        >
            { numero }
        </button>
    )
})


export default Soon;
