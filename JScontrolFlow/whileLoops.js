var num = -10;

while (num <= 19) {
    console.log(num);
    num++;
};

var even = 10;

while (even <= 40) {
    console.log(even);
    even +=2;
};

var odd = 300;

while (odd <= 333) {
    if (odd % 2 != 0) {
        console.log(odd);
    }
    odd++;
};

var divisible = 5;

while (divisible <= 50) {
    if (divisible % 5 === 0 && divisible % 3 === 0) {
        console.log(divisible);
    }
    divisible++;
};