import state from './state.js'
import * as timer from './timer.js'
import * as el from './elements.js'
import * as sounds from './sounds.js'

export function toggleRunning() {
    state.isRunning = document.documentElement.classList.toggle('running')

    timer.countdown()
    sounds.buttonPressAudio.play()
}

export function reset() {
    state.isRunning = false
    document.documentElement.classList.toggle('running')
    timer.updateDisplay()

    sounds.buttonPressAudio.play()
}

export function set(){
    el.minutes.setAttribute('contenteditable', true)
    el.minutes.focus()
}

export function plus() {
    let minutes = Number(el.minutes.textContent)
    let seconds = Number(el.seconds.textContent)
    timer.updateDisplay(minutes + 5, seconds)
    sounds.buttonPressAudio.play()
}

export function minus() {
    let minutes = Number(el.minutes.textContent)
    let seconds = Number(el.seconds.textContent)
    timer.updateDisplay(minutes - 5, seconds)
    sounds.buttonPressAudio.play()
}

sounds.buttonForestSound.addEventListener('click', function() {
    let forest = sounds.buttonForestSound.classList.toggle('sound-on')

    if(forest) {
        sounds.floresta.play()
        return
    }

    sounds.floresta.pause()
    
})

sounds.buttonRainSound.addEventListener('click', function() {
    let rain = sounds.buttonRainSound.classList.toggle('sound-on')

    if(rain) {
        sounds.chuva.play()
        return
    }

    sounds.chuva.pause()
    
})

sounds.buttonCoffeeShopSound.addEventListener('click', function() {
    let coffeeShop = sounds.buttonCoffeeShopSound.classList.toggle('sound-on')

    if(coffeeShop) {
        sounds.cafeteria.play()
        return
    }

    sounds.cafeteria.pause()
    
})

sounds.buttonFireplaceSound.addEventListener('click', function() {
    let fireplace = sounds.buttonFireplaceSound.classList.toggle('sound-on')

    if(fireplace) {
        sounds.lareira.play()
        return
    }

    sounds.lareira.pause()
})

sounds.volumeForest.addEventListener('change', function() {
    let volForest = sounds.volumeForest.value
    sounds.floresta.volume = volForest
})

sounds.volumeRain.addEventListener('change', function() {
    let volRain = sounds.volumeRain.value
    sounds.chuva.volume = volRain
})

sounds.volumeCoffee.addEventListener('change', function() {
    let volCoffee = sounds.volumeCoffee.value
    sounds.cafeteria.volume = volCoffee
})

sounds.volumeFireplace.addEventListener('change', function() {
    let volFireplace = sounds.volumeFireplace.value
    sounds.lareira.volume = volFireplace
})






