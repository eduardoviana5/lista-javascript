function verificacao() {
    const inputNome = document.getElementById("nome").value.trim();
    const elementoMensagem = document.getElementById("mensagem");

    if (inputNome === "") {
        elementoMensagem.textContent = "Atenção: digite seu nome para continuar.";
        elementoMensagem.style.color = "red";
    } else {
        elementoMensagem.textContent = "Cadastro preenchido corretamente! Você pode prosseguir.";
        elementoMensagem.style.color = "green";
    }
}
