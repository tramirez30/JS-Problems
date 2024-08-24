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
    return string.split(" ");
  },
  // Problem 4: Perfect squares, perfect fun (7 kyu) [Work In Progress]
  squareIt(int) {
    const arr = int.toString().split("");
    let index = 0;
    let half = Math.ceil(arr.length / 2);

    console.log("Arr:", arr, "Length:", arr.length);
    if (Math.sqrt(arr.length) % 1 === 0) {
      console.log("Half:", arr.splice(index, half));
    } else {
      console.log("Not a perfect square!");
    }
    index += half;
  },
  // Problem 5: CamelCase Method - 6kyu [Work In Progress]
  // String.prototype.camelCase=function(){
  //your code here
  // }
};

// Test Case Problem #1 - How good are you really? (8 kyu)
// codeWarProblems.betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75);

// Test Case Problem #2 - Shortest Word (7 kyu)
// codeWarProblems.findShort("Let's travel abroad shall we");

// Test Case Problem #3 - Convert a string to an array (8 kyu)
// codeWarProblems.stringToArray("Hello World");

// Test Case Problem #4 - Perfect squares, perfect fun (7 kyu)
/* NOTE!!
1212 returns:

"12
12"

Note: 4 digits so 2 squared (2x2 perfect square). 2 digits on each line.
*/
codeWarProblems.squareIt(1234);
