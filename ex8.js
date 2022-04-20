function calcCost() {
    let cost = Number(document.querySelector("#cost").value)
    let newCost 

    if (cost < 50) {
        newCost = cost + (cost * 0.35)
    } else if (cost >= 50 && cost < 100) {
        newCost = cost + (cost * 0.25)
    } else if (cost >= 100) {
        newCost = cost + (cost * 0.15)
    }

    document.querySelector('#result').innerHTML = 'O valor do produto é R$' + newCost 
}