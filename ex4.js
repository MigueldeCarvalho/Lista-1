function clicar(){
    let num1, nnum1, num2, nnum2, num3, nnum3, num4, nnum4, num5, nnum5, num6, nnum6, num7, nnum7, num8, nnum8, num9, nnum9, num10, nnum10, resposta, atributoResposta

    num1 = document.getElementById('texto1')
    console.log(num1)
    nnum1 = Number(num1.value)
    console.log(nnum1)

    num2 = document.getElementById('texto2')
    console.log(num2)
    nnum2 = Number(num2.value)
    console.log(nnum2)

    num3 = document.getElementById('texto3')
    console.log(num3)
    nnum3 = Number(num3.value)
    console.log(nnum3)

    num4 = document.getElementById('texto4')
    console.log(num4)
    nnum4 = Number(num4.value)
    console.log(nnum4)

    num5 = document.getElementById('texto5')
    console.log(num5)
    nnum5 = Number(num5.value)
    console.log(nnum5)

    num6 = document.getElementById('texto6')
    console.log(num6)
    nnum6 = Number(num6.value)
    console.log(nnum6)

    num7 = document.getElementById('texto7')
    console.log(num7)
    nnum7 = Number(num7.value)
    console.log(nnum7)

    num8 = document.getElementById('texto8')
    console.log(num8)
    nnum8 = Number(num8.value)
    console.log(nnum8)

    num9 = document.getElementById('texto9')
    console.log(num9)
    nnum9 = Number(num9.value)
    console.log(nnum9)

    num10 = document.getElementById('texto10')
    console.log(num10)
    nnum10 = Number(num10.value)
    console.log(nnum10)

    resposta = nnum1 + nnum2 + nnum3 + nnum4 + nnum5 + nnum6 + nnum7 + nnum8 + nnum9 + nnum10 
    console.log(resposta)

    atributoResposta = document.getElementsByTagName('h2')[0]
    console.log(atributoResposta)

    atributoResposta.innerText = resposta

}