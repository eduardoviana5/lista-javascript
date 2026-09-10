function cadastrar() {
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const elementoResultado = document.getElementById('resultado');

    if (nome === "" || email === "") {
        elementoResultado.textContent = "Por favor, preencha todos os campos (Nome e E-mail) para prosseguir.";
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        elementoResultado.textContent = "Por favor, insira um e-mail válido.";
        return;
    }

    elementoResultado.textContent = `Cadastro realizado com sucesso! Bem-vindo(a), ${nome}.`;
}