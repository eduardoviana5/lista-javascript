function escolha(periodo) {

    const elementoPeriodo = document.getElementById('periodo').value;
    const elementoResultado = document.getElementById('resultado');

    if (elementoPeriodo === 'manha') {
        elementoResultado.textContent = 'Bom dia!';
    } else if (elementoPeriodo === 'tarde') {
        elementoResultado.textContent = 'Boa Tarde!';
    } else if (elementoPeriodo === 'noite') {
        elementoResultado.textContent = 'Boa noite!';
    }
}