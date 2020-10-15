const proteins = [
    [4, -1, -2, -2, 0, -1, -1, 0, -2, -1, -1, -1, -1, -2, -1, 1, 0, -3, -2, 0], //A
    [-1, 5, 0, -2, -3, 1, 0, -2, 0, -3, -2, 2, -1, -3, -2, -1, -1, -3, -2, -3], //R 
    [-2, 0, 6, 1, -3, 0, 0, 0, 1, -3, -3, 0, -2, -3, -2, 1, 0, -4, -2, -3], //N
    [-2, -2, 1, 6, -3, 0, 2, -1, -1, -3, -4, -1, -3, -3, -1, 0, -1, -4, -3, -3], //D
    [0, -3, -3, -3, 9, -3, -4, -3, -3, -1, -1, -3, -1, -2, -3, -1, -1, -2, -2, -1], //C
    [-1, 1, 0, 0, -3, 5, 2, -2, 0, -3, -2, 1, 0, -3, -1, 0, -1, -2, -1, -2], //Q
    [-1, 0, 0, 2, -4, 2, 5, -2, 0, -3, -3, 1, -2, -3, -1, 0, -1, -3, -2, -2], //E
    [0, -2, 0, -1, -3, -2, -2, 6, -2, -4, -4, -2, -3, -3, -2, 0, -2, -2, -3, -3], //G
    [-2, 0, 1, -1, -3, 0, 0, -2, 8, -3, -3, -1, -2, -1, -2, -1, -2, -2, 2, -3], // H
    [-1, -3, -3, -3, -1, -3, -3, -4, -3, 4, 2, -3, 1, 0, -3, -2, -1, -3, -1, 3],//I
    [-1, -2, -3 ,-4, -1, -2, -3, -4, -3, 2, 4, -2, 2, 0, -3, -2, -1, -2, -1, 1], //L
    [-1, 2, 0, -1, -3, 1, 1, -2, -1, -3, -2, 5, -1, -3, -1, 0, -1, -3, -2, -2], //K
    [-1, -1, -2, -3, -1, 0, -2, -3, -2, 1, 2, -1, 5, 0, -2, -1, -1, -1, -1, 1], //M
    [-2, -3, -3, -3, -2, -3, -3, -3, -1, 0, 0, -3, 0, 6, -4, -2, -2, 1, 3, -1], //F
    [-1, -2, -2, -1, -3, -1, -1, -2, -2, -3, -3, -1, -2, -4, 7, -1, -1, -4, -3, -2], //P
    [1, -1, 1, 0, -1, 0, 0, 0, -1, -2, -2, 0, -1, -2, -1, 4, 1, -3, -2, -2], //S
    [0, -1, 0, -1, -1, -1, -1, -2, -2, -1, -1, -1, -1, -2, -1, 1, 5,-2, -2, 0], //T
    [-3, -3, -4, -4, -2, -2, -3, -2, -2, -3, -2, -3, -1, 1, -4, -3, -2, 11, 2, -3], //W
    [-2, -2, -2, -3, -2, -1, -2, -3, 2, -1, -1, -2, -1, 3, -3, -2, -2, 2, 7, -1], //Y
    [0, -3, -3, -3, -1, -2, -2, -3, -3, 3, 1, -2, 1, -1, -2, -2, 0, 3, -1, 4], //V
    // A R N D C Q E G H I L K M F P S T W Y V
];
const input = [
    input1 = document.getElementById('sequence1'),
    input2 = document.getElementById('sequence2'),
]
    

const output = document.getElementById('output');

function parseStringToProtein(a){
    var value;
    switch(a.toUpperCase()){
        case 'A':
            value = 0;
            break;
        case 'R':
            value = 1;
            break;
        case 'N':
            value = 2;
            break;
        case 'D':
            value = 3;
            break;
        case 'C':
            value = 4;
            break;
        case 'Q':
            value = 5;
            break;
        case 'E':
            value = 6;
            break;
        case 'G':
            value = 7;
            break;
        case 'H':
            value = 8;
            break;
        case 'I':
            value = 9;
            break;
        case 'L':
            value = 10;
            break;
        case 'K':
            value = 11;
            break;
        case 'M':
            value = 12;
            break;
        case 'F':
            value = 13;
            break;
        case 'P':
            value = 14;
            break;
        case 'S':
            value = 15;
            break;
        case 'T':
            value = 16;
            break;
        case 'W':
            value = 17;
            break;
        case 'Y':
            value = 18;
            break;
        case 'V':
            value = 19;
            break;
        default:
            value = -1;
            break;
    }
    return value;
}
for(let i = 0; i < input.length; i++){
    input[i].addEventListener('input', () =>{
        if(input1.value.length === input2.value.length){
            var one = input1.value.split("");
            var two = input2.value.split("");
            var sum = 0;
            var index1;
            var index2;
            for(let i = 0; i < one.length; i++){
                index1 = Number(parseStringToProtein(two[i]));
                index2 = Number(parseStringToProtein(one[i]));
                if(index1 == -1 || index2 == -1){
                    sum += 0;
                } else {
                    sum += Number(proteins[index1][index2]);
                }
            }
            output.innerHTML = sum;
        }
    })

}





