function calcular() {
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

