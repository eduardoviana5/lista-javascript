function calcular() {
    const elementoCompra = parseFloat(document.getElementById('compra').value);
    const elementoResultado = document.getElementById('resultado');

    if (isNaN(elementoCompra) || elementoCompra <= 0) {
        elementoResultado.textContent = "Informe um valor de compra válido.";
        return;
    }

    if (elementoCompra >= 150) {
        elementoResultado.textContent = "Parabéns! Sua compra tem Frete Grátis.";
    } else {
        const frete = 25.00;
        const valorTotal = elementoCompra + frete;
        elementoResultado.textContent = `O valor do frete é R$ ${frete.toFixed(2)}. Total a pagar: R$ ${valorTotal.toFixed(2)}.`;
    }
}