function calcular(){

    const av1 = parseFloat(document.getElementById('av1').value);
    const av2 = parseFloat(document.getElementById('av2').value);

    if(isNaN(av1) || isNaN(av2) || av1 < 0 || av2 < 0){
        alert("Por favor, preencha as notas com valores validos")
        return;
    }


    const media = (av1 + av2)/2;

    let aprovacao ="";

    if(media >= 7){
        aprovacao = "Aprovado!"
    }else{
        aprovacao = "Reprovado!"
    }

    const elementoResultado = document.getElementById('resultado');
    const elementoAprovacao = document.getElementById('aprovacao');

    elementoResultado.innerHTML = `Media: ${media.toFixed(1)}`
    elementoAprovacao.innerHTML = `Situacão: ${aprovacao}`;


}