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