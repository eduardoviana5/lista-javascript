let temaAtual = 'claro';

function alterar() {
    if (temaAtual === 'claro') {
        document.body.style.backgroundColor = '#121212'; 
        document.body.style.color = '#ffffff';          
        temaAtual = 'escuro';
    } else {
        document.body.style.backgroundColor = '#ffffff'; 
        document.body.style.color = '#000000';          
        temaAtual = 'claro';
    }
}