let hours = `00`,
    minutes = `00`,
    seconds = `00`,
    chronometerDisplay = document.querySelector(`[data-chronometer]`),
    chronometerCall

function chronometer(){
    seconds++
    if (seconds < 10) seconds = `0` + seconds

    if (seconds > 59) {
        seconds = `00`
        minutes ++
  
        if (minutes < 10) minutes = `0` + minutes
    }

    if (minutes > 59) {
        minutes = `00`
        hours ++
        
        if (hours < 10) hours = `0` + hours
    }

    chronometerDisplay.textContent = `${hours}:${minutes}:${seconds}`
}

function Start(){
    chronometerCall = setInterval(chronometer, 1000)
}

function Stop(){
    clearInterval(chronometerCall)
}

function Reset(){
    clearInterval(chronometerCall)
    chronometerDisplay.textContent = `00:00:00`

    hours = `00`,
    minutes = `00`,
    seconds = `00`
}