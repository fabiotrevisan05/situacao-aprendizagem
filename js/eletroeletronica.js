let vInput = document.getElementById('v')
let iInput = document.getElementById('i')
let rInput = document.getElementById('r')
let outOhm = document.getElementById('resultadoOhm')

let pvInput = document.getElementById('pv')
let piInput = document.getElementById('pi')
let prInput = document.getElementById('pr')
let outPot = document.getElementById('resultadoPot')

function calcV() {
    let i = Number(iInput.value)
    let r = Number(rInput.value)

    if (i && r) {
        outOhm.innerHTML = 'V = ' + (i * r)
    } else {
        outOhm.innerHTML = 'Preencha I e R'
    }
}

function calcI() {
    let v = Number(vInput.value)
    let r = Number(rInput.value)

    if (v && r) {
        outOhm.innerHTML = 'I = ' + (v / r)
    } else {
        outOhm.innerHTML = 'Preencha V e R'
    }
}

function calcR() {
    let v = Number(vInput.value)
    let i = Number(iInput.value)

    if (v && i) {
        outOhm.innerHTML = 'R = ' + (v / i)
    } else {
        outOhm.innerHTML = 'Preencha V e I'
    }
}

function calcP_VI() {
    let v = Number(pvInput.value)
    let i = Number(piInput.value)

    if (v && i) {
        outPot.innerHTML = 'P = ' + (v * i)
    } else {
        outPot.innerHTML = 'Preencha V e I'
    }
}

function calcP_V2() {
    let v = Number(pvInput.value)
    let r = Number(prInput.value)

    if (v && r) {
        outPot.innerHTML = 'P = ' + ((v * v) / r)
    } else {
        outPot.innerHTML = 'Preencha V e R'
    }
}

function calcP_I2() {
    let i = Number(piInput.value)
    let r = Number(prInput.value)

    if (i && r) {
        outPot.innerHTML = 'P = ' + (i * i * r)
    } else {
        outPot.innerHTML = 'Preencha I e R'
    }
}
