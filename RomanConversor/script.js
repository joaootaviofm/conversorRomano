var conversionBtn = document.getElementById('conversionButton')
var inputRoman = document.getElementById('algTxt')
const resultArea = document.getElementById('result');
let resultado = document.createElement('p');

conversionBtn.addEventListener('click', () => {
    resultado.innerHTML = ""
    resultArea.appendChild(resultado)
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
        if(!isValidRoman(romano[i])){
            resultado.innerHTML = `"${romano}" não é um algarismo romano! Tente novamente.`
            break;
        }
        else{
            let atual = romanToDec[romano[i]]
            let prox = romanToDec[romano[i+1]]
            console.log(isValidRoman(romano[i]))
            if(atual < prox){
                val -= atual
            }
            else{
                val += atual
            }
            resultado.innerHTML = `O algarismo romano ${romano} em decimal é igual a ${val}`
        }
        }

        
        
        resultArea.appendChild(resultado);
        

})



