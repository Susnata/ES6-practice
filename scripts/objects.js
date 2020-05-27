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
const name = {
  firstName: 'Philip',
  lastName: 'Fry'
};
// Initialize another object
const details = {
  job: 'Delivery Boy',
  employer: 'Planet Express'
};

// const character = Object.assign(name, details); //Copeies the properties of name and details objects to character object.
// console.log(character);

// console.log(Object.entries(character));

// const employee = { ...name, ...details }; //Spread operator to copy properties
// console.log(employee);

// Object.freeze(details);
// details.pay = 50.00;
// details.employer = "Papa John's";

// console.log(details);

Object.seal(name);
name.lastName = "Pan";
name.email = "philip.fry@abc.com";
delete name.firstName;
console.log(name);

const namePrototype = Object.getPrototypeOf(name);
console.log(namePrototype);