function isEven(num) {
    if (num % 2 === 0) {
        return true;
    }
    return false;
}

function factorial(num) {
    var answer = 1;

    for(var i = 1; i <= num; i++) {
        answer *= i;
    }
    return answer;
}

function kebabToSnake(str) {
    var newStr = str.replace(/-/g, "_");
    return newStr;
}

