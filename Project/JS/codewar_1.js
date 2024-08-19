// codewarsProblems.js

// Namespace for all problems

const codeWarProblems = {
  // Problem 1: How good are you really? (8 kyu)
  betterThanAverage(classPoints, yourPoints) {
    let total;
    let average = classPoints.reduce((acc, curr) => {
      total += acc + curr;
      return total / classPoints.length;
    });

    console.log(total);
  },
};

// Test Case Problem #1 - How good are you really? (8 kyu)
codeWarProblems.betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75);
