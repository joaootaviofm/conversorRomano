var conversionBtn = document.getElementById('conversionButton')
var inputRoman = document.getElementById('algTxt')

conversionBtn.addEventListener('click', () => {

    let romano = inputRoman.value.toUpperCase();

    const romanToDec = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000 
    }

    let val = 0;
    
    function isValidRoman(romano){
        return romano in romanToDec
    }

    for(let i=0;i<romano.length;i++){ 
        if(isValidRoman(romano[i])){
            let atual = romanToDec[romano[i]]
            let prox = romanToDec[romano[i+1]]
    
                if(atual < prox){
                    val -= atual
                }
                else{
                    val += atual
                }
        }
        else{
            alert("LETRA INVÁLIDA! Tente novamente usando os algarismos corretamente.")
        }
        }

        const resultArea = document.getElementById('result');
        let resultado = document.createElement('p');
        resultado.innerHTML = `O algarismo romano ${romano} em decimal é igual a ${val}`
        resultArea.appendChild(resultado);
        

})



