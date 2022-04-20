var numero = [], cont

cont = prompt('Digite o tamanho do array')
cont = Number(cont)

for(i=0; i<cont; i++){
    numero[i] = prompt('Digite um número par entre 0 e 20')
    document.write(numero[i])
    document.write('<br/>')
}

console.log(numero)