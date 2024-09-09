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

    return (
        <div>
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