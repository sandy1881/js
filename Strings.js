const name = "sandesh";
const repoCount = 50;

// console.log(name + repoCount)
console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);

const game = new String("sand")
console.log(game[0]);

console.log(game.length);
console.log(game.toUpperCase());
console.log(game.indexOf('a'));
console.log(game.charAt(2));
console.log(game.charCodeAt(1));

const newname ="Bengaluru"
const newstring = newname.substring(0,4)
console.log(newstring);
const newstring1 = newname.slice(0,6)
console.log(newstring1);


const trimm = "     Sandesh     "
console.log(trimm);
console.log(trimm.trim())


const url = "https://sandesh.com/sandesh%20naik"

console.log(url.replace("%20","-"));

console.log(url.includes('sandesh'))



const namee = "Banglore,manglore,chennai";
console.log(namee.split(","))