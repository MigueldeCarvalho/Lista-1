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