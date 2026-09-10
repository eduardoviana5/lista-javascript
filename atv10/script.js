function conversao(){

    const elementoCelsius = parseFloat(document.getElementById('celsius').value);
    const elementoResultado = document.getElementById('resultado');

    if(isNaN(elementoCelsius)){
        elementoResultado.textContent = "Digite um valor valido!"
        return;
    }

    const fahrenheit = (elementoCelsius * 1.8) + 32;

    if (fahrenheit > 86) {
        elementoResultado.textContent = `${fahrenheit.toFixed(1)} °F - Temperatura Alta (Acima de 86 °F)`;
    } else {
        elementoResultado.textContent = `${fahrenheit.toFixed(1)} °F - Temperatura Normal (86 °F ou menor)`;
    }

}