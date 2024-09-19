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

// const allAccounts = [sean, brad, georges];

// allAccounts[0].credit();
// allAccounts[0].credit();

// let string = JSON.stringify(allAccounts);
// localStorage.setItem("Accounts", string);

let retString = localStorage.getItem("Accounts");
let retArray = JSON.parse(retString);
// console.log(retArray);

/* 
########################################################################################################################  
######################################### End of Exercise! ########################################################### 
########################################################################################################################  
*/

/* 
######################################################################################################################## 
######################################### Exercise - Eloquent JS ####################################################### 
########################################################################################################################  
*/

// Problem: https://eloquentjavascript.net/06_object.html#:~:text=Exercises-,A%20vector%20type,-Write%20a%20class

class Vec {
  constructor(x, y, plus) {
    this.x = x;
    this.y = y;
  }
  plus(other) {
    return new Vec(this.x + other.x, this.y + other.y);
  }
  minus(other) {
    return new Vec(this.x - other.x, this.y - other.y);
  }
}
let newVar = new Vec(1, 2).plus(new Vec(3, 4));
console.log("Logic:", newVar);
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
// console.log(new Vec(3, 4).length);
// → 5
