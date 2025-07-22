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
    }
    if (0 <= m <= 59) {
      total += (60 / m) * 1000;
    }
    if (0 <= s <= 59) {
      total += s * 1000;
    }
    return total;
  },
};

console.log(level8Kyu.past(1, 0, 0));
