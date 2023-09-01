const valor = document.getElementById('txtValor');
const boton = document.getElementById('btnGenerar');

boton.addEventListener('click', function (event) {

    const valorNum = parseFloat(valor.value);
    for (let i = 0; i < 10; i++) {
        const resultado = i * valorNum;
        document.getElementById(a).textContent =  resultado;
    }
});



