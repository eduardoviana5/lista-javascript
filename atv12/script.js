function verificacao(){

    const elementoIdade = parseInt(document.getElementById('idade').value);
    const elementoResultado = document.getElementById('resultado');

    if(elementoIdade <= 0 || isNaN(elementoIdade)){
        elementoResultado.textContent = "Digite uma idade válida!";
        return;
    }

    if(elementoIdade < 18){
        elementoResultado.textContent = "Você Não está apto para votar! (idade mínima: 18 anos)";
        return;
    }else{
        elementoResultado.textContent = "Você está apto para votar!"
    }



}