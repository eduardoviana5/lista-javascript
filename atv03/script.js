function verificar() {
    const campoTemperatura = document.getElementById("temperatura").value;
    const elementoAlerta = document.getElementById("alerta");

    
    if (campoTemperatura === "") {
        elementoAlerta.textContent = "Por favor, insira uma temperatura.";
        return;
    }

    const temperatura = parseFloat(campoTemperatura);

   
    if (temperatura > 30) {
        elementoAlerta.textContent = "ALERTA: Temperatura acima do limite permitido! (Acima de 30 °C)";
    } else {
        elementoAlerta.textContent = "Temperatura normal.";
    }
}