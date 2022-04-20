function calc() {
    let taxaMensal = 5
    let mensagens = Number(document.querySelector('#mensNum').value)
    let total = 0

    total += taxaMensal

    if (mensagens > 75) {
        let mensagensAMais = mensagens - 75
        let valorMensagem = 0.05
        if (mensagensAMais >= 165)
            valorMensagem = 0.1

        for (let i = 0; i < mensagensAMais; i++)
            total += valorMensagem
    }

    document.querySelector('#result').innerHTML = 'Resultado (em reais): ' + total
}