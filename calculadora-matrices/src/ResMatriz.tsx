import { ResMatrizProps } from './ResultadoMatrizProps';

const ResMatriz: React.FC<ResMatrizProps> = ({ resultado }) => {
    return (
        <div>
            <table>
                <tbody>
                    {resultado.map((fila, filaIndex) => (
                        <tr key={filaIndex}>
                            {fila.map((value, columnaIndex) => (
                                <td key={columnaIndex}>{value}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
};

export default ResMatriz;