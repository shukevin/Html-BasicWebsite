var inputs = [
    document.getElementById('px'),
    document.getElementById('x'),
    document.getElementById('n'),
    document.getElementById('p'),
]

var inputsValue = [
    null,
    null,
    null,
    null,
]

var solve = [
    true,
    false,
    false,
    false,
]

// Add listeners to input text, and radio button click events.
for(let i = 0; i < inputs.length; i++){
    inputs[i].addEventListener("input", () =>{
        inputsValue[i] = inputs[i].value;
        solveValue();
    });
}

// Solves the missing value with the given values.
function solveValue(){
    // ensure that all 3 inputsValue is not null
    let valid = 0;
    for(let i = 0; i < inputsValue.length; i++){
        if(!solve[i] && (inputsValue[i] != null) && inputsValue[i] != ''){
            valid++;
        }
    }

    // Solve when all three values have inputs.
    if(valid == 3){
                try{
                    if(inputs[1] > inputs[2]){
                        throw "invalid value";
                    }
                    inputs[0].value = factorial(inputsValue[2])  / (factorial(inputsValue[1]) * factorial((inputsValue[2] - inputsValue[1]))) * Math.pow(inputsValue[3],inputsValue[1]) *
                    Math.pow(1 - inputsValue[3], inputsValue[2] - inputsValue[1]);
                    inputsValue[0] = inputs[0].value;
                } catch (err){
                    inputs[0].value = 0;
                }
    }
}

// Solves for the factorial of the given number
function factorial(value){
    if(value < 0){
        return -1;
    } else if(value == 0){
        return 1;
    } else{
        return (value * factorial(value - 1));
    }

}
