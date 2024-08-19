// codewarsProblems.js

// Namespace for all problems

const codeWarProblems = {
  // Problem 1: How good are you really? (8 kyu)
  betterThanAverage(classPoints, yourPoints) {
    // console.log(classPoints.length);
    let average = classPoints.reduce((acc, curr) => {
      return acc + curr;
    });
    return average / classPoints.length > yourPoints ? false : true;
  },
};

// Test Case Problem #1 - How good are you really? (8 kyu)
codeWarProblems.betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75);
