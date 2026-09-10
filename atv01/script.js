function calcularMedia() {
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const resultado = document.getElementById("resultado");

    const media = (nota1 + nota2) / 2;

    if (media >= 7) {
        resultado.textContent = `Média: ${media.toFixed(1)} - Estudante Aprovado!`;
        resultado.style.color ="green"
    } else {
        resultado.textContent = `Média: ${media.toFixed(1)} - Estudante Não Aprovado.`;
        resultado.style.color ="red"

    }
}