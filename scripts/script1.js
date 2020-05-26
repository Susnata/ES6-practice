//JS script positioning in HTML file
//const d = new Date();
// const heading = document.createElement('h1');
// document.body.innerHTML = "<h1>Today's date is " + d.toLocaleDateString() + "</h1>";
// document.body.appendChild(heading);

//Hoisting problem with var keyword

// let xnum = 100;
// function hoist(){
//     if (3 === 4){
//         let xnum =20;
//     }
//     console.log(xnum);
// }
// hoist();

//for...in loop
// const shark = {
//     species: "Great White",
//     color: "White",
//     teeth: Infinity
// };
// for(prop in shark){
//     console.log(`${prop}`.toUpperCase() + ` : ${shark[prop]}`);
// }

//for...of loop

// const sharkNames = ["Great white", "Tiger", "Hammerhead"];
// for (let [index,name] of sharkNames.entries()){
//     console.log(index , name);
// }

//switch statement

// var today = new Date().getDay();
// switch(today){
//     case 1:
//         console.log("Today is Monday");
//         break;
//         case 2:
//         console.log("Today is Tuesday");
//         break;
//         case 3:
//         console.log("Today is Wednesday");
//         break;
//         case 4:
//         console.log("Today is Thursday");
//         break;
//         case 5:
//         console.log("Today is Friday");
//         break;
//         case 6:
//         console.log("Today is Saturday");
//         break;
//         default:
//         console.log("It's a holiday!");
// }

// const marks = 85; 
// let grade; 
// switch(true){
//     case marks >=90:
//         grade = "A";
//         break;
//     case marks >= 80 && marks <90:
//         grade = "B";
//         break;        
//     case marks >=70 && marks < 80:
//         grade = "C";
//         break;
//     case marks >=60 && marks < 70:
//         grade = "D";
//         break;
//     case marks >=50 && marks < 60:
//         grade = "E";
//         break;
//     case marks < 50:
//         grade = "F";
//         break;
//     default:
//         marks = "NA";                                      
// }
// console.log(`The grade obtained is ${grade}`);

//arrow function

// const sum = (x, y) => x + y;
// console.log(sum(56, 23));

//this keyword in the context of an object

// const america = {
// name: 'The United States of America',
// yearFounded: 1776,
// describe() {
// console.log(`${this.name} was founded in ${this.yearFounded}.`)
// },
// }
// america.describe()

//this keyword in the context of inner object

// const america1 = {
// name: 'The United States of America',
// yearFounded: 1776,
// details: {
// symbol: 'eagle',
// currency: 'USD',
// printDetails() {
// console.log(`The symbol is the ${this.symbol} and the currency is
// ${this.currency}.`)
// },
// },
// }

// america1.details.printDetails();

//this keyword in function Constructor context

// function Country(name, yearFounded) {
//   this.name = name;
//   this.yearFounded = yearFounded;
//   this.describe = function () {
//     console.log(`${this.name} was founded in ${this.yearFounded}`);
//   }
// }

// const USA = new Country("United States of America", 1776);
// USA.describe();

//this keyword in event handlers

// const button = document.createElement('button');
// button.textContent = "Click Me";
// document.body.append(button);

// // button.addEventListener("click", function () {
// //   console.log(this);
// // });

// class Display {
//   constructor() {
//     this.buttonText = "Don't click me";
//     button.addEventListener("click", (event) => {
//       event.target.textContent = this.buttonText;
//       console.log(this);
//     })
//   }
// }

// new Display();


//call and apply menthods

// var book = {
//   title: "Brave New World",
//   author: "Aldous Huxley"
// }

// function summary() {
//   console.log(`${this.title} was written by ${this.author}`);
// }

// // summary.call(book);
// // summary.apply(book);

// function printThis() {
//   console.log(this);
// }

// // printThis.call(book);

// function longerSummary(genre, year) {
//   console.log(`${this.title} was written by ${this.author}. It is a ${genre} novel written in ${year}`);
// }

// longerSummary.call(book, "dystopian", 1932);
// longerSummary.apply(book, "dystopian", 1932);

// var book2 = {
//   title: "Oliver Twist",
//   author: "Charles Dickens"
// }

// bind method 

// var braveNewWorldSummary = summary.bind(book);
// braveNewWorldSummary();
// braveNewWorldSummary.bind(book2);
// braveNewWorldSummary();

//arrow functions this ;

// var whoAmI = {
//   name: "Susnata Dube",
//   regularFunc: function () {
//     console.log(this.name);
//   },
//   arrowFunc: () => {
//     console.log(this.name);
//   }
// }

// whoAmI.regularFunc();
// whoAmI.arrowFunc();