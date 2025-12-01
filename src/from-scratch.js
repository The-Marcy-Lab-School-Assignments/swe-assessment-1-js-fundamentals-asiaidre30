/*
  Write your functions here!

  Each function should:
  - Be exported so tests can use it
  - Follow the exact specifications
  - Pass all test cases
  - Use descriptive variable names
  - Have no linting errors
*/

// ============================================
// Question 1: petJudger
// ============================================

const petJudger = (petBreed, petName) => {
  if (!petBreed || !petName) {
    console.log("Missing information. Please provide a valid pet.")
  } else if (petBreed === 'dog') {
    console.log(" I love dogs! ${petName} is so cute!");

  } else if (petBreed === 'cat') {
    console.log("I love cats! ${petName} is so cute!");

  } else if (petBreed === "turtle") {
    console.log("Who doesn't love a good turtle? ${petName} is the tops.");

  } else if (petBreed === "snake") {
    console.log("Not a fan, please take ${petName} and leave.");
  } else {
    console.log("What an...interesting pet.");
  };






};

// ============================================
// Question 2: loopFromOneUpToAnother
// ============================================

const loopFromOneUpToAnother = (firstNum, secondNum) => {
  // if the numbers are equal or firstNum is gonna be greater return nothing  
  if (firstNum >= secondNum) {
    return;
  }
  for (let i = firstNum; i < secondNum; i++) {
    console.log(i)
  }
};

// ============================================
// Question 3: shoutEveryLetterForLoop
// ============================================

const shoutEveryLetterForLoop = (str) => {
  if (str.length === 0) {
    return;
  }
  for (let i = 0; i < str.length; i++)

    console.log(str[i].toUpperCase() + "!");

};

// ============================================
// Question 4: letterCaseCounts
// ============================================

const letterCaseCounts = (str) => {
  const count = {
  lowercase: 0,
  uppercase: 0,
  neither: 0
  };

  for (const char of str) {
    if (char >= 'a' && char <= 'z') {
      counts.lowercase++;
    }  else if (char >= "A" && char <= "Z") {
      counts.uppercase++
    } else {
    counts.neither++;
    }
 }
  return counts;

};

// ============================================
// Question 5: getNamesOfGreedyGnomes
// ============================================

const getNamesOfGreedyGnomes = (gnomes) => {
  const greedyNames = [];

  for (const gnome of gnomes) {
    if (gnomes.stolenDecoration.length > 1) {
      greedyNames.push(gnome.name);
    }
  }

  return greedyNames;
  
};

// ============================================
// Exports
// ============================================

module.exports = {
  petJudger,
  loopFromOneUpToAnother,
  shoutEveryLetterForLoop,
  letterCaseCounts,
  getNamesOfGreedyGnomes,
};
