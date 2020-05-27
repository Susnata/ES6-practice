var str1 = "How are you?"
console.log(str1.charAt(5));
console.log(str1.indexOf("o"));
console.log(str1.lastIndexOf("o"));
console.log(str1.slice(0, 5));
const splitStr = str1.split(" ");
console.log(splitStr);
const newStr = str1.replace("How", "Where");
console.log(newStr);

var str2 = "Javascript is a good programming language. Java is excellent too!";
console.log(str2.replace(/java/gi, "Lava"));
