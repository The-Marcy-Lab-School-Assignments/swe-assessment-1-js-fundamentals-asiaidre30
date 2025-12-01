/*
  Fix the bugs in the following functions!

  Read the comments to understand what each function should do.
  Run the tests to see what's failing.
  Fix the code to make all tests pass.
*/

// ============================================
// Question 1: fixVariables
// ============================================
// This function should print and return a message based on temperature

const fixVariables = (temp) => {
  if (temp <= 30) {
    console.log('Pretty chilly.');
    return 'Pretty chilly.';
  } else if (temp <= 70) {
    console.log('Not bad.');
    return 'Not bad.';
  } else if (temp <= 100) {
    console.log('On the hot side.');
    return 'On the hot side.';
  } else if (temp <= 110) {
    console.log('I will die of heat.');
    return 'I will die of heat.';
  } else {
    console.log("And that's how I feel about the temp!");
    return "And that's how I feel about the temp!"
  }

};



// ============================================
// Question 2: doubleAllItemsPurely
// ============================================
// This function should return a NEW array with all values doubled
// It should NOT mutate the original array

const doubleAllItemsPurely = (arr) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i] * 2);
  }
  
  return newArr;
};

// ============================================
// Question 3: sumArray
// ============================================
// This function should take in an array of numbers and return the sum of all the numbers

const sumArray = (numbers) => {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
};

// ============================================
// Exports
// ============================================

module.exports = {
  fixVariables,
  doubleAllItemsPurely,
  sumArray,
};
