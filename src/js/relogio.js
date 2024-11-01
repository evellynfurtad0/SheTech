const dias = document.getElementById('dias');
const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');
const startButton = document.getElementById('startButton');
const datetimeInput = document.getElementById('datetime');

let countdownInterval;

startButton.addEventListener('click', function () {
    const selectedDate = new Date(datetimeInput.value);

    // Verifica se a data escolhida é válida
    if (isNaN(selectedDate.getTime())) {
        alert('Por favor, escolha uma data e hora válidas.');
        return;
    }

    // Limpa qualquer contagem regressiva anterior
    clearInterval(countdownInterval);

    function updateCountdown() {
        const now = new Date();
        const timeDifference = selectedDate - now;

        // Se o tempo acabar, parar o relógio
        if (timeDifference < 0) {
            clearInterval(countdownInterval);
            dias.textContent = '00';
            horas.textContent = '00';
            minutos.textContent = '00';
            segundos.textContent = '00';
            return;
        }

        // Cálculos de dias, horas, minutos e segundos restantes
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        // Atualiza o conteúdo dos elementos HTML
        dias.textContent = days < 10 ? '0' + days : days;
        horas.textContent = hours < 10 ? '0' + hours : hours;
        minutos.textContent = minutes < 10 ? '0' + minutes : minutes;
        segundos.textContent = seconds < 10 ? '0' + seconds : seconds;
    }

    // Inicia a contagem regressiva
    countdownInterval = setInterval(updateCountdown, 1000);
});