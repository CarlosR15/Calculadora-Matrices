import { useState, useEffect } from "react";
import './CalculatorM.css'; //CSS de la aplicacion
import ModMatriz from './ModMatriz'; // Importa el componente ModMatriz
import OpMatriz from './OperacionesMatriz'; // Importa el componente OpMatriz
import ResMatriz from './ResMatriz'; // Importa el componente ResMatriz
import ChildrenTt from "./childrenTitulo"; // Importa el children ChildrenTt

function Calculadora() {
    // Definición de las contantes y sus estados para las matrices, y su resultado
    const [matrizA, setMatrizA] = useState<number[][]>([]);
    const [matrizB, setMatrizB] = useState<number[][]>([]);
    const [resultado, setResultado] = useState<number[][]>([]);

    //Use effect para imprimir en la consola cuando se modifique la matriz A
    useEffect(() => {
        console.log("Matrix A ha cambiado:", matrizA);
    }, [matrizA]);

    //Use effect para imprimir en la consola cuando se modifique la matriz B
    useEffect(() => {
        console.log("Matrix B ha cambiado:", matrizB);
    }, [matrizB]);

    return (
        <div>
            {/* Titulo de la calculadora llamando al childrenTt */}
            <ChildrenTt>
                <h1 className="titulo">Calculadora de matrices</h1> {/* lo que hay dentro del div children, en este caso el titulo de la calculadora */}
            </ChildrenTt>

            {/* div para tener una seccion con las matrices, así como sus titulos */}
            <div className="matrices">
                <div className="matrizConTit">
                    <h2 className="matrizTitulo">Matriz A</h2>
                    <ModMatriz fila={2} columna={2} onChange={setMatrizA} /> {/* Llamado a ModMatriz, el cual tiene el como se hace la matriz, en este caso A */}
                </div>

                <OpMatriz matrizA={matrizA} matrizB={matrizB} setResultado={setResultado} /> {/* Llamado a OpMatriz, el cual tiene los botones y funciones para realizar las operaciones de matrices */}

                <div className="matrizConTit">
                    <h2 className="matrizTitulo">Matriz B</h2>
                    <ModMatriz fila={2} columna={2} onChange={setMatrizB} /> {/* Llamado a ModMatriz, el cual tiene el como se hace la matriz, en este caso B */}
                </div>
            </div>

            {/* Resultado obtenido de setResultado en OpMatriz */}
            <div className="resultado">
                <h2>Resultado</h2>
                <ResMatriz resultado={resultado} /> {/* Llamado a ResMatriz, el cual contiene el resultado obtenido de las operaciones y lo muestra */}
            </div>
        </div>
    );
};

export default Calculadora; // Exportacion de calculadora para mostrar en main 