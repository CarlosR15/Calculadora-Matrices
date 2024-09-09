import { OperacionesProps } from './OperacionesProps';
import { sumarMatrices, restarMatrices, multiplicarMatrices, transponerMatriz } from './Operaciones';

const OpMatriz: React.FC<OperacionesProps> = ({ matrizA, matrizB, setResultado }) => {
    const handleSuma = () => {
        const result = sumarMatrices(matrizA, matrizB);
        setResultado(result);
    };

    const handleResta = () => {
        const result = restarMatrices(matrizA, matrizB);
        setResultado(result);
      };
    
      const handleMult = () => {
        const result = multiplicarMatrices(matrizA, matrizB);
        setResultado(result);
      };
    
      const handleTransponerA = () => {
        const result = transponerMatriz(matrizA);
        setResultado(result);
      };

    return (
        <div>
            <button onClick={handleSuma}>Sumar</button>
            <button onClick={handleResta}>Restar</button>
            <button onClick={handleMult}>Multiplicar</button>
            <button onClick={handleTransponerA}>Transponer Matriz A</button>
        </div>
    );
};

export default OpMatriz;