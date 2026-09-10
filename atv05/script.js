function verificarSituacao() {
    const media = parseFloat(document.getElementById("media").value);
    const elementoSituacao = document.getElementById("situacao");

    if (isNaN(media) || media < 0 || media > 10) {
        elementoSituacao.textContent = "Por favor, insira uma média válida (entre 0 e 10).";
        return;
    }

    if (media >= 6.0) {
        elementoSituacao.textContent = `Aprovado(a) com média ${media.toFixed(1)}.`;
        elementoSituacao.style.color = "green";
    } else {
        elementoSituacao.textContent = `Reprovado(a) com média ${media.toFixed(1)}.`;
        elementoSituacao.style.color = "red";

    }
}