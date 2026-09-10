function calcIdade() {
    const anoNascimento = Number(document.getElementById('anoNascimento').value);
    
    const anoAtual = 2026; 
    
    const elementoResultado = document.getElementById('resultado');

    if (!anoNascimento || anoNascimento > anoAtual) {
        elementoResultado.innerHTML = "Por favor, insira um ano de nascimento válido.";
        elementoResultado.style.color = "red";
        return;
    }

    const idade = anoAtual - anoNascimento;

    if (idade >= 18) {
        elementoResultado.innerHTML = `Você tem ${idade} anos e é maior de idade.`;
    } else {
        elementoResultado.innerHTML = `Você tem ${idade} anos e é menor de idade.`;
    }
}