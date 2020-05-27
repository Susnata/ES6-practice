var gimli = {
  name: "Gimli",
  race: "dwarf",
  weapon: "axe",
  greet() {
    console.log(`Hi, I am ${this.name}!`);
  }
}
gimli["age"] = 139;
gimli.fight = function () { console.log(`${this.name} fights with ${this.weapon}!`) };
gimli.weapon = "battle axe";

console.log(gimli);
delete gimli.race; //delete property race of the object gimli
console.log(gimli);

//for...in loop to traverse thru object

for (let key in gimli) {
  console.log(`${key.toUpperCase()} : ${gimli[key]}`);
}

console.log(Object.keys(gimli));