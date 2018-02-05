var colors = ["red", "yellow", "blue"];
colors.push("orange");
console.log(colors);
colors.pop();
console.log(colors);

colors.unshift("indigo");
console.log(colors);
colors.shift();
console.log(colors);

var nums = [1, 2, 3, 4, 5];
console.log(nums.indexOf(2));
console.log(nums.indexOf(8));
//if there is no indexOf -1 is returned

var fruits = ["banana", "orange", "lemon", "apple", "mango"];
var citrus = fruits.slice(1, 3);
console.log(citrus);
//.slice takes 2 arguments...starting point and ending point(not inclusive)
var basket = fruits.slice();
console.log(basket);
//.slice() with no arguments returns full array