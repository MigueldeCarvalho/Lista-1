var numero = [], cont

cont = prompt('Digite o tamanho do array')
cont = Number(cont)

for(i=0; i<cont; i++){
    numero[i] = prompt('Digite um número para a progessão geométrica')
    document.write(numero[i])
    document.write('<br/>')
}

console.log(numero)