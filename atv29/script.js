function classificarProduto() {
    const inputQuantidade = document.getElementById('quantidade').value;
    const elementoResultado = document.getElementById('resultado');

    if (inputQuantidade === "") {
        elementoResultado.textContent = "Por favor, insira a quantidade do produto.";
        elementoResultado.style.color = "red";
        return;
    }

    const quantidade = Number(inputQuantidade);

    if (quantidade < 0 || isNaN(quantidade)) {
        elementoResultado.textContent = "Por favor, informe uma quantidade válida (maior ou igual a 0).";
        elementoResultado.style.color = "red";
        return;
    }

    if (quantidade === 0) {
        elementoResultado.textContent = "Situação: Produto indisponível";
        elementoResultado.style.color = "red";
    } else if (quantidade <= 5) {
        elementoResultado.textContent = "Situação: Estoque baixo";
        elementoResultado.style.color = "gold";
    } else {
        elementoResultado.textContent = "Situação: Estoque disponível";
        elementoResultado.style.color = "blue";
    }
}