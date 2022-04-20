function clicar(){
    let num1, nnum1, num2, nnum2, resposta, atributoResposta

    num1 = document.getElementById('texto1')
    console.log(num1)
    nnum1 = Number(num1.value)
    console.log(nnum1)

    num2 = document.getElementById('texto2')
    console.log(num2)
    nnum2 = Number(num2.value)
    console.log(nnum2)

    resposta = nnum1 * nnum2 
    console.log(resposta)

    atributoResposta = document.getElementsByTagName('h2')[0]
    console.log(atributoResposta)

    atributoResposta.innerText = resposta

}