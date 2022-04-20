let nums = []
let sortedNums = []

for (let i = 0; i < 11; i++)
    nums[i] = prompt('insira o numero de sua escolha. (restam: ' + (10-i) + ')')

sortedNums = nums.sort((a, b) => {return b - a})


ex 17


function calcular() {
    let numeros_matriz = []
    let soma = 0

    for (let index = 0; index < 25; index++) {
        numeros_matriz[index] = Number(document.querySelector('#campo_' + index).value)
        soma += numeros_matriz[index]
    }
    document.getElementsByTagName('h2')[0].innerText = soma
}

let matriz = []
let div_matriz = document.querySelector("#matriz")

for (let index = 0; index < 25; index++) {
    div_matriz.innerHTML += '<input id="campo_'+ index +'">'
}

ex 18

function calcular() {
    let numeros_matriz = []
    let soma_diag_um = 0, soma_diag_dois = 0

    for (let index = 0; index < 25; index++) {
        numeros_matriz[index] = Number(document.querySelector('#campo_' + index).value)
        if (index == 0 || index == 6 || index == 12 || index == 18 || index == 24){
            soma_diag_um += numeros_matriz[index]
        }
        if (index == 4 || index == 8 || index == 12 || index == 16 || index == 20){
            soma_diag_dois += numeros_matriz[index]
        }
    }
    document.querySelector('.resposta').innerHTML = '<h2>Soma da diagonal 1:</h2><h3 class="center">'+ soma_diag_um +'</h3><h2>Soma da diagonal 2:</h2><h3 class="center">' + soma_diag_dois + '</h3>'
}

let matriz = []
let div_matriz = document.querySelector("#matriz")

for (let index = 0; index < 25; index++) {
    div_matriz.innerHTML += '<input id="campo_'+ index +'">'
}

ex 19

let matrixNum = []
let pairNumsSum = 0
let oddNumsSubtraction = 0

for (let i = 0; i < 36; i++) {
    matrixNum[i] = Number(document.querySelector('#campo_' + i).value)
    if (i == 0 || i == 1 || i == 2 || i == 3 || i == 4 || i == 5 || i == 12 || i == 13 || i == 14 || i == 15 || i == 16 || i == 17 || i == 24 || i == 25 || i == 26 || i == 27 || i == 28 || i == 29)
        pairNumsSum += matrixNum[i]
    
    if (i == 6 || i == 7 || i == 8 || i == 9 || i == 10 || i == 11 || i == 18 || i == 19 || i == 20 || i == 21 || i == 22 || i == 23 || i == 30 || i == 31 || i == 32 || i == 33 || i == 34 || i == 35)
        oddNumsSubtraction -= matrixNum[i]
}
document.querySelector('.resposta').innerHTML = '<h2>Soma das linhas pares:</h2><h3 class="center">'+ pairNumsSum +'</h3><h2>Subtração das linhas ímpares:</h2><h3 class="center">' + oddNumsSubtraction + '</h3>'
}

let matriz = []
let div_matriz = document.querySelector("#matriz2")

for (let i = 0; i < 36; i++) {
div_matriz.innerHTML += '<input id="campo_'+ i +'">'
}


ex 20

document.write('<h1>Transposição de matriz 5x5</h1>')
let wrapper = document.createElement('div')

wrapper.id = 'matriz'
document.querySelector('body').appendChild(wrapper)

let linha1 = []

for (let i = 0; i < 26; i++) {
    let elmt = document.createElement('input')
    elmt.type = 'number'
    elmt.id = 'campo' + i
    wrapper.appendChild(elmt)
    if (elmt.id == 'campo' + )
}

document.write('<button onclick="transpor()">Calcular</button>')

function transpor() {

}