export const sumarMatrices = (matrizA: number[][], matrizB: number[][]): number[][] => {
    return matrizA.map((fila, filaIndex) =>
        fila.map((value, columnaIndex) => value + matrizB[filaIndex][columnaIndex])
    );
};

export const restarMatrices = (matrizA: number[][], matrizB: number[][]): number[][] => {
    return matrizA.map((fila, filaIndex) =>
        fila.map((value, columnaIndex) => value - matrizB[filaIndex][columnaIndex])
    );
};

export const multiplicarMatrices = (matrizA: number[][], matrizB: number[][]): number[][] => {
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