let outCrescente = document.getElementById('resultadoCrescente')
let outDecrescente = document.getElementById('resultadoDecrescente')
let outOriginais = document.getElementById('numerosOriginais')
let outBubble = document.getElementById('resultadoBubble')
let outArrayNumeros = document.getElementById('arrayNumeros')
let outSoma = document.getElementById('resultadoSoma')
let outMatriz = document.getElementById('resultadoMatriz')
let pesoInput = document.getElementById('peso')
let alturaInput = document.getElementById('altura')
let outIMC = document.getElementById('resultadoIMC')
let tempInput = document.getElementById('temperatura')
let tipoTempSelect = document.getElementById('tipoTemp')
let outTemp = document.getElementById('resultadoTemp')
let valorBuscaInput = document.getElementById('valorBusca')
let outArrayBusca = document.getElementById('arrayBusca')
let outBusca = document.getElementById('resultadoBusca')

function ordenarCrescente() {
    let numeros = []
    for (let i = 1; i <= 20; i++) {
        numeros.push(i)
    }
    outCrescente.innerHTML = numeros.join(', ')
}

function ordenarDecrescente() {
    let numeros = []
    for (let i = 20; i >= 1; i--) {
        numeros.push(i)
    }
    outDecrescente.innerHTML = numeros.join(', ')
}

function bubbleSort() {
    let numeros = []
    for (let i = 0; i < 10; i++) {
        numeros.push(Math.floor(Math.random() * 20) + 1)
    }
    outOriginais.innerHTML = 'Original: ' + numeros.join(', ')

    for (let i = 0; i < numeros.length - 1; i++) {
        for (let j = 0; j < numeros.length - i - 1; j++) {
            if (numeros[j] > numeros[j + 1]) {
                let temp = numeros[j]
                numeros[j] = numeros[j + 1]
                numeros[j + 1] = temp
            }
        }
    }
    outBubble.innerHTML = 'Ordenado: ' + numeros.join(', ')
}

function somarArray() {
    let numeros = []
    let soma = 0
    for (let i = 0; i < 10; i++) {
        numeros.push(Math.floor(Math.random() * 220) + 1)
    }
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i]
    }
    outArrayNumeros.innerHTML = 'Array: ' + numeros.join(', ')
    outSoma.innerHTML = 'Soma: ' + soma
}

function gerarMatriz() {
    let matriz = []
    for (let i = 0; i < 3; i++) {
        matriz[i] = []
        for (let j = 0; j < 3; j++) {
            matriz[i][j] = Math.floor(Math.random() * 20) + 1
        }
    }

    let html = '<table style="margin: 1rem auto; width: auto;"><tbody>'
    for (let i = 0; i < 3; i++) {
        html += '<tr>'
        for (let j = 0; j < 3; j++) {
            html += '<td style="text-align: center; padding: 10px;">' + matriz[i][j] + '</td>'
        }
        html += '</tr>'
    }
    html += '</tbody></table>'
    outMatriz.innerHTML = html
}

function calcularIMC() {
    let peso = Number(pesoInput.value)
    let altura = Number(alturaInput.value)

    if (peso && altura) {
        let imc = peso / (altura * altura)
        let classificacao = ''

        if (imc < 18.5) {
            classificacao = 'Abaixo do peso'
        } else if (imc < 25) {
            classificacao = 'Peso normal'
        } else if (imc < 30) {
            classificacao = 'Sobrepeso'
        } else {
            classificacao = 'Obesidade'
        }

        outIMC.innerHTML = 'IMC: ' + imc.toFixed(2) + ' - ' + classificacao
    } else {
        outIMC.innerHTML = 'Preencha peso e altura'
    }
}

function converterTemp() {
    let temp = Number(tempInput.value)
    let tipo = tipoTempSelect.value

    if (temp || temp === 0) {
        let resultado = ''
        if (tipo === 'CF') {
            let fahrenheit = (temp * 9 / 5) + 32
            resultado = temp + '°C = ' + fahrenheit.toFixed(2) + '°F'
        } else {
            let celsius = (temp - 32) * 5 / 9
            resultado = temp + '°F = ' + celsius.toFixed(2) + '°C'
        }
        outTemp.innerHTML = resultado
    } else {
        outTemp.innerHTML = 'Preencha a temperatura'
    }
}

function buscaLinear() {
    let array = [5, 12, 8, 23, 17, 9, 14, 3, 19, 7]
    let valor = Number(valorBuscaInput.value)

    outArrayBusca.innerHTML = 'Array: ' + array.join(', ')

    let encontrado = -1
    for (let i = 0; i < array.length; i++) {
        if (array[i] === valor) {
            encontrado = i
            break
        }
    }

    if (encontrado !== -1) {
        outBusca.innerHTML = 'Valor ' + valor + ' encontrado na posição ' + encontrado
    } else {
        outBusca.innerHTML = 'Valor ' + valor + ' não encontrado no array'
    }
}