const input = [
    input1 = document.getElementById('pa'),
    input2 = document.getElementById('n'),
]

const output = document.getElementById('output');
const warn = document.getElementById('warning');

for(let i = 0; i < input.length; i++){
    input[i].addEventListener('input', () =>{
        var sum = (1 - Math.pow((1 - input1.value),input2.value)) * 100;

        warn.innerHTML = "";
        output.innerHTML = sum.toFixed(3);
        if(sum.toFixed(3) == 100.000){
            warn.innerHTML = "WARNING: The odds of this event are not actually 100%. This format rounds at a certain point. You are extremely unlucky."
        }

    })

}