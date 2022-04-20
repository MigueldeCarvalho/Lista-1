function clicar(){
    let num1, nnum1, por2, ppor2, por3, ppor3, resposta, atributoResposta

    num1 = document.getElementById('texto1')
    console.log(num1)
    nnum1 = Number(num1.value)
    console.log(nnum1)

    por2 = document.getElementById('texto2')
    console.log(por2)
    ppor2 = Number(por2.value)
    console.log(ppor2)

    por3 = document.getElementById('texto3')
    console.log(por3)
    ppor3 = Number(por3.value)
    console.log(ppor3)

    resposta = nnum1 + ppor2/100 + ppor3/100
    console.log(resposta)

    atributoResposta = document.getElementsByTagName('h2')[0]
    console.log(atributoResposta)

    atributoResposta.innerText = resposta


}