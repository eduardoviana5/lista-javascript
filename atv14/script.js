function calcSalario(){

    const inputSalario = parseFloat(document.getElementById('salario').value);
    const elementoResultado = document.getElementById('resultado');

    if(inputSalario <= 0 || isNaN(inputSalario)){
        elementoResultado.textContent = "Digite um valor valido!"
        return;
    }

    const desconto = inputSalario * 0.08;
    const salarioLiquido = inputSalario - desconto;
    
    elementoResultado.innerHTML = `Salario Bruto: R$ ${inputSalario.toFixed(2)}.<br>Imposto a ser pago: R$ ${desconto.toFixed(2)}.<br>Salario Liquido: R$ ${salarioLiquido.toFixed(2)}.`;

}