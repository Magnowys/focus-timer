import * as timer from "./timer.js"
import state from "./state.js"
import * as elements from "./elements.js"
import * as sounds from "./sounds.js"


export function toggleRunning() {
    state.isRunning = document.documentElement.classList.toggle("running")
    timer.countdown()
    sounds.buttonPressAudio.play()
}


export function reset() {
    state.isRunning = false
    document.documentElement.classList.remove("running")
    timer.updateDisplay()
    sounds.buttonPressAudio.play()
}

export function set() {
    elements.minutes.setAttribute("contenteditable", true)
    elements.minutes.focus()
}

export function add() {
    let minutes = Number(elements.minutes.textContent)
    minutes = minutes + 5
    timer.updateDisplay(minutes)
    sounds.buttonPressAudio.play()
}

export function sub() {
    let minutes = Number(elements.minutes.textContent)
    if (minutes < 4) {
        minutes = 0
        timer.updateDisplay(minutes)
        return
    }
    minutes = minutes - 5
    timer.updateDisplay(minutes)
    sounds.buttonPressAudio.play()
}