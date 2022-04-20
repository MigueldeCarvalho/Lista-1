let nomes = []
for (let i = 0; i < 10; i++) {
    nomes[i] = prompt("Digite o nome " + (i + 1))
}

nomes.sort()
document.write(nomes)