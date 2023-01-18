const sumAll = function(num1, num2) {

    let sum = 0;

    for (let i = num1; num1 < num2 ? i <= num2 : i >= num2; num1 > num2 ? i-- : i++) {
        sum += i;
    }

    return num1 < 0 || num2 < 0 || typeof num1 !== 'number' || typeof num2 !== 'number' ? 'ERROR' : sum;
};

// Do not edit below this line
module.exports = sumAll;
