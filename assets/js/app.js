const stopwatchDisplay = document.querySelector('.stopwatch-display')
const stopwatchStartBtn = document.querySelector('.btn-stopwatch-start')
const stopwatchStopBtn = document.querySelector('.btn-stopwatch-stop')
const stopwatchresetBtn = document.querySelector('.btn-stopwatch-reset')
let appendDisplay = "00"
let Interval

let stopwatchSeconds = 0
let stopwatchMinutes = 0
let stopwatchMilliseconds = 0
function runTimer(){
    stopwatchMilliseconds += 100
    if (stopwatchMilliseconds === 1000){
        stopwatchSeconds++
        stopwatchMilliseconds = 0
    }
    if (stopwatchSeconds === 60){
        stopwatchMinutes++
        stopwatchSeconds = 0
    }
    stopwatchDisplay.innerText = `${stopwatchMinutes}:${stopwatchSeconds}:${stopwatchMilliseconds}`
}
stopwatchStartBtn.addEventListener('click',startStopwatch)
stopwatchStopBtn.addEventListener('click',stopStopwatch)
stopwatchresetBtn.addEventListener('click',resetStopwatch)

function startStopwatch(){
    clearInterval(Interval)
    Interval = setInterval(runTimer,100)
}
function stopStopwatch(){
    clearInterval(Interval)
} 
function resetStopwatch(){
    clearInterval(Interval)
    appendDisplay = "00:00:00"
    stopwatchDisplay.innerHTML = appendDisplay

}