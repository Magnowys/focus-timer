import * as controls from "./controls.js"
import * as sounds from "./sounds.js"
import state from "./state.js"


export function florest() {
    controls.florest.addEventListener("click", () => {
        state.isMute = document.documentElement.classList.toggle("select")
        
        if (state.isMute == true) {
            controls.florest.classList.add("select")
            sounds.forest.play()
            sounds.rain.pause()
            controls.rain.classList.remove("select")
            sounds.coffe.pause()
            controls.coffe.classList.remove("select")
            sounds.fire.pause()
            controls.fire.classList.remove("select")
            return
        } else {

            controls.florest.classList.remove("select")
            sounds.forest.pause()
        }
        
    })
}

export function rain() {
    controls.rain.addEventListener("click", () => {
        state.isMute = document.documentElement.classList.toggle("select")
        
        if (state.isMute == true) {
            controls.rain.classList.add("select")
            sounds.rain.play()
            sounds.forest.pause()
            controls.florest.classList.remove("select")
            sounds.coffe.pause()
            controls.coffe.classList.remove("select")
            sounds.fire.pause()
            controls.fire.classList.remove("select")
            return
        }
        controls.rain.classList.remove("select")
        sounds.rain.pause()
        
    })
}

export function coffe() {
    controls.coffe.addEventListener("click", () => {
        state.isMute = document.documentElement.classList.toggle("select")
        
        if (state.isMute == true) {
            controls.coffe.classList.add("select")
            sounds.coffe.play()
            sounds.forest.pause()
            controls.florest.classList.remove("select")
            sounds.rain.pause()
            controls.rain.classList.remove("select")
            sounds.fire.pause()
            controls.fire.classList.remove("select")
            return
        }
        controls.coffe.classList.remove("select")
        sounds.coffe.pause()
    })
}

export function fire() {
    controls.fire.addEventListener("click", () => {
        state.isMute = document.documentElement.classList.toggle("select")
        
        if (state.isMute == true) {
            controls.fire.classList.add("select")
            sounds.fire.play()
            sounds.forest.pause()
            controls.florest.classList.remove("select")
            sounds.rain.pause()
            controls.rain.classList.remove("select")
            sounds.coffe.pause()
            controls.coffe.classList.remove("select")
            return
        }
        controls.fire.classList.remove("select")
        sounds.fire.pause()
    })
}