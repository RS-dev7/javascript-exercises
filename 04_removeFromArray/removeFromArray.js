const removeFromArray = function(...args) {
    

/*
    function remove(num) {
        for (let i = 1; i < args.length; i++) {

            if (num === args[i]) {
                array.remove(num);
            }
        }
    }

    for (const number of array) {
        remove(number);
    }
*/


    // the very first item in our list of arguments is the array, we pull it out with args[0]
    const array = args[0];
    // create a new empty array
    const newArray = [];
    // use forEach to go through the array
    array.forEach((item) => {
      // push every element into the new array
      // UNLESS it is included in the function arguments
      // so we create a new array with every item, except those that should be removed
      if (!args.includes(item)) {
        newArray.push(item);
      }
    });
    // and return that array
    return newArray;
  };

// Do not edit below this line
module.exports = removeFromArray;