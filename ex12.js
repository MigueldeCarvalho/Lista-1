function calc(){
        let result = 0
         for (let i = 0; i < 51; i ++){
            if (i % 2 != 0) result += i
    }
    document.querySelector('#result').innerHTML = result
}