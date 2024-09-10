const verificarDimensionesIguales = (matrizA: number[][], matrizB: number[][]): boolean => {
    if (matrizA.length !== matrizB.length) return false;
    for (let i = 0; i < matrizA.length; i++) {
        if (matrizA[i].length !== matrizB[i].length) return false;
    }
    return true;
};

export const sumarMatrices = (matrizA: number[][], matrizB: number[][]): number[][] => {
    if (!verificarDimensionesIguales(matrizA, matrizB)) {
        throw new Error("Las matrices no tienen las mismas dimensiones");
    }
    return matrizA.map((fila, filaIndex) =>
        fila.map((value, columnaIndex) => value + matrizB[filaIndex][columnaIndex])
    );
};

export const restarMatrices = (matrizA: number[][], matrizB: number[][]): number[][] => {
    if (!verificarDimensionesIguales(matrizA, matrizB)) {
        throw new Error("Las matrices no tienen las mismas dimensiones");
    }
    return matrizA.map((fila, filaIndex) =>
        fila.map((value, columnaIndex) => value - matrizB[filaIndex][columnaIndex])
    );
};

export const multiplicarMatrices = (matrizA: number[][], matrizB: number[][]): number[][] => {
    if (!verificarDimensionesIguales(matrizA, matrizB)) {
        throw new Error("El número de columnas de la primera matriz debe ser igual al número de filas de la segunda matriz");
    }
    const result: number[][] = Array(matrizA.length)
        .fill(0)
        .map(() => Array(matrizB[0].length).fill(0));

    for (let i = 0; i < matrizA.length; i++) {
        for (let j = 0; j < matrizB[0].length; j++) {
            for (let k = 0; k < matrizB.length; k++) {
                result[i][j] += matrizA[i][k] * matrizB[k][j];
            }
        }
    }

    return result;
};

export const transponerMatriz = (matriz: number[][]): number[][] => {
    return matriz[0].map((_, columnaIndex) => matriz.map(fila => fila[columnaIndex]));
};