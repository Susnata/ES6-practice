// const map1 = new Map();

// map1.set("firstName", "Susnata"); //use set method to populate maps
// map1.set("lastName", "Dube");

// //use array of [key : value] pairs to initialize map
// const map2 = new Map([["newHobby", "gardening"], ["newMotto", "to get healthy"]]);
// console.log(map2);


// const luke = {
//   firstName: 'Luke',
//   lastName: 'Skywalker',
//   occupation: 'Jedi Knight',
// }
// //use Object.entries() to convert an object to a map
// const map3 = new Map(Object.entries(luke));
// console.log(map3);

// //use Object.fromEntries() to convert a map to an Object
// const newLuke = new Object(Object.fromEntries(map3));
// console.log(newLuke);

// //USe Array.from() method to convert a map to an array of [key, value] elements
// const arr = Array.from(map1);
// console.log(arr);

// map2.set("newMotto", "Be persistent");
// console.log(map2);

// const goal = { "goal": "Get a job in US" };
// map2.set(goal, "Make the goal SMART");
// map2.set(goal, " Believe in your goal");
// console.log(map2);

const map = new Map([
  ['animal', 'otter'],
  ['shape', 'triangle'],
  ['city', 'New York'],
  ['country', 'Bulgaria'],
]);

// console.log(map.has("shape")); //has checks the existence of a particular key in the map;
// console.log(map.get("city")); //get retrieves the value based on the key passed
// console.log(map.size); //to get count of map entries
// console.log(map.delete("country"))// delete deletes an entry based on the key passed
// console.log(map.clear()) //empties the map
// console.log(map.keys()) // returns an iterator with all the keys of the map
// console.log(map.values()) // returns an iterator with all the values of the map
// console.log(map.entries()) // returns an iterator with all the key-value pairs of the map

// map.forEach((value, key) => console.log(`${key} : ${value}`));

// for (const [key, value] of map) {
//   console.log(`${key} - ${value}`);
//}

const set1 = new Set();
set1.add("mango");
set1.add("banana");
set1.add("jackfruit");
console.log(set1);

const set2 = new Set(["orange", "lime", "lemon"]);
set2.add("papaya");
set2.add("mango");
set2.add(["mango", "dates", "palm"]);
set2.add(["mango", "dates", "palm"]);
console.log(set2);

console.log(set2.has("dates"));
console.log(set2.has("papaya"));
console.log(set2.values());
set2.forEach(values => {
  console.log(`<<${values}>>`);
})