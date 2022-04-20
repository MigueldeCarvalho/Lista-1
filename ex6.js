function calcular() {
    let nota1, n1, nota2, n2, nota3, n3, nota4, n4, nota5, media
    let div = document.querySelector(".div")

    nota1 = document.getElementById("nota1")
    n1 = Number(nota1.value)
    nota2 = document.getElementById("nota2")
    n2 = Number(nota2.value)
    nota3 = document.getElementById("nota3")
    n3 = Number(nota3.value)
    nota4 = document.getElementById("nota4")
    n4 = Number(nota4.value)
    nota5 = document.getElementById("nota5")
    n5 = Number(nota5.value)

    media1 = (n1+n2+n3+n4+n5)/5

    if(media1 >= 5){
        div.innerHTML = '<h2>Sua média é: '+media1+'</h2><label>Insira sua nota no teste final</label><input type="text" id="notaTFinal" placeholder="Digite a nota"><button onclick="mediaFinal()">Calcular</button><h3>Média Final</h3>'
    }else{
        div.innerHTML = '<h2>REPROVADO</h2>'
    }
    return media1
}

function mediaFinal() {
    let final, notaFinal = Number(document.querySelector("#notaTFinal").value)
    let h3 = document.getElementsByTagName("h3")[0]

    console.log(media1)

    final = (media1+notaFinal)/2
    
    if(final >= 7){
        h3.innerText = "Parabéns, você foi APROVADO, sua média final é: "+final
    }else {
        h3.innerText = "Que pena, você foi REPROVADO, sua média final é: "+final
    }
}