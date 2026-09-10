function verificacao(){

    const inputVelocidade = parseFloat(document.getElementById('velocidade').value);
    const elementoResultado = document.getElementById('resultado');

    if(inputVelocidade < 0 || isNaN(inputVelocidade)){
        elementoResultado.textContent = "Digite um valor valido!"
        return;
    }

    if(inputVelocidade <= 60){
        elementoResultado.innerHTML = "Velocidade permitida!"
        elementoResultado.style.color = "blue";
    }else {
        elementoResultado.innerHTML = "Velocidade acima do limite!"
        elementoResultado.style.color = "red";
    }
   
    
    elementoResultado.innerHTML = `Salario Bruto: R$ ${inputSalario.toFixed(2)}.<br>Imposto a ser pago: R$ ${desconto.toFixed(2)}.<br>Salario Liquido: R$ ${salarioLiquido.toFixed(2)}.`;

}