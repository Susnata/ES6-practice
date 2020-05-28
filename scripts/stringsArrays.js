// var str1 = "How are you?"
// console.log(str1.charAt(5));
// console.log(str1.indexOf("o"));
// console.log(str1.lastIndexOf("o"));
// console.log(str1.slice(0, 5));
// const splitStr = str1.split(" ");
// console.log(splitStr);
// const newStr = str1.replace("How", "Where");
// console.log(newStr);

// var str2 = "Javascript is a good programming language. Java is excellent too!";
// console.log(str2.replace(/java/gi, "Lava"));

// let seaCreatures = [
//   "whale",
//   "octopus",
//   "squid",
//   "shark",
//   "seahorse",
//   "starfish",
//   "cuttlefish"
// ];
// console.log(seaCreatures.indexOf("squid"));
// console.log(seaCreatures.indexOf("coral"));
// seaCreatures.unshift("coral");
// seaCreatures[7] = "lobster";
// console.log(seaCreatures);
// seaCreatures.splice(6, 1, "manatee");
// console.log(seaCreatures);
// var seaAnimal = seaCreatures.shift();
// console.log(seaAnimal);

// for (let seaCreature of seaCreatures) {
//   console.log(seaCreature);
//}

// let fish = ["piranha", "barracuda", "cod", "eel"];
// fish.forEach(eachFish => {
//   console.log(eachFish);
// })

// let printFish = fish.map(eachFish => {
//   // console.log(eachFish);
//   return `${eachFish.toUpperCase()} loves to be in water`;
// })

// console.log(printFish);

// // let seaCreatures = ["shark", "whale", "squid", "starfish", "narwhal"];
// let filteredList = seaCreatures.filter(creature => {
//   return creature.charAt(0) === 's';
// })
// console.log(filteredList);

// let numbers = [42, 23, 16, 15, 4, 8];
// // Get the sum of all numerical values
// let sum = numbers.reduce((a, b) => {
//   console.log(a); //keeps the running total
//   console.log(b); //points to individual array element
//   return a + b;
// });
// sum;

// const isCephalopod = (cephalopod) => {
//   return ["cuttlefish", "octopus"].includes(cephalopod);
// }

// console.log(seaCreatures.find(isCephalopod));
// console.log(seaCreatures.findIndex(isCephalopod));

// Create arrays of monovalves and bivalves
let monovalves = ["abalone", "conch"];
let bivalves = ["oyster", "mussel", "clam"];
let crustaceans = ["king crab", "dungeness crab", "crayfish", "lobster"];

let shellfish = monovalves.concat(bivalves, crustaceans);
console.log(shellfish.reverse());
console.log(shellfish.fill("shrimp", 2, 4));
// let crabs = shellfish.slice(5, 7);
// crabs.splice(1, 0, "hermit crab");
// console.log(crabs.join(", "));

let numList = [43, 12, 4, 7, 34, 6];

const sortNum = (a, b) => {
  return (a - b);
}
console.log(numList.sort(sortNum));


