const repeatString = function(string, num) {
    let finalString = '';
    for (let i = 0; i < num; i++) {
        finalString += string;
    }
    if (num < 0) {return 'ERROR'}
    else {
        return finalString;

    }
};

// Do not edit below this line
module.exports = repeatString;
