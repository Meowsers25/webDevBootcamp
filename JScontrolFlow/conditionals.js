var age = Number(prompt("What is your age?"));

if (age < 0) {
    console.log("Call us after you're born");
}
else if (age === 21) {
    console.log("Happy 21st!!!");
}
else if (age % 2 !== 0) {
    console.log("Your age is odd");
}
else if (age % Math.sqrt(age) === 0) {
    console.log("Youre a perfect square");
}