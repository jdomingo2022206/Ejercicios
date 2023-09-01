var m = [];
var n, j, a;

function coeficienteBinomial(n, k) {
    if (k === 0 || k === n) {
        return 1;
    }
    return coeficienteBinomial(n - 1, k - 1) + coeficienteBinomial(n - 1, k);
}

function generarTriangulo(filas) {
    var resultado = '<pre>';
    for (var i = 0; i < filas; i++) {
        for (var espacio = filas - i; espacio > 0; espacio--) {
            resultado += ' ';
        }
        for (var j = 0; j <= i; j++) {
            resultado += coeficienteBinomial(i, j) + ' ';
        }
        resultado += '\n';
    }
    resultado += '</pre>';
    return resultado;
}

function operar() {
    n = parseInt(document.getElementById('filas').value);
    j = 1;
    a = 2;

    m[n * 100 + 1] = a + 0;
    m[n * 100 + 1] = a + 1;
    m[n * 100 + j];
    m[n * 100 + j + 1];

    var trianguloPascal = generarTriangulo(n);
    document.getElementById('resultado').innerHTML = trianguloPascal;
}
