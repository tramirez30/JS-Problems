// codewar_1.js

// Namespace for all problems

const codeWars = {
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
  // Problem 8: DNAtoRNA - 7kyu
  DNAtoRNA(dna) {
    // create a function which returns an RNA sequence from the given DNA sequence
    let RNA = /T/g;
    return dna.replace(RNA, "U");
  },
  // Problem 9: Who likes it? - 6kyu
  likes(names) {
    // TODO
    console.log("Length:", names.length);
    if (!names.length) {
      return "no one likes this";
    }
    let [first, second, third] = names;
    let num = names.length;

    switch (num) {
      case 1: {
        return `${first} likes this`;
      }
      case 2: {
        return `${first} and ${second} like this`;
      }
      case 3: {
        return `${first}, ${second} and ${third} like this`;
      }
      case 4: {
        return `${first}, ${second} and 2 others like this`;
      }
      default: {
        return `${first}, ${second} and ${num - 2} others like this`;
      }
    }
  },
  findNeedle(haystack) {
    return "found the needle at position " + haystack.indexOf("needle");
  },
  accum(str) {
    let arr = str.split("");
    arr.forEach((item, index) => {
      if (index === 0) {
        console.log(item.toUpperCase() + " -");
      } else {
        console.log(item.toUpperCase() + item.repeat(index) + " -");
      }
    });
  },
};

// Problem 7: PaginationHelper - 5 kyu

class PaginationHelper {
  constructor(collection, itemsPerPage) {
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
    this.pageNum = Math.ceil(collection.length / itemsPerPage);
  }
  itemCount() {
    // returns the number of items within the entire collection

    return this.collection.length;
  }
  pageCount() {
    // returns the number of pages
    return this.pageNum;
  }
  pageItemCount(pageIndex) {
    // returns the number of items on the current page. page_index is zero based.
    // this method should return -1 for pageIndex values that are out of range
    console.log(pageIndex);
  }
  pageIndex(itemIndex) {
    // determines what page an item is on. Zero based indexes
    // this method should return -1 for itemIndex values that are out of range
    console.log(itemIndex);
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
// var helper = new PaginationHelper(["a", "b", "c", "d", "e", "f"], 4);
// helper.itemCount();
// helper.pageCount();
/* 

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

// Test Case Problem #8 - DNA to RNA (7kyu)
// codeWarProblems.DNAtoRNA(
//   "CACGACATACGGAGCAGCGCACGGTTAGTACAGCTGTCGGTGAACTCCATGACA"
// );

// Test Case Problem #9 - Who likes it? (6kyu)
// let zeroNumOfLikes = codeWars.likes([]);
// let numOfLikes = codeWars.likes(["Max", "John", "Mark"]);
// let numOfLikes = codeWars.likes(["Max", "John"]);
// let numOfLikes = codeWars.likes(["Alex", "Jacob", "Mark", "Max"]);
// let numOfLikes = codeWars.likes([]);
// let numOfLikes = codeWars.likes(["Max"]);
// console.log(numOfLikes);

// Test Case Problem #10 - A Needle in the Haystack? (8kyu)
// var haystack_1 = [
//   "3",
//   "123124234",
//   undefined,
//   "needle",
//   "world",
//   "hay",
//   2,
//   "3",
//   true,
//   false,
// ];

// codeWars.findNeedle(haystack_1);

// ######################################################################################## //
/*
New Codewar Problem [NEED TO ADD TO LOG]
// Code War Problem

// function order(words) {
//   let gatheredWords = words.split(" ");
//   gatheredWords.forEach((word) => {
//     let smallWord = word.split("");
//     // ['is2', 'Thi1s', 'T4est' '3a']
//     const sortedArray = smallWord.reduce((acc, curr) => {
//       if (Number(curr) !== NaN) {
//         let position = curr;
//         console.log("Position", position);
//       } else {
//         let arr = [];
//         arr.push(curr);
//         console.log("Array:", arr);
//       }
//     }, []);
//     console.log("Result:", sortedArray);
//   });
// }

// Codewar Problem Exercise (6kyu)

function order(words) {
  let arr = words.split(" ");
  // let numericalSearch = /[0-9]/g;
  // let newArr = words.match(numericalSearch).sort();
  let newArr = arr.filter((num) => {
    return num.match(/[0-9]/g).sort((a, b) => a - b);
  });

  console.log(newArr);
}

order("is2 Thi1s T4est 3a");

*/

// Problem - 7kyu Mumbling
// Result: accum("abcd") -> "A-Bb-Ccc-Dddd"
// Loop string
// First letter must be capitalized
// Every letter after the first gets +1
// Insert "-" after each letter

codeWars.accum("abcd");
