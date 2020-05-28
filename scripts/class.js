// const x = function () { };
// const y = class { };
// console.log(Object.getPrototypeOf(x));
// console.log(Object.getPrototypeOf(y));

class Hero {
  constructor(name, level) {
    this.name = name;
    this.level = level;
  }
  greet() {
    return `${this.name} says hello!`
  }
}

const hero1 = new Hero("Varg", 1);
console.log(hero1);

class Mage extends Hero {
  constructor(name, level, spell) {
    super(name, level);
    this.spell = spell;
  }
  heal() {
    console.log(`${this.name} heals with ${this.spell}`);
  }
}

const hero2 = new Mage("Lejon", 2, "Magic Missile");

console.log(hero2);