// Scratch paper for programmers :)

// let fruit = ["bananas","apples","oranges","strawberry","pear","pear","pear","kiwi"];

// Push: Defines "raspberry" as the last fruit in the array.
// fruit.push("raspberry");

// Pop: Removes "raspberry" from the array since it was last.
// fruit.pop();

// console.log(fruit);
// console.log(fruit[0]);
// console.log(fruit[1]);
// console.log(fruit[2]);
// console.log(fruit[3]);
// console.log(fruit[4]);
// console.log(fruit[5]);

// console.log(fruit.length);
// console.log(fruit[fruit.length-1]);

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

let cpu = ["rock", "paper", "scissor", "godzilla", "kong"];

function randChoice(X) {
    return Math.floor(Math.random() * X);
}

let cpuChoice = randChoice(cpu.length);

console.log(cpu[cpuChoice]);
