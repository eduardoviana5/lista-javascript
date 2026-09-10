function verificarAcesso() {
    
    const nome = document.getElementById('nome').value.trim();
    const idade = parseInt(document.getElementById('idade').value);
    const elementoResultado = document.getElementById('resultado');

    
    if (nome === "" || isNaN(idade) || idade <= 0) {
        elementoResultado.textContent = "Por favor, preencha todos os campos corretamente.";
        return;
    }

   
    if (idade >= 18) {
        elementoResultado.textContent = `Acesso Permitido! Seja bem-vindo(a), ${nome}.`;
    } else {
        elementoResultado.textContent = `Acesso Negado! Lamento ${nome}, é necessário ter 18 anos ou mais.`;
    }
}


