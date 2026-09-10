function calcular() {
    const elementoConsumo = parseFloat(document.getElementById('consumo').value);
    const elementoResultado = document.getElementById('resultado');

    // Estilos base comuns para a caixinha de resultado
    elementoResultado.style.padding = "12px";
    elementoResultado.style.borderRadius = "8px";
    elementoResultado.style.fontWeight = "600";
    elementoResultado.style.textAlign = "center";
    elementoResultado.style.marginTop = "15px";

    // Validação de entrada inválida
    if (isNaN(elementoConsumo) || elementoConsumo < 0) {
        elementoResultado.textContent = "Informe o consumo corretamente!";
        elementoResultado.style.backgroundColor = "#fef7e0"; 
        elementoResultado.style.color = "#b06000";           
        elementoResultado.style.border = "1px solid #fde293";
        return;
    }

    let classificacao = "";

    if (elementoConsumo <= 100) {
        classificacao = "Consumo Baixo";
        elementoResultado.style.backgroundColor = "#e6f4ea"; 
        elementoResultado.style.color = "#137333";           
        elementoResultado.style.border = "1px solid #a8dab5";
        
    } else if (elementoConsumo <= 200) {
        classificacao = "Consumo Moderado";
        elementoResultado.style.backgroundColor = "#e8f0fe"; 
        elementoResultado.style.color = "#1967d2";           
        elementoResultado.style.border = "1px solid #aecbfa";
        
    } else {
        classificacao = "Consumo Alto";
        elementoResultado.style.backgroundColor = "#fce8e6"; 
        elementoResultado.style.color = "#c5221f";           
        elementoResultado.style.border = "1px solid #fad2cf";
    }

    elementoResultado.textContent = `Classificação: ${classificacao}`;
}