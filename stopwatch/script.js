window.onload = function () {
    var seconds = 00;
    var tens = 00;
    const appendTens = document.getElementById("tens");

    const appendSeconds = document.getElementById("seconds");

    const start = document.querySelector(".startbtn");
    const stop = document.querySelector(".stopbtn");

    const reset = document.querySelector(".resetbtn");

    var interval;
    start.onclick = function () {
        clearInterval(interval);
        interval = setInterval(startTimer, 10);
    }

    stop.onclick = function () {
        clearInterval(interval);
    }
     reset.onclick = function () {
        clearInterval(interval);
        tens = "00";
        seconds = "00";
        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
     }

     function startTimer () {
        tens++;
        if ( tens <= 9) {
            appendTens.innerHTML = "0" + tens;
        }
        if (tens > 9) {
            appendTens.innerHTML = tens;
        }
        if (tens > 99) {
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            tens = 0;
            appendTens.innerHTML = "0" + 0;
        }
        if (seconds > 9) {
            appendSeconds.innerHTML = seconds;
        }
     }

}










