import { useState, useEffect } from "react";
import './CalculatorM.css';
import ModMatriz from './ModMatriz';
import OpMatriz from './OperacionesMatriz';
import ResMatriz from './ResMatriz';

function Calculadora() {
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
            <h1 className="titulo">Calculadora de Matrices</h1>

            <div className="matrices">
                <div className="matrizConTit">
                    <h2 className="matrizTitulo">Matriz A</h2>
                    <ModMatriz fila={2} columna={2} onChange={setMatrizA} />
                </div>


                <OpMatriz matrizA={matrizA} matrizB={matrizB} setResultado={setResultado} />

                <div className="matrizConTit">
                    <h2 className="matrizTitulo">Matriz B</h2>
                    <ModMatriz fila={2} columna={2} onChange={setMatrizB} />
                </div>
            </div>

            <div className="resultado">
                <h2>Resultado</h2>
                <ResMatriz resultado={resultado} />
            </div>
        </div>
    );
};

export default Calculadora;