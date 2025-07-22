const level8Kyu = {
  // Opposites attract - Level 8 kyu
  lovefunc(flower1, flower2) {
    return (flower1 + flower2) % 2 === 0 ? true : false;
  },
};

console.log(level8Kyu.lovefunc(1, 1));
