//Verificador de matrices para saber si tienen las mismas dimenciones
// Se puede cambiar el nombre a metodos aritmeticos
const verificarDimensionesIguales = (matrizA: number[][], matrizB: number[][]): boolean => {
    //Si la matriz A y B tienen las mismas filas y columnas, y si no las tienen devuelve false
    if (matrizA.length !== matrizB.length) return false;
    for (let i = 0; i < matrizA.length; i++) {
        if (matrizA[i].length !== matrizB[i].length) return false;
    }
    //Y si tienen el mismo número de fulas y columnas se devuelve true
    return true;
};

export const sumarMatrices = (matrizA: number[][], matrizB: number[][]): number[][] => {
    //Verifica que las matrices tengan las mismas dimenciones, si estas no tienen las mismas dimenciones, se manda el error
    if (!verificarDimensionesIguales(matrizA, matrizB)) {
        throw new Error("Las matrices no tienen las mismas dimensiones");
    }
    //Si las matrices tienen las mismas dimenciones se suman
    return matrizA.map((fila, filaIndex) =>
        fila.map((value, columnaIndex) => value + matrizB[filaIndex][columnaIndex])
    );
};

export const restarMatrices = (matrizA: number[][], matrizB: number[][]): number[][] => {
    //Verifica que las matrices tengan las mismas dimenciones, si estas no tienen las mismas dimenciones, se manda el error
    if (!verificarDimensionesIguales(matrizA, matrizB)) {
        throw new Error("Las matrices no tienen las mismas dimensiones");
    }
    //Si las matrices tienen las mismas dimenciones se restan
    return matrizA.map((fila, filaIndex) =>
        fila.map((value, columnaIndex) => value - matrizB[filaIndex][columnaIndex])
    );
};

export const multiplicarMatrices = (matrizA: number[][], matrizB: number[][]): number[][] => {
    //Verifica que las matrices tengan las mismas dimenciones, si estas no tienen las mismas dimenciones, se manda el error
    if (!verificarDimensionesIguales(matrizA, matrizB)) {
        throw new Error("Las matrices no tienen las mismas dimensiones");
    }
    //Si las matrices tienen las mismas dimenciones se Multiplican
    //En este caso se crea otra matriz para los resultados de la multiplicacion
    const result: number[][] = Array(matrizA.length)
        .fill(0)
        .map(() => Array(matrizB[0].length).fill(0));

    // Aqui se multiplica cada fila de la matriz a con cada columna de la matriz b
    for (let i = 0; i < matrizA.length; i++) {
        for (let j = 0; j < matrizB[0].length; j++) {
            for (let k = 0; k < matrizB.length; k++) {
                result[i][j] += matrizA[i][k] * matrizB[k][j];
            }
        }
    }

    //y regresa el resultado
    return result;
};