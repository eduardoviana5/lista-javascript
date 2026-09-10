function analisarCredito() {
    const inputRenda = document.getElementById('renda').value;
    const elementoResultado = document.getElementById('resultado');

    if (inputRenda === "") {
        elementoResultado.textContent = "Por favor, informe a renda mensal.";
        return;
    }

    const renda = Number(inputRenda);

    if (renda < 0 || isNaN(renda)) {
        elementoResultado.textContent = "Por favor, informe um valor de renda válido.";
        return;
    }

    if (renda < 2000) {
        elementoResultado.textContent = `Renda R$ ${renda.toFixed(2)}: Análise não aprovada.`;
        elementoResultado.style.color = "red";
    } else if (renda < 5000) {
        elementoResultado.textContent = `Renda R$ ${renda.toFixed(2)}: Necessária análise complementar.`;
        elementoResultado.style.color = "blue";
    } else {
        elementoResultado.textContent = `Renda R$ ${renda.toFixed(2)}: Análise inicial aprovada.`;
        elementoResultado.style.color = "blue";
    }
}