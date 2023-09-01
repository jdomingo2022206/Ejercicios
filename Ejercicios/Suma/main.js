const valor1 = document.getElementById('valor1');
const valor2 = document.getElementById('valor2');
const button = document.getElementById('btnSuma');
const pistaElement = document.getElementById('pista');

button.addEventListener('click', function (event) {
    const valor1Num = parseFloat(valor1.value);
    const valor2Num = parseFloat(valor2.value);

    const resultado = valor1Num + valor2Num;
    txtResultado.value = resultado; 
});


