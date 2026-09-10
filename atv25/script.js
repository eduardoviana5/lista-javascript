function verifica() {
    const inputMedia = document.getElementById('media').value;
    const elementoResultado = document.getElementById('resultado');

    if (inputMedia === "") {
        elementoResultado.textContent = "Por favor, informe a média do aluno.";
        return;
    }

    const media = Number(inputMedia);

    if (media < 0 || media > 10 || isNaN(media)) {
        elementoResultado.textContent = "Média inválida! Informe um valor entre 0 e 10.";
        return;
    }

    if (media >= 7) {
        elementoResultado.textContent = `Média ${media.toFixed(1)}: Aprovado!`;
        elementoResultado.style.color = "blue";
    } else if (media >= 5) {
        elementoResultado.textContent = `Média ${media.toFixed(1)}: Recuperação!`;
        elementoResultado.style.color = "red";
    } else {
        elementoResultado.textContent = `Média ${media.toFixed(1)}: Reprovado!`;
        elementoResultado.style.color = "red";
    }
}