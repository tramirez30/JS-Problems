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
  // Problem 4: Perfect squares, perfect fun (7 kyu) [Did not complete 🚫]
  squareIt(int) {
    const arr = int.toString().split("");
    console.log("Array", arr);
    const root = Math.ceil(arr.length / 2);
    const newLine = "\n";
    console.log("Root", root);
    console.log(`This is a line.${newLine}This is a new line.`);
  },
  // Problem 5: CamelCase Method - 6kyu [Work In Progress]
  /* 
  My solution for codewars (Prototype)
  String.prototype.camelCase=function(){
    let arr = this.split(" "); // References the String
        let newArr = [];
        for (let item of arr) {
          let letter = item.slice(0, 1).toUpperCase();
          let word = item.slice(1).toLowerCase();
          let newWord = `${letter}${word}`;
          newArr.push(newWord);
        }
        return newArr.join("");
  }
  */
  camelCase(str) {
    let arr = str.split(" ");
    let newArr = [];
    for (let item of arr) {
      let letter = item.slice(0, 1).toUpperCase();
      let word = item.slice(1).toLowerCase();
      let newWord = `${letter}${word}`;
      newArr.push(newWord);
    }
    return newArr.join("");
  },
  // Problem 6: Number to Digit Tiers - 7 kyu
  createArrayOfTiers(num) {
    let newArr = [];
    let arr = num.toString().split("");
    console.log("Old Array:", arr);
    let tiers = "";
    for (let item of arr) {
      tiers += item;
      newArr.push(tiers);
    }
    return newArr;
  },
};

// Problem 7: PaginationHelper - 5 kyu

class PaginationHelper {
  constructor(collection, itemsPerPage) {
    // The constructor takes in an array of items and a integer indicating how many
    // items fit within a single page
  }
  itemCount() {
    // returns the number of items within the entire collection
    console.log(collection.length);
  }
  pageCount() {
    // returns the number of pages
  }
  pageItemCount(pageIndex) {
    // returns the number of items on the current page. page_index is zero based.
    // this method should return -1 for pageIndex values that are out of range
  }
  pageIndex(itemIndex) {
    // determines what page an item is on. Zero based indexes
    // this method should return -1 for itemIndex values that are out of range
  }
}

// Test Case Problem #1 - How good are you really? (8 kyu)
// codeWarProblems.betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75);

// Test Case Problem #2 - Shortest Word (7 kyu)
// codeWarProblems.findShort("Let's travel abroad shall we");

// Test Case Problem #3 - Convert a string to an array (8 kyu)
// codeWarProblems.stringToArray("Hello World");

// Test Case Problem #4 - Perfect squares, perfect fun (7 kyu)
// codeWarProblems.squareIt(1234);

// Test Case Problem #5 - CamelCase Method (6kyu)
// codeWarProblems.camelCase("hello world");

// Test Case Problem #6 - Number to Digit Tiers (7 kyu)
// 420 should return ["4", "42", "420"]
// Create a new empty Array [] (I will push the new values here)
// Convert Number into a String
// Split Number into an array
//["4", "2", "0"]
// Loop through array
// Create new variable to hold value of [i]
// Append value of [i] (+=)
// Push new value to empty Array
// Return Array

// codeWarProblems.createArrayOfTiers(777);

// Test Case Problem #7 - PaginationHelper (5kyu)
/* 
var helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
helper.pageCount(); // should == 2
helper.itemCount(); // should == 6
helper.pageItemCount(0); // should == 4
helper.pageItemCount(1); // last page - should == 2
helper.pageItemCount(2); // should == -1 since the page is invalid

// pageIndex takes an item index and returns the page that it belongs on
helper.pageIndex(5); // should == 1 (zero based index)
helper.pageIndex(2); // should == 0
helper.pageIndex(20); // should == -1
helper.pageIndex(-10); // should == -1
*/
