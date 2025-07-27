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
    return `${first[0].toUpperCase()}.${last[0].toUpperCase()}
  },
};

console.log(level8Kyu.abbrevName("john doe"));
