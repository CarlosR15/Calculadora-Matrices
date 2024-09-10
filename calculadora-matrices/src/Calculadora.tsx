import { useState, useEffect } from "react";
import './CalculatorM.css';
import ModMatriz from './ModMatriz';
import OpMatriz from './OperacionesMatriz';
import ResMatriz from './ResMatriz';

function Calculadora() {
    const [] = useState<number[][]>([]);
    const [matrizA, setMatrizA] = useState<number[][]>([]);
    const [matrizB, setMatrizB] = useState<number[][]>([]);
    const [resultado, setResultado] = useState<number[][]>([]);

    useEffect(() => {
        console.log("Matrix A ha cambiado:", matrizA);
    }, [matrizA]);

    useEffect(() => {
        console.log("Matrix B ha cambiado:", matrizB);
    }, [matrizB]);

    return (
        <div>
            <h1>Calculadora de Matrices</h1>            

            <div className="matrices">
                <h2>Matriz A</h2>
                <ModMatriz fila={2} columna={2} onChange={setMatrizA} />

                <h2>Matriz B</h2>
                <ModMatriz fila={2} columna={2} onChange={setMatrizB} />
            </div>
            
            <h3>¿Qué operación quieres hacer?</h3>
            <OpMatriz matrizA={matrizA} matrizB={matrizB} setResultado={setResultado} />

            <h2>Resultado</h2>
            <ResMatriz resultado={resultado} />
        </div>
    );
};

export default Calculadora;