import { useState } from 'react';
import { OperacionesProps } from './OperacionesProps'; //Importa los props utilizados
import { sumarMatrices, restarMatrices, multiplicarMatrices } from './Operaciones'; // importa las funciones que se utilizan para las operaciones  de las  matrices

//Componente que se usa para operar con las matrices
const OpMatriz: React.FC<OperacionesProps> = ({ matrizA, matrizB, setResultado }) => {
  // Estado para manejar errores, utiliza el string para el mensaje, y si no hay errores es null
  const [alertaE, setAlertaE] = useState<string | null>(null);

  // Manejador de Suma de matrices
  const handleSuma = () => {
    // try para errores, en este caso se busca saber si las matrices son de las mismas dimenciones
    try {
      // y si son de las mismas dimenciones  se hace  la operacion, guardando el resultado, y la alerta se pone null para borrar si anteriormente se tenia la alerta
      const result = sumarMatrices(matrizA, matrizB);
      setResultado(result);
      setAlertaE(null);
    } catch (e: unknown) {
      // Si atrapar el error esperado (que las matrices no tenga las mismas dimenciones) se guarda el mensaje de error y se manda para mostrar al usuario
      if (e instanceof Error) {
        setAlertaE(e.message);
      }
      // y si hay un error desconocido se pone el mensaje 'Error padrote'
      else {
        setAlertaE('Error padrote')
      };
    };
  };

  // Manejador de Resta de matrices
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

  // Manejador de multiplicacion de matrices
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

  return (
    <div className='operaciones'>
      {/* Muestra el mensajes de error si este se encuentra con el try catch */}
      <h4 className='err'>{alertaE}</h4>
      <button onClick={handleSuma}>A + B</button>
      <button onClick={handleResta}>A - B</button>
      <button onClick={handleMult}>A * B</button>
    </div>
  );
};

export default OpMatriz;