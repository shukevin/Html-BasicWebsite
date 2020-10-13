var inputs = [
    document.getElementById('pH'),
    document.getElementById('pka'),
    document.getElementById('a'),
    document.getElementById('ha'),
]

var radio = [
    document.getElementById('radio1'),
    document.getElementById('radio2'),
    document.getElementById('radio3'),
    document.getElementById('radio4'),
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


    radio[i].addEventListener("click", () =>{
            for(let k = 0; k < radio.length; k++){
                inputs[k].removeAttribute('readonly');
                inputs[k].style.backgroundColor = 'whitesmoke';
                solve[k] = false;
            }
            solve[i] = true;
            inputs[i].style.backgroundColor = 'lightgray';
            inputs[i].setAttribute('readonly', true);
    });
}

// Solves the missing value with the given values.
function solveValue(){
    //ph, pka, a, ha
    // ensure that all 3 inputsValue is not null
    let valid = 0;
    for(let i = 0; i < inputsValue.length; i++){
        if(!solve[i] && (inputsValue[i] != null) && inputsValue[i] != ''){
            valid++;
        }
    }

    if(valid == 3){
        switch(getSolve()){
            case 0:
                try{
                    if(inputsValue[3] == 0){
                        throw "invalid value";
                    }
                    inputs[0].value = Number(inputsValue[1]) + Number(Math.log10(inputsValue[2]/inputsValue[3]));
                    inputsValue[0] = inputs[0].value;
                } catch (err){
                    inputs[0].value = 0;
                }
                break;
            case 1:
                try{
                    if(inputsValue[3] == 0){
                        throw "invalid value";
                    }
                    inputs[1].value = -1 * (-Number(inputsValue[0])  + Number(Math.log10(inputsValue[2]/inputsValue[3]) ));

                } catch (err){
                    inputs[1].value = 0;
                }

                break;
            case 2:
                try{
                    if(inputsValue[3] == 0){
                        throw "invalid value";
                    }
                    inputs[2].value = Math.pow(10, (Number(inputsValue[0]) - Number(inputsValue[1]))) * Number(inputsValue[3]);
                } catch{
                    inputs[2].value = 0;
                }

                break;
            case 3:
                try{
                    if(inputsValue[3] == 0){
                        throw "invalid value";
                    }
                    inputs[3].value = Math.pow(Math.pow(10, (Number(inputsValue[0]) - Number(inputsValue[1]))) /Number(inputsValue[2]), -1);
                } catch{
                    inputs[3].value = 69;
                }
                break;
        }
    }
}

// Returns the index of the value to be solved for pH(1), pKa(2), A(3), HA(4)
function getSolve(){
    for(let i = 0; i < solve.length; i++){
        if(solve[i]){
            return i;
            
        } 
    }
}

