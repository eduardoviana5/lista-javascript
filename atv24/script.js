// Aplica a máscara e bloqueia caracteres inválidos enquanto o usuário digita
function mascaraHorario(input) {
    let valor = input.value.replace(/\D/g, ""); // Remove tudo o que não é número

    if (valor.length >= 3) {
        input.value = valor.slice(0, 2) + ":" + valor.slice(2, 4);
    } else {
        input.value = valor;
    }
}

function verifica() {
    const inputHorario = document.getElementById('horario').value;
    const elementoResultado = document.getElementById('resultado');

    if (inputHorario.length < 5) {
        elementoResultado.textContent = "Por favor, digite o horário no formato HH:MM (ex: 08:57).";
        return;
    }

    const partes = inputHorario.split(':');
    const horas = Number(partes[0]);
    const minutos = Number(partes[1]);

    if (horas > 23 || minutos > 59) {
        elementoResultado.textContent = "Horário inválido! Informe um valor entre 00:00 e 23:59.";
        return;
    }

    const estaAberta = horas >= 8 && (horas < 22 || (horas === 22 && minutos === 0));

    if (estaAberta) {
        elementoResultado.textContent = `Horário (${inputHorario}): Biblioteca Aberta!`;
    } else {
        elementoResultado.textContent = `Horário (${inputHorario}): Biblioteca Fechada!`;
    }
}