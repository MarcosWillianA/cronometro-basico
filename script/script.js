const display = document.querySelector('#display');
const start = document.querySelector('#start');
const pause = document.querySelector('#pause');
const reset = document.querySelector('#reset');

let [milissegundos, segundos, minutos, horas] = [0, 0, 0, 0];
let int;

start.addEventListener('click', () => {
    if (!int) {
        int = setInterval(mostrarCronometro, 10);
    }
})

pause.addEventListener('click', () => {
    clearInterval(int);
    int = null;
})

reset.addEventListener('click', () => {
    clearInterval(int);
    int = null;
    [milissegundos, segundos, minutos, horas] = [0, 0, 0, 0];
    display.innerHTML = '00 : 00 : 00 : 000';
})

function mostrarCronometro() {
    milissegundos+=10;
    if (milissegundos === 1000) {
        milissegundos = 0;
        segundos++;
        if (segundos === 60) {
            segundos = 0;
            minutos++;
            if (minutos === 60) {
                minutos = 0;
                horas++;
            }
        }
    }
    let h = horas < 10 ? '0' + horas : horas;
    let m = minutos < 10 ? '0' + minutos : minutos;
    let s = segundos < 10 ? '0' + segundos : segundos;
    let ms = milissegundos < 10 ? '00' + milissegundos : milissegundos;
    milissegundos < 100 ? '0' + milissegundos : milissegundos;

    display.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
}



