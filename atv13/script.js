function avaliacao() {
    const elementoNota = parseInt(document.getElementById('nota').value);
    const elementoResultado = document.getElementById('resultado');

  
    if (isNaN(elementoNota) || elementoNota < 1 || elementoNota > 5) {
        elementoResultado.textContent = "Digite uma nota válida (de 1 a 5)!";
        return;
    }

   if (elementoNota >= 4) {
        elementoResultado.textContent = "Avaliação positiva.";
    } else {
        elementoResultado.textContent = "Esta avaliação deverá ser analisada pela empresa.";
    }
}