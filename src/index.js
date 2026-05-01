'use strict';

function calcFactorial(num){
    if(typeof num !== 'number' || num < 0 || !Number.isInteger(num)){
        return null;
    }
    if(num <= 1){
        return 1;
    }
    return num * calcFactorial(num - 1);
}

console.log(calcFactorial(5));