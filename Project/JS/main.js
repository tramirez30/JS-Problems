// Github Link to site: https://github.com/thejsway/thejsway/blob/master/manuscript/chapter09.md

/* 
########################################################################################################################  
######################################### Exercise Problem 1 ########################################################### 
########################################################################################################################  
*/

class Dog {
  constructor(name, species, size) {
    this.name = name;
    this.species = species;
    this.size = size;
  }
  bark() {
    if (this.size > 60) {
      return "Grrr! Grrr!";
    } else {
      return "Woof! Woof!";
    }
  }
}

// Test Case #1
// const fang = new Dog("Fang", "boarhound", 75);
// console.log(`${fang.name} is a ${fang.species} dog measuring ${fang.size}`);
// console.log(`Look, a cat! ${fang.name} barks: ${fang.bark()}`);

// Test Case #2
// const snowy = new Dog("Snowy", "terrier", 22);
// console.log(`${snowy.name} is a ${snowy.species} dog measuring ${snowy.size}`);
// console.log(`Look, a cat! ${snowy.name} barks: ${snowy.bark()}`);

/* 
######################################################################################################################## 
######################################### Exercise Problem 2 ########################################################### 
########################################################################################################################  
*/

class Character {
  constructor(name, health, strength) {
    this.name = name;
    this.health = health;
    this.strength = strength;
    this.gold = 10;
    this.key = 1;
    this.xp = 0; // XP is always zero for new characters
  }
  // Attack a target
  attack(target) {
    if (this.health > 0) {
      const damage = this.strength;
      console.log(
        `${this.name} attacks ${target.name} and causes ${damage} damage points`
      );
      target.health -= damage;
      if (target.health > 0) {
        console.log(`${target.name} has ${target.health} health points left`);
      } else {
        target.health = 0;
        const bonusXP = 10;
        const bonusGold = 10;
        const bonusKey = 1;
        console.log(
          `${this.name} eliminated ${target.name} and wins ${bonusXP} experience points, ${bonusGold} gold and ${bonusKey} key(s)!`
        );
        this.xp += bonusXP;
        this.gold += bonusGold;
        this.key += bonusKey;
      }
    } else {
      console.log(`${this.name} can’t attack (they've been eliminated)`);
    }
  }
  // Return the character description
  describe() {
    return `${this.name} has ${this.health} health points, ${this.strength} as strength, ${this.xp} XP points, ${this.gold} gold and ${this.key} key(s)`;
  }
}

// Test Cases

// const aurora = new Character("Aurora", 150, 25);
// const glacius = new Character("Glacius", 130, 30);

// console.log("Welcome to the adventure! Here are our heroes:");
// console.log(aurora.describe());
// console.log(glacius.describe());

// const monster = new Character("Spike", 40, 20);
// console.log("A wild monster has appeared: it's named " + monster.name);

// monster.attack(aurora);
// monster.attack(glacius);
// aurora.attack(monster);
// glacius.attack(monster);

// console.log(aurora.describe());
// console.log(glacius.describe());

/* 
######################################################################################################################## 
######################################### Exercise Problem 3 ########################################################### 
########################################################################################################################  
*/

class Account {
  constructor(name) {
    this.name = name;
    this.balance = 0;
  }
  credit() {
    let addCredit = 1000;
    this.balance += addCredit;
    console.log(`${this.name} new balance is ${this.balance}`);
  }
  describe() {
    console.log(`owner: ${this.name}, balance: ${this.balance}`);
  }
}

let sean = new Account("Sean");
let brad = new Account("Brad");
let georges = new Account("Georges");

const allAccounts = [sean, brad, georges];

// allAccounts[0].credit();
// allAccounts[0].credit();

// let string = JSON.stringify(allAccounts);
// localStorage.setItem("Accounts", string);

let retString = localStorage.getItem("Accounts");
let retArray = JSON.parse(retString);
console.log(retArray);

/* 
########################################################################################################################  
######################################### End of Exercise! ########################################################### 
########################################################################################################################  
*/

// READ: https://eloquentjavascript.net/06_object.html
// Stopped Reading at: https://eloquentjavascript.net/06_object.html#:~:text=Overriding%20derived%20properties
// Stopped Reading at: https://eloquentjavascript.net/06_object.html#:~:text=//%20%E2%86%92%20%5Bobject%20Array%5D-,Maps,-We%20saw%20the
// Stopped Reading at: https://eloquentjavascript.net/06_object.html#:~:text=Getters%2C%20setters%2C%20and%20statics
// Stopped Reading at: https://eloquentjavascript.net/06_object.html#:~:text=celsius)%3B%0A//%20%E2%86%92%20100-,Symbols,-I%20mentioned%20in
// Stopped Reading at: https://eloquentjavascript.net/06_object.html#:~:text=//%20%E2%86%92%2021500%202-,The%20iterator%20interface,-The%20object%20given
// Stopped Reading at: https://eloquentjavascript.net/06_object.html#:~:text=P%22%2C%20%22C%22%2C%20%22I%22%5D-,Inheritance,-Imagine%20we%20need
