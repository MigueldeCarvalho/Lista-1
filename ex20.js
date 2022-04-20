//  1,  2,  3,  4,  5,
//  6,  7,  8,  9, 10,
// 11, 12, 13, 14, 15,
// 16, 17, 18, 19, 20,
// 21, 22, 23, 24, 25

document.write('<h1>Escrever uma matriz e fazer a sua transposta</h1>')
let wrapper = document.createElement('div')

wrapper.id = 'matriz'
document.querySelector('body').appendChild(wrapper)

let linha = [
    [],
    [],
    [],
    [],
    []
]

for (let i = 0; i < 25; i++) {
    let elmt = document.createElement('input')
    elmt.type = 'number'
    elmt.id = 'campo' + i
    wrapper.appendChild(elmt)
    if (i < 5)
        linha[0].push(elmt)
    else if (i < 10)
        linha[1].push(elmt)
    else if (i < 15)
        linha[2].push(elmt)
    else if (i < 20)
        linha[3].push(elmt)
    else
        linha[4].push(elmt)
}

document.write('<button onclick="transpor()">Calcular</button>')

function transpor() {
    let matrizTransposta = [
        [],
        [],
        [],
        [],
        []
    ]
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++)
            matrizTransposta[j][i] = linha[i][j].value
    }

    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            linha[i][j].value = matrizTransposta[i][j]
        }
    }
}
