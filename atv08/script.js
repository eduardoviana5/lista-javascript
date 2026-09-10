function validaSenha(){

    const elementoSenha = document.getElementById('senha').value;
    const elementoResultado = document.getElementById('resultado');

    if (elementoSenha.length < 8) {
        elementoResultado.textContent = "A senha deve ter pelo menos 8 caracteres.";
    } else {
        elementoResultado.textContent = "Senha válida!";
    }

    
}