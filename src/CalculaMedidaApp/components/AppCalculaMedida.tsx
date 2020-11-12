import React from 'react';

const AppCalculaMedida = () => {
    return (
        <div>
            <h1>Calcula Medida</h1>
            <input type="number" name="campo_a" id="campo_a"/>
            <input type="number" name="campo_b" id="campo_b"/>
            <input type="number" name="campo_c" id="campo_c"/>
            <p>Resultado: <span>0</span></p>
            <button type="button">Calcular</button>
        </div>
    );
}

export default AppCalculaMedida;