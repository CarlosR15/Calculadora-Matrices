import { useState } from 'react';
import { OperacionesProps } from './OperacionesProps';
import { sumarMatrices, restarMatrices, multiplicarMatrices, transponerMatriz } from './Operaciones';

const OpMatriz: React.FC<OperacionesProps> = ({ matrizA, matrizB, setResultado }) => {
  const [alertaE, setAlertaE] = useState<string | null>(null);
  const handleSuma = () => {
    try {
      const result = sumarMatrices(matrizA, matrizB);
      setResultado(result);
      setAlertaE(null);
    } catch (e: unknown) {
      if (e instanceof Error) {
        setAlertaE(e.message);
      }
      else {
        setAlertaE('Error padrote')
      };
    };
  };

  const handleResta = () => {
    try {
      const result = restarMatrices(matrizA, matrizB);
      setResultado(result);
      setAlertaE(null);
    } catch (e: unknown) {
      if (e instanceof Error) {
        setAlertaE(e.message);
      }
      else {
        setAlertaE('Error padrote')
      };
    }

  };

  const handleMult = () => {
    try {
      const result = multiplicarMatrices(matrizA, matrizB);
      setResultado(result);
      setAlertaE(null);
    } catch (e: unknown) {
      if (e instanceof Error) {
        setAlertaE(e.message);
      }
      else {
        setAlertaE('Error padrote')
      };
    }

  };

  const handleTransponerA = () => {
    try {
      const result = transponerMatriz(matrizA);
      setResultado(result);
      setAlertaE(null);
    } catch (e: unknown) {
      if (e instanceof Error) {
        setAlertaE(e.message);
      }
      else {
        setAlertaE('Error padrote')
      };
    }
  };

  return (
    <div className='operaciones'>
      <h4 className='err'>{alertaE}</h4>
      <button onClick={handleSuma}>A + B</button>
      <button onClick={handleResta}>A - B</button>
      <button onClick={handleMult}>A * B</button>
      <button onClick={handleTransponerA}>T Matriz A</button>
    </div>
  );
};

export default OpMatriz;