function calcular() {
    const elementoConsumo = parseFloat(document.getElementById('consumo').value);
    const elementoResultado = document.getElementById('resultado');

  
    if (isNaN(elementoConsumo) || elementoConsumo < 0) {
        elementoResultado.textContent = "Informe o consumo corretamente!";
        return;
    }

    let classificacao = "";

    if (elementoConsumo <= 100) {
        classificacao = "Consumo Baixo";
    } else if (elementoConsumo > 100 && elementoConsumo <= 200) {
        classificacao = "Consumo Moderado";
    } else {
        classificacao = "Consumo Alto";
    }

        elementoResultado.textContent = `Classificação: ${classificacao}`;
}