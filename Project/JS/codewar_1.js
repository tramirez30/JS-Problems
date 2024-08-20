// codewar_1.js

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
  // Problem 2: Shortest Word (7 kyu)
  findShort(str) {
    let words = str.split(" ");
    let arr = [];
    for (let i = 0; i < words.length; i++) {
      arr.push(words[i].length);
    }
    return Math.min(...arr);
  },
  // Problem 3: Convert a string to an array (8 kyu)
  stringToArray(string) {
    console.log(string);
  },
};

// Test Case Problem #1 - How good are you really? (8 kyu)
// codeWarProblems.betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75);

// Test Case Problem #2 - Shortest Word (7 kyu)
// codeWarProblems.findShort("Let's travel abroad shall we");

// Test Case Problem #2 - Convert a string to an array (8 kyu)
codeWarProblems.stringToArray("Hello World");
