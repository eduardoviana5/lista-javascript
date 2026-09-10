function verificacao(){

    const elementoEstoque = parseInt(document.getElementById('estoque').value);
    const elementoResultado = (document.getElementById('resultado'));

    if(elementoEstoque < 0 || isNaN(elementoEstoque)){
        elementoResultado.textContent = "Digite um valor valido!";
        return;
    }

    if(elementoEstoque < 10){
        elementoResultado.textContent = "ALERTA: Estoque esta quase ACABANDO!";
        elementoResultado.style.color = "red";
        return;
    }else{
        elementoResultado.textContent = "Estoque Quantidade OK"
        elementoResultado.style.color = "blue"
    }



}