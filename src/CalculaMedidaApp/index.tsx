import React, { FormEvent, useState } from 'react';

interface Medida {
    nome: string;
    campoA: number;
    campoB: number;
    campoC: number;
}

const valoresIniciais = {
    nome: '',
    campoA: 0,
    campoB: 0,
    campoC: 0,
};

const CalculaMedidaApp = () => {
    const [nome, setNome] = useState<string>(valoresIniciais.nome);
    const [campoA, setCampoA] = useState<number>(valoresIniciais.campoA);
    const [campoB, setCampoB] = useState<number>(valoresIniciais.campoB);
    const [campoC, setCampoC] = useState<number>(valoresIniciais.campoC);
    const [medidas, setMedidas] = useState<Medida[]>([]);

    function handleChange(event: FormEvent) {
        // 
    }
    
    function formChange() {
        // 
    }

    return (
        <>
            <div>
                <h1>Calcula Medida</h1>
            </div>
            <div>
                <form>
                    <input type="number" name="campo_a" id="campo_a" value={campoA} onChange={() => setCampoA}/>
                    <input type="number" name="campo_b" id="campo_b" value={campoB} onChange={() => setCampoB}/>
                    <input type="number" name="campo_c" id="campo_c" value={campoC} onChange={() => setCampoC}/>
                    <input type="text" name="nome" id="nome" value={nome} onChange={() => setNome}/>
                    <p>Resultado: <span>0</span></p>
                </form>
            </div>
            <div>
                <button type="button">Calcular</button>
                <button type="reset">Limpar</button>
            </div>
            <ul>
                <li>A01 - 3 - 2.24</li>
                <li>A02 - 1.5 - 1.12</li>
                <li>A03 - 2 - 1.49</li>
                <li>A04 - 6 - 4.48</li>
                <li>A05 - 2 - 1.49</li>
                <li>A06 - 6 - 4.48</li>
                <li>A07 - 3 - 2.24</li>
                <li>A08 - 4 - 2.99</li>
                <li>A09 - 2 - 1.49</li>
                <li>A10 - 10 - 7.47</li>
                <li>A11 - 1.5 - 1.12</li>
                <li>A12 - 1.5 - 1.12</li>
                <li>A13 - 9 - 6.72</li>
                <li>A14 - 12 - 8.96</li>
                <li>A15 - 3 - 2.24</li>
            </ul>
        </>
    );
}

export default CalculaMedidaApp;