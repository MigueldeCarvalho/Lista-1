function converte(){
        var fruta, resposta
    
        fruta = document.getElementById('textfruta')
        console.log(fruta)

        fruta = fruta.value.toLowerCase()

        resposta = document.getElementsByTagName('h2')[0]
        console.log(resposta)
    
        switch(fruta){
            case 'laranja':
              resposta.innerText = 'Laranja é bom para suco'
            break
    
            case 'limão':
                resposta.innerText = 'Limão é bom para suco'
            break
    
            case 'abacaxi':
                resposta.innerText = 'Abacaxi é bom para suco'
            break
          
            case 'uva':
                resposta.innerText = 'Uva é bom para suco'
            break
    
            case 'maracujá':
              resposta.innerText = 'Maracujá é bom para suco '
            break
    
            case 'manga':
                resposta.innerText = 'Manga é bom para suco'
            break
    
            case 'banana':
                resposta.innerText = 'Banana é bom para vitamina'
            break
          
            case 'mamão':
                resposta.innerText = 'Mamão é bom para vitamina'
            break
    
            case 'melão':
              resposta.innerText = 'Melão é bom para vitamina'
            break
    
            case 'pêssego':
                resposta.innerText = 'Pêssego é bom para vitamina'
            break

            case 'abacate':
                resposta.innerText = 'Abacate é bom para vitamina'
            break

            default:
                resposta.innerText = 'Procure um nutricionista'
            
        }
}