//1*2*3*4*5*6*7

function multiplicationOfNumber(number) {
    let result = 1;
    for (let i = 1; i <= 7; i++) {
        result = result * i;
    }
    return result;
}
const result = multiplicationOfNumber(7);
console.log(result);