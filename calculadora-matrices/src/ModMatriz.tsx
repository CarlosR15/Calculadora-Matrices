import { useState } from "react";
import { MatrizProps } from './MatrizProps';

const ModMatriz: React.FC<MatrizProps> = ({ fila, columna, onChange }) => {
  const [matriz, setMatriz] = useState<number[][]>(
    Array.from({ length: fila }, () => Array(columna).fill(0))
  );

  const handleCambioInput = (fila: number, columna: number, value: string) => {
    const actMatriz = [...matriz];
    actMatriz[fila][columna] = parseFloat(value);
    setMatriz(actMatriz);
    onChange(actMatriz);
  };

  const handleAgregar = () => {
    if (matriz.length < 3 && matriz[0].length < 3) {
      const nuevaFila = Array(matriz[0].length).fill(0);
      const nuevaMatriz = [...matriz, nuevaFila];

      const matrizConNuevaColumna = nuevaMatriz.map(fila => [...fila, 0]);

      setMatriz(matrizConNuevaColumna);
      onChange(matrizConNuevaColumna);
    }
  };

  const handleQuitar = () => {
    if (matriz.length > 1 && matriz[0].length > 1) {
      const nuevaMatriz = matriz.slice(0, -1);

      const matrizQuitarColumna = nuevaMatriz.map(fila => fila.slice(0, -1));

      setMatriz(matrizQuitarColumna);
      onChange(matrizQuitarColumna);
    }
  };

  return (
    <div>
      <div className="botonesDimen">
        <h3>Dimension de las matrices</h3>
        <button onClick={handleAgregar}>+</button>
        <button onClick={handleQuitar}>-</button>
      </div>
      <table>
        <tbody>
          {matriz.map((fila, filaIndex) => (
            <tr key={filaIndex}>
              {fila.map((value, columnaIndex) => (
                <td key={columnaIndex}>
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

export default ModMatriz;