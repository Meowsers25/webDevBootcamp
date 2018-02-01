// var answer = prompt("Are we there yet??");

// while(answer !== "yes") {
//     var answer = prompt("Are we there yet??");
// }
// alert("Woo Hoo we made it!!");


var answer = prompt("Are we there yet??");

while (answer.indexOf("yes") === -1 && answer.indexOf("yeah") === -1) {
    var answer = prompt("Are we there yet??");
}
alert("Woo Hoo we made it!!");