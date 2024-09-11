import { z } from 'zod'; //Importa la libreria Zod

// definicion de props para usar Zod
const ResMatrizProps = z.object({
    //Define quee el resultado debe ser un arreglo de números
    resultado: z.array(z.array(z.number()))
});

//Componente que  sirve para mostrar el reesultado de las operaciones
const ResMatriz: React.FC<z.infer<typeof ResMatrizProps>> = (props) => {
    return (
        <div className='resultado'>
            {/* Tabla que muestra la matriz como resultado */}
            <table>
                <tbody>
                    {/* Mapeo de las filas del resultado */}
                    {props.resultado.map((fila, filaIndex) => (
                        <tr className='tablaRes' key={filaIndex}>
                            {/* Mapeo de las columnas del resultado */}
                            {fila.map((value, columnaIndex) => (
                                <td className='tablaRes' key={columnaIndex}>{value}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
};

export default ResMatriz;