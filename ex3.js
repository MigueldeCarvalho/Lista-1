function clicar(){
    let temp1, ttemp1, resposta, atributoResposta

    temp1 = document.getElementById('texto1')
    console.log(temp1)
    ttemp1 = Number(temp1.value)
    console.log(ttemp1)

    resposta = ttemp1 * 1.8 + 32  
    console.log(resposta)

    atributoResposta = document.getElementById('resultado')
    console.log(atributoResposta)

    atributoResposta.innerText = resposta

}

function clicar2(){
    let temp2, ttemp2, resposta, atributoResposta

    temp2 = document.getElementById('texto2')
    console.log(temp2)
    ttemp2 = Number(temp2.value)
    console.log(ttemp2)

    resposta = ttemp2 - 32/1.8 
    console.log(resposta)

    atributoResposta = document.getElementById('resultado2')
    console.log(atributoResposta)

    atributoResposta.innerText = resposta

}

   