import { ResMatrizProps } from './ResultadoMatrizProps';

const ResMatriz: React.FC<ResMatrizProps> = ({ resultado }) => {
    return (
        <div className='resultado'>
            <table>
                <tbody>
                    {resultado.map((fila, filaIndex) => (
                        <tr className='tablaRes' key={filaIndex}>
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