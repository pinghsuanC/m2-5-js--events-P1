// Exercise 2
//
// 1. Write a function accepts 2 arrays of strings and returns a new combined array of the strings in alphabetical order.
// e.g. combineArrays(["crisp", "bacon"], ['zuchini', 'apple']) returns ['apple', 'bacon', 'crispy', 'zuchini']

// - if any of the values in either array is not strings, return undefined.

const combineArrays = (arr1, arr2) => {
  // Insert missing solution please
  // loop & check array
  let r = [];
  let t = true;
  let l = [...arr1,...arr2]
  for(let n = 0; n<l.length; n++){
    if(typeof(l[n])!=="string"){
      return undefined;
    }
    r.push(l[n]);
  };
  return r.sort();
};

// 2. Do a console.log to verify your function.
console.log(combineArrays(["A", "N", "ana", 123], ["B", "ban"]));
// 3. Test your function.
// Look for the corresponding exercise file in the __tests__ folder.
// Add some test cases in the test. The first one is done for you.

module.exports = combineArrays;
