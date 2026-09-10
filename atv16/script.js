function verificacao() {
  
    const inputFrequencia = parseFloat(document.getElementById('frequencia').value);
    const elementoResultado = document.getElementById('resultado');

    if (isNaN(inputFrequencia) || inputFrequencia < 0 || inputFrequencia > 100) {
        elementoResultado.textContent = "Por favor, digite um valor de frequência válido (entre 0 e 100).";
        return;
    }

    if (inputFrequencia >= 75) {
        elementoResultado.textContent = `Aluno APROVADO! Frequência: ${inputFrequencia}%.`;
    } else {
        elementoResultado.textContent = `Aluno REPROVADO por falta! Frequência: ${inputFrequencia}%.`;
    }
}