function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert("Por favor, preencha os campos com valores válidos!");
        return;
    }

    const imc = peso / (altura * altura);

    let classificacao = '';

    if (imc < 18.5) {
        classificacao = 'Magreza';
    } else if (imc >= 18.5 && imc <= 24.9) {
        classificacao = 'Peso normal (adequado)';
    } else if (imc >= 25.0 && imc <= 29.9) {
        classificacao = 'Sobrepeso';
    } else if (imc >= 30.0 && imc <= 39.9) {
        classificacao = 'Obesidade';
    } else { 
        classificacao = 'Obesidade grave';
    }
    
    const elementoValorIMC = document.getElementById('valorIMC');
    const elementoClassificacao = document.getElementById('classificacao');
    const divResultado = document.getElementById('resultado');

   
    elementoValorIMC.innerHTML = `IMC: <strong>${imc.toFixed(2)}</strong>`;
    elementoClassificacao.innerHTML = `Classificação: <strong>${classificacao}</strong>`;

   divResultado.classList.remove('hidden');
    
}