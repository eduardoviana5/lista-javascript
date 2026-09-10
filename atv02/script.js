function verificar() {
    const idade = parseInt(document.getElementById("idade").value);
    const mensagem = document.getElementById("mensagem");


    if (idade < 18) {
        mensagem.textContent = "Você é menor de idade.";
    } else {
        mensagem.textContent = "Você é maior de idade.";
    }

}