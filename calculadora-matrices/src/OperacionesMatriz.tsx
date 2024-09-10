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
    <div>
      <h2>{alertaE}</h2>
      <button onClick={handleSuma}>Sumar</button>
      <button onClick={handleResta}>Restar</button>
      <button onClick={handleMult}>Multiplicar</button>
      <button onClick={handleTransponerA}>Transponer Matriz A</button>
    </div>
  );
};

export default OpMatriz;