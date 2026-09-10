function escolha(periodo) {

    const elementoPeriodo = document.getElementById('periodo').value;
    const elementoResultado = document.getElementById('resultado');

    if (elementoPeriodo === 'manha') {
        elementoResultado.textContent = 'Bons estudos nesta manhã!';
    } else if (elementoPeriodo === 'tarde') {
        elementoResultado.textContent = 'Tenha uma ótima tarde de estudos!';
    } else if (elementoPeriodo === 'noite') {
        elementoResultado.textContent = 'Boa noite! Foco nos estudos!';
    }
}