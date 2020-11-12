import React, { useState, useEffect } from 'react';

const ExemploUseEffectTS: React.FC = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        document.title = `${counter}`;
        // return () => document.title = 'React App';
    }, [counter]);
    /*
        useEffect([(1)], [(2)]);
        (1) -> Codigo que vai ser executado
        (2) -> Quando o codigo vai ser executado. Quando o [] esta vazio, o useEffect é executado uma vez
    */

    return (
        <>
            <h1>{counter}</h1>
            <button onClick={() => setCounter(counter + 1)}>Adicionar</button>
        </>
    );
}

export default ExemploUseEffectTS;