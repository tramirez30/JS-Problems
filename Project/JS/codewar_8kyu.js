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
    let totalFuel = mpg * fuelLeft;
    if (totalFuel > distanceToPump) {
      console.log("True");
    } else {
      console.log("False");
    }
  },
};

console.log(level8Kyu.zeroFuel(50, 25, 2));
/*
P - Array of numbers that are positive & negative
R - number of positive integers and sum of negative
E - [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14] -> [8, -50]
P - Count the positive integers. Sum all negative values
*/
