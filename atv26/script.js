function calcular() {
    const inputPreco = document.getElementById('preco').value;
    const inputQuantidade = document.getElementById('quantidade').value;
    const elementoResultado = document.getElementById('resultado');

    if (inputPreco === "" || inputQuantidade === "") {
        elementoResultado.textContent = "Por favor, preencha todos os campos.";
        return;
    }

    const preco = Number(inputPreco);
    const quantidade = Number(inputQuantidade);

    if (preco <= 0 || quantidade <= 0 || isNaN(preco) || isNaN(quantidade)) {
        elementoResultado.textContent = "Por favor, informe valores válidos maiores que zero.";
        return;
    }

    const total = preco * quantidade;

    if (total >= 300) {
        elementoResultado.textContent = `Total: R$ ${total.toFixed(2)} - Parabéns! Você recebeu frete grátis!`;
    } else {
        elementoResultado.textContent = `Total: R$ ${total.toFixed(2)} - O frete será cobrado.`;
    }
}