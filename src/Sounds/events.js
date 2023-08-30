import * as controls from "./controls.js"
import * as sounds from "./sounds.js"
import state from "./state.js"


export function florest() {
    controls.florest.addEventListener("click", () => {
        state.isMute = document.documentElement.classList.toggle("select")
        controls.florest.classList.toggle("select")
        
        state.isMute == true ? sounds.forest.play() : sounds.forest.pause()
        
    })
}

export function rain() {
    controls.rain.addEventListener("click", () => {
        state.isMute = document.documentElement.classList.toggle("select")
        controls.rain.classList.toggle("select")
        
        state.isMute == true ? sounds.rain.play() : sounds.rain.pause()
        
    })
}

export function coffe() {
    controls.coffe.addEventListener("click", () => {
        state.isMute = document.documentElement.classList.toggle("select")
        controls.coffe.classList.toggle("select")
        
        state.isMute == true ? sounds.coffe.play() : sounds.coffe.pause()
        
    })
}

export function fire() {
    controls.fire.addEventListener("click", () => {
        state.isMute = document.documentElement.classList.toggle("select")
        controls.fire.classList.toggle("select")
        
        state.isMute == true ? sounds.fire.play() : sounds.fire.pause()
        
    })
}