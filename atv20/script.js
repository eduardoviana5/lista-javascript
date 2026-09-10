function orientacao(cor) {
    const elementoOrientacao = document.getElementById('orientacao');

    if (cor === 'vermelho') {
        elementoOrientacao.textContent = "Sinal está Fechado! Aguarde!";
        elementoOrientacao.style.color = "red";
    } else if (cor === 'amarelo') {
        elementoOrientacao.textContent = "Prepare-se para dar partida";
        elementoOrientacao.style.color = "gold";
    } else if (cor === 'verde') {
        elementoOrientacao.textContent = "Sinal está Aberto! Pode Prosseguir!";
        elementoOrientacao.style.color = "green";
    }
}