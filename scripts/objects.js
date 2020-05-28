// // var gimli = {
// //   name: "Gimli",
// //   race: "dwarf",
// //   weapon: "axe",
// //   greet() {
// //     console.log(`Hi, I am ${this.name}!`);
// //   }
// // }
// // gimli["age"] = 139;
// // gimli.fight = function () { console.log(`${this.name} fights with ${this.weapon}!`) };
// // gimli.weapon = "battle axe";

// // console.log(gimli);
// // delete gimli.race; //delete property race of the object gimli
// // console.log(gimli);

// // //for...in loop to traverse thru object

// // for (let key in gimli) {
// //   console.log(`${key.toUpperCase()} : ${gimli[key]}`);
// // }

// // console.log(Object.keys(gimli));

// const job = {
//   name: "cashier",
//   type: "hourly",
//   accepting: true,
//   showDetails() {
//     const isAccepting = this.accepting ? "is accepting applications" : "is not accepting applications";
//     console.log(`${this.name} job is ${this.type} and ${isAccepting}`);
//   }
// }
// job.showDetails();

// const barista = Object.create(job); //Object.create method
// barista.name = "barista";
// barista.showDetails();
// console.log(Object.entries(barista)); //Returns an array with only one array member containing barista's own property.

// // Initialize an object
// const employees = {
//   boss: 'Michael',
//   secretary: 'Pam',
//   sales: 'Jim',
//   accountant: 'Oscar'
// };

// const employeesKeys = Object.keys(employees); //Object.keys() returns the properties in an array.
// console.log(employeesKeys);

// employeesKeys.forEach(key => {
//   let value = employees[key];
//   console.log(`${key} : ${value}`)
// });

// console.log(`employee object has ${Object.keys(employees).length} properties.`);

// const employeesPropVals = Object.values(employees);
// console.log(employeesPropVals);

// const entries = Object.entries(employees); //Returns nested array of employees object's key value pairs.
// console.log(entries);
// entries.forEach(entry => {
//   let key = entry[0], value = entry[1];
//   console.log(`${key.toUpperCase()} : ${value}`);
// })

// Initialize an object
// const name = {
//   firstName: 'Philip',
//   lastName: 'Fry'
// };
// // Initialize another object
// const details = {
//   job: 'Delivery Boy',
//   employer: 'Planet Express'
// };
// // 
// const character = Object.assign(name, details); //Copeies the properties of name and details objects to character object.
// console.log(character);

// console.log(Object.entries(character));

// const employee = { ...name, ...details }; //Spread operator to copy properties
// console.log(employee);

// Object.freeze(details);
// details.pay = 50.00;
// details.employer = "Papa John's";

// console.log(details);

// Object.seal(name);
// name.lastName = "Pan";
// name.email = "philip.fry@abc.com";
// delete name.firstName;
// console.log(name);

// const namePrototype = Object.getPrototypeOf(name);
// console.log(namePrototype);

// var arr = [];
// console.log(arr.__proto__);
// console.log(Array.prototype.isPrototypeOf(arr));
// console.log(Object.prototype.isPrototypeOf(arr.__proto__));
// console.log(arr instanceof Array);

// function Hero(name, level) {
//   this.name = name;
//   this.level = level;
// }
// Hero.prototype.greet = function () {
//   console.log(`${this.name} says hello!`);
// };

// var hero1 = new Hero("Spidey", 2);
// console.log(Object.getPrototypeOf(hero1));

// function Warrior(name, level, weapon) {
//   Hero.call(this, name, level);
//   this.weapon = weapon;
// }

// function Healer(name, level, spell) {
//   Hero.call(this, name, level);
//   this.spell = spell;
// }

// Warrior.prototype.attack = function () {
//   console.log(`${this.name} attacks with ${this.weapon}`);
// };

// Healer.prototype.heal = function () {
//   console.log(`${this.name} heals with ${this.spell}`);
// };

// Warrior.prototype = Object.create(Hero.prototype);
// Healer.prototype = Object.create(Hero.prototype);

// const hero1 = new Warrior('Bjorn', 1, "axe");
// const hero2 = new Healer('Kanin', 1, "cure");

// hero1.greet();

//Object Destructuring
// const notes = {
//   title: "My first note",
//   // date: "03/06/2020",
//   author: {
//     firstName: "Susnata",
//     lastName: "Dube"
//   },
//   tags: ["personal", "writing", "investigation"]
// }

// const {
//   title,
//   date = new Date(),
//   author: { firstName },
//   tags: [tag1, tag2]
// } = notes;
// console.log(`${title} was written on ${date} by ${firstName} under tha category ${tag1} and ${tag2}`);
// const { title, date, author, author: { firstName: fName, lastName: lName } } = notes;
// console.log(title);
// console.log(date);
// console.log(author);
// console.log(fName);
// console.log(lName);

//Array Destructuring

// Object.entries(notes).forEach(([key, value]) => {
//   console.log(`${key} : ${value}`);
// })

// for (let [key, value] of Object.entries(notes)) {
//   console.log(`${key} : - ${value}`);
// }

// const date = [1986, 06, 03];
// const [year, month, day] = date;
// console.log(day, month, year);

// //Spread with Arrays

// const tools = ['hammer', 'screwdriver']
// const otherTools = ['wrench', 'saw']

// const allTools = [...tools, ...otherTools, "drilling machine", "plus"];
// console.log(allTools);

// const set = new Set();
// set.add("Dolphin");
// set.add("Whale");
// set.add("Shark");
// console.log(set);
// const seaCreatures = [...set];
// console.log(seaCreatures);

// const user = {
//   id: 3,
//   name: 'Ron',
//   organization: {
//     name: 'Parks & Recreation',
//     city: 'Pawnee'
//   }
// }

// const updatedUser = {
//   ...user,
//   isLoggedIn: true,
//   organization: {
//     ...user.organization,
//     position: "Director"
//   }
// }
// console.log(updatedUser);

//Rest parameter

// function printNum(...arg) {
//   arg.forEach(el => {
//     console.log(el);
//   })
// }
// printNum(1, 2, 3, 4, 5, 6, 7, 8);

// function restTest(one, two, ...args) {
//   console.log(one);
//   console.log(two);
//   console.log(args);
// }

// restTest(1, 2, 3, 4, 5);

const { isLoggedIn, ...rest } = { id: 1, name: 'Ben', isLoggedIn: true }
console.log(isLoggedIn);
console.log(rest);