// var time = 0;
// document.querySelector('h1').innerHTML = new Date().toLocaleTimeString();

// function curTime(){
//     document.querySelector('h1').innerHTML = new Date().toLocaleTimeString();
// }
// setInterval(curTime,1000);
let hours = document.querySelector("#hours");
let mins = document.querySelector("#mins");
let secs = document.querySelector("#secs");
let ms = document.querySelector("#milli");


// StopWatch
let interval, countms = 0, countsec = 0, countmin = 0, counthrs = 0;

function start() {
    clearInterval(interval);
    interval = setInterval(() => {
        ms.innerHTML = countms.toString().padStart(2, '0');
        secs.innerHTML = countsec.toString().padStart(2, '0');
        mins.innerHTML = countmin.toString().padStart(2, '0');
        hours.innerHTML = counthrs.toString().padStart(2, '0');

        countms += 1;
        if (countms == 100) {
            countsec += 1;
            if (countsec == 60) {
                countmin += 1;
                if (countmin == 60) {
                    counthrs += 1;
                    countmin = 0;
                }
                countsec = 0;
            }
            countms = 0;
        }
    }, 10)
}

function stop() {
    clearInterval(interval);
}

function reset() {
    countms = 0;
    countsec = 0;
    countmin = 0;
    counthrs = 0;
    ms.innerHTML = countms.toString().padStart(2, '0');
    secs.innerHTML = countsec.toString().padStart(2, '0');
    mins.innerHTML = countmin.toString().padStart(2, '0');
    hours.innerHTML = counthrs.toString().padStart(2, '0');
    clearInterval(interval);
}

function getTime(){
    let time = document.createElement('p');
    time.className = "text-center bg-[#f5f5f52d]"
    time.innerHTML = `${counthrs.toString().padStart(2, '0')}:${countmin.toString().padStart(2, '0')}:${countsec.toString().padStart(2, '0')}:${(countms-1).toString().padStart(2, '0')}`;
    // parseFloat(count).toFixed(2)
    document.querySelector('#display').appendChild(time);
}

function clearTime(){
    document.querySelector('#display').innerHTML = '';
}