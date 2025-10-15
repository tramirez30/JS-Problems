const level8Kyu = {
  // Opposites attract - Level 8 kyu
  lovefunc(flower1, flower2) {
    return (flower1 + flower2) % 2 === 0 ? false : true;
  },
  // Beginners Series #2 Clock
  past(h, m, s) {
    let total = 0;
    if (0 <= h <= 23) {
      total += h * 3600000;
      console.log("hour:", total);
    }
    if (0 <= m <= 59) {
      total += m * 60000;
      console.log("minute:", total);
    }
    if (0 <= s <= 59) {
      total += s * 1000;
      console.log("second:", total);
    }
    return total;
  },
  // Multiply
  multiply(number) {
    return number % 2 === 0 ? number * 8 : number * 9;
  },
  // Abbreviate a Two Word Name
  abbrevName(name) {
    let [first, last] = name.split(" ");
    return `${first[0].toUpperCase()}.${last[0].toUpperCase()}`;
  },
  // A Needle in the Haystack
  findNeedle(arr) {
    return arr.includes("needle")
      ? `found the needle at position ${arr.indexOf("needle")}`
      : "Your function didn't return anything";
  },
  // Invert Values
  invert(array) {
    return array.map((num) => -num);
  },
  // Calculate average
  findAverage(array) {
    // Note: Empty arrays should return 0.
    if (!Array.isArray(array) || array.length === 0) return 0;
    let total = 0;
    array.forEach((num) => (total += num));
    return total / array.length;
  },
  // Reduce but Grow
  grow(array) {
    let total = 1;
    for (let num of array) {
      total *= num;
    }
    return total;
  },
  // Count of positives / sum of negatives

  countPositivesSumNegatives(arr) {
    if (!arr || arr.length === 0) return [];

    let negativeValue = arr
      .filter((num) => num < 0)
      .reduce((sum, cur) => sum + cur, 0);
    let positiveValue = arr.filter((num) => num > 0).length;

    return [positiveValue, negativeValue];
  },
  // Will you make it?

  zeroFuel(distanceToPump, mpg, fuelLeft) {
    return fuelLeft * mpg >= distanceToPump ? true : false;
  },

  // Calculate BMI
  /* Write function bmi that calculates body mass index (bmi = weight / height2). */
  bmi(weight, height) {
    let mass = weight / Math.pow(height, 2);
    if (mass <= 18.5) {
      return "Underweight";
    } else if (mass <= 25.0) {
      return "Normal";
    } else if (mass <= 30) {
      return "Overweight";
    } else {
      return "Obese";
    }
  },
  // Find Maximum and Minimum Values of a List
  min(list) {
    return Math.min(...list);
  },
  max(list) {
    return Math.max(...list);
  },
  // Fake Binary
  fakeBin(num) {
    let arr = "";
    for (let i of num) {
      if (i < 5) {
        arr += "0";
      } else if ((i) => 5) {
        arr += "1";
      }
    }
    return arr;
  },
  // Reversed sequence
  // Example : n=5 --> [5,4,3,2,1]
  reverseSeq(num) {
    let arr = [];
    do {
      arr.push(num);
      num -= 1;
    } while (num > 0);
    return arr;
  },
  // Rock Paper Scissors
  rps(p1, p2) {
    const map = {
      rock: "scissors",
      paper: "rock",
      scissors: "paper",
    };

    if (p1 === p2) {
      return "Draw";
    }

    return map[p1] === p2 ? "Player 1 won!" : "Player 2 won!";
  },

  // If you can't sleep, just count sheep!!
  countSheep(num) {
    let phrase = "";
    if (num === 0) {
      return phrase;
    }
    for (let i = 1; i <= num; i++) {
      phrase += `${i} sheep...`;
    }
    return phrase;
  },
  // Grasshopper - Grade book
  getGrade(s1, s2, s3) {
    let average = Math.floor((s1 + s2 + s3) / 3);
    let grade;

    if (average >= 90 && average <= 100) {
      grade = "A";
    } else if (average >= 80 && average <= 90) {
      grade = "B";
    } else if (average >= 70 && average <= 80) {
      grade = "C";
    } else if (average >= 60 && average <= 70) {
      grade = "D";
    } else {
      grade = "F";
    }
    return grade;
  },
  // Remove exclamation marks
  removeExclamationMarks(word) {
    console.log(word);
  },
};

console.log(level8Kyu.removeExclamationMarks("Hello World!"));

/*
P - Array of numbers that are positive & negative
R - number of positive integers and sum of negative
E - [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14] -> [8, -50]
P - Count the positive integers. Sum all negative values
*/

/* 
    assert.strictEqual(countSheep(0), "");
    assert.strictEqual(countSheep(1), "1 sheep...");
    assert.strictEqual(countSheep(2), "1 sheep...2 sheep...");
    assert.strictEqual(countSheep(3), "1 sheep...2 sheep...3 sheep...");

*/
