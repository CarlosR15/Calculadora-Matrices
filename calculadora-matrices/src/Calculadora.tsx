import { useState, useEffect } from "react";
import AgrMatriz from './AgrMatriz';

function Calculadora() {
    const [matrizA, setMatrizA] = useState<number[][]>([]);
    const [matrizB, setMatrizB] = useState<number[][]>([]);

    useEffect(() => {
        console.log("Matrix A ha cambiado:", matrizA);
    }, [matrizA]);

    useEffect(() => {
        console.log("Matrix B ha cambiado:", matrizB);
    }, [matrizB]);

    return (
        <div>
            <h1>Calculadora de Matrices</h1>
      
            <h2>Matriz A</h2>
            <AgrMatriz fila={3} columna={3} onChange={setMatrizA} />

            <h2>Matriz B</h2>
            <AgrMatriz fila={3} columna={3} onChange={setMatrizB} />

            <h3>La matriz a es:</h3>
            <pre>{JSON.stringify(matrizA, null, 2)}</pre> 

            <h3>La matriz b es:</h3>
            <pre>{JSON.stringify(matrizB, null, 2)}</pre> 
        </div>
    );
};

export default Calculadora;