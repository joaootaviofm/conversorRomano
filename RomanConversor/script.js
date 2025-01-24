const conversionToDecimalBtn = document.getElementById('conversionButton')
const conversionToRomanBtn = document.getElementById('ToRomanButton')
const inputRoman = document.getElementById('algTxt')
const resultArea = document.getElementById('result');
const resultado = document.createElement('p');

conversionToDecimalBtn.addEventListener('click', () => {
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

    let isValid = true;
    
    for(let i=0;i<romano.length;i++){ 
        if(!isValidRoman(romano[i])){
            resultado.innerHTML = `"${romano}" não é um algarismo romano! Tente novamente.`
            isValid = false;
            break;
        }
        else{
            const atual = romanToDec[romano[i]]
            const prox = romanToDec[romano[i+1]]
            console.log(isValidRoman(romano[i]))
            if(atual < prox){
                val -= atual
            }
            else{
                val += atual
            }
        }
    }

    if(isValid && romano != "") {
        resultado.innerHTML = `O algarismo romano ${romano} em decimal é igual a ${val}`;
    }

        resultArea.appendChild(resultado);
        
})

const AreaDecimal = document.getElementById('resultToRoman')
let resultadoAreaDecimal = document.createElement('p')
const inputDecimal = document.getElementById('algTxtToRoman')

conversionToRomanBtn.addEventListener('click', () => {
    resultadoAreaDecimal.innerHTML = ""
    AreaDecimal.appendChild(resultadoAreaDecimal)
    
    
    let decToRoman = [
        {decimal : 1000, romano: 'M'},
        {decimal : 900, romano: 'CM'},
        {decimal : 500, romano: 'D'},
        {decimal : 400, romano: 'CD'},
        {decimal : 100, romano: 'C'},
        {decimal : 90, romano: 'XC'},
        {decimal : 50, romano: 'L'},
        {decimal : 40, romano: 'XL'},
        {decimal : 10, romano: 'X'},
        {decimal : 9, romano: 'IX'},
        {decimal : 5, romano: 'V'},
        {decimal : 4, romano: 'IV'},
        {decimal : 1, romano: 'I'},
    ];

    let newRomano = "";
    let numero = Number(inputDecimal.value)

    for(let i=0; i<decToRoman.length;i++){
        while(decToRoman[i].decimal <= numero){
            numero -= decToRoman[i].decimal
            newRomano += decToRoman[i].romano;
        }
    }
    resultadoAreaDecimal.innerHTML = newRomano
    AreaDecimal.appendChild(resultadoAreaDecimal)

})




