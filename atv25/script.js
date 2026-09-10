function verifica() {
    const inputMedia = document.getElementById('media').value;
    const elementoResultado = document.getElementById('resultado');

    // Validação de entrada vazia
    if (inputMedia === "") {
        elementoResultado.textContent = "Por favor, informe a média do aluno.";
        return;
    }

    const media = Number(inputMedia);

    // Validação de limites numéricos
    if (media < 0 || media > 10 || isNaN(media)) {
        elementoResultado.textContent = "Média inválida! Informe um valor entre 0 e 10.";
        return;
    }

    // Estrutura condicional requerida na Questão 25
    if (media >= 7) {
        elementoResultado.textContent = `Média ${media.toFixed(1)}: Aprovado!`;
    } else if (media >= 5) {
        elementoResultado.textContent = `Média ${media.toFixed(1)}: Recuperação!`;
    } else {
        elementoResultado.textContent = `Média ${media.toFixed(1)}: Reprovado!`;
    }
}