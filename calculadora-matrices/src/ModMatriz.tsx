import { useState } from "react";
import { MatrizProps } from './MatrizProps'; //Importa los props para matrices

//Componente que se usa para modificar a las matrices
const ModMatriz: React.FC<MatrizProps> = ({ fila, columna, onChange }) => {
  //Inicia a la matriz con las dimensiones puestas en Calculadora.tsx (en este caso 2), con valores iniciales de 0, y se declara setMatriz que va a ser la encargada de actualizar a matriz
  const [matriz, setMatriz] = useState<number[][]>(
    Array.from({ length: fila }, () => Array(columna).fill(0))
  );

  //Manejador de cambio en los valores de la matriz
  const handleCambioInput = (fila: number, columna: number, value: string) => {
    // Copia la matriz actual (en este caso una 2x2 con valores 0)
    const actMatriz = [...matriz];
    actMatriz[fila][columna] = parseFloat(value);
    //Con estos se actualiza a la matriz
    setMatriz(actMatriz);
    onChange(actMatriz);
  };
  
  //Manejador para agregar filas y columnas a la matriz
  const handleAgregar = () => {
    //Verifica que no sobrepase el maximo de filas y columnas (en este caso 3) y si no sobrepasa
    if (matriz.length < 3 && matriz[0].length < 3) {
      // Crea una nueva fila con los valores 0
      const nuevaFila = Array(matriz[0].length).fill(0);
      const nuevaMatriz = [...matriz, nuevaFila]; //aqui se agrega la nueva fila

      //aqui a la matriz que se le agrego una fila se le agrega la columna
      const matrizConNuevaColumna = nuevaMatriz.map(fila => [...fila, 0]);

      //Hace el cambio y lo guarda
      setMatriz(matrizConNuevaColumna);
      onChange(matrizConNuevaColumna);
    }
  };

  //Manejador para quitar filas y columnas a la matriz
  const handleQuitar = () => {
    //Verifica que no sea  un 1 x 1, para no desaperecer las matrices, y si no es un 1x1
    if (matriz.length > 1 && matriz[0].length > 1) {
      //Elimina la ultima fila de la matriz
      const nuevaMatriz = matriz.slice(0, -1);

      //y en base a la matriz que se elimino de igual manera se elimina la ultima columna
      const matrizQuitarColumna = nuevaMatriz.map(fila => fila.slice(0, -1));

      //Hace el cambio y lo guarda
      setMatriz(matrizQuitarColumna);
      onChange(matrizQuitarColumna);
    }
  };

  return (
    <div>
      {/* Botones para agregar o quitar filas y columnas */}
      <div className="botonesDimen">
        <h3>Dimension de las matrices</h3>
        <button onClick={handleAgregar}>+</button> {/* Boton para agregar filas y columnas */}
        <button onClick={handleQuitar}>-</button> {/* Boton para quitar filas y columnas */}
      </div>
      {/* Tabla que se usa para mostrar la matriz */}
      <table>
        <tbody>
          {/* Mapea sobre cada fila de la matriz para crear una fila en la tabla */}
          {matriz.map((fila, filaIndex) => (
            <tr key={filaIndex}>
              {/* Mapea sobre cada valor en la fila para crear una celda en la tabla */}
              {fila.map((value, columnaIndex) => (
                <td key={columnaIndex}>
                  {/* creacion de la ceelda con input para modificar la matriz */}
                  <input
                    type="number"
                    value={value}
                    onChange={(e) =>
                      handleCambioInput(filaIndex, columnaIndex, e.target.value)
                    }
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ModMatriz;  // Exportacion de ModMatriz para Calculadora.tsx