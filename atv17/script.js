function classificacao() {
    const inputDesempenho = parseInt(document.getElementById('desempenho').value);
    const elementoResultado = document.getElementById('resultado');


    if (isNaN(inputDesempenho) || inputDesempenho < 0 || inputDesempenho > 100) {
        elementoResultado.textContent = "Por favor, digite uma pontuação válida (entre 0 e 100).";
        return;
    }

    if (inputDesempenho < 50) {
        elementoResultado.innerHTML = `Seu Desempenho: ${inputDesempenho}.<br>Você está no nível Inicial!`;
    } else if (inputDesempenho < 80) {
        elementoResultado.innerHTML = `Seu Desempenho: ${inputDesempenho}.<br>Você está no nível Intermediário!`;
    } else {
        elementoResultado.innerHTML = `Seu Desempenho: ${inputDesempenho}.<br>Você está no nível Avançado!`;
    }
}