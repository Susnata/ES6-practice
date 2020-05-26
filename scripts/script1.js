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
const sum = (x, y) => x + y;
console.log(sum(56, 23));