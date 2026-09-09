function verificar() {
    const temperatura = parseFloat(document.getElementById("temperatura").value);
    const alerta = document.getElementById("alerta");
    
    if (temperatura < 20) {
        document.getElementById("mensagem").textContent = "Está frio";
    } else if (temperatura >= 20 && temperatura <= 30) {
        document.getElementById("mensagem").textContent = "Está agradável";
    } else {
        alert("Está quente!");
    }

}