function verificarBateria() {
    const inputBateria = document.getElementById('bateria').value;
    const elementoResultado = document.getElementById('resultado');

    if (inputBateria === "") {
        elementoResultado.textContent = "Por favor, insira a porcentagem da bateria.";
        return;
    }

    const bateria = Number(inputBateria);

    if (bateria < 0 || bateria > 100 || isNaN(bateria)) {
        elementoResultado.textContent = "Por favor, insira um valor válido entre 0% e 100%.";
        return;
    }

    if (bateria <= 20) {
        elementoResultado.textContent = `Bateria em ${bateria}%: Bateria crítica!`;
    } else if (bateria <= 50) {
        elementoResultado.textContent = `Bateria em ${bateria}%: Bateria moderada.`;
    } else {
        elementoResultado.textContent = `Bateria em ${bateria}%: Bateria suficiente.`;
    }
}