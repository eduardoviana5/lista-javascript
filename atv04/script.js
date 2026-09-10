function calcularDesconto() {
    const valorCompra = parseFloat(document.getElementById("valorCompra").value);
    const elementoResultado = document.getElementById("resultado");

    if (isNaN(valorCompra) || valorCompra <= 0) {
        elementoResultado.textContent = "Por favor, insira um valor de compra válido.";
        return;
    }

    let valorDesconto = 0;

    if (valorCompra >= 200) {
        valorDesconto = valorCompra * 0.10;
    }

    const valorFinal = valorCompra - valorDesconto;

    if (valorDesconto > 0) {
        elementoResultado.textContent = `Desconto de R$ ${valorDesconto.toFixed(2)}. Valor final: R$ ${valorFinal.toFixed(2)}`;
    } else {
        elementoResultado.textContent = `Valor final a pagar: R$ ${valorFinal.toFixed(2)}`;
    }
}