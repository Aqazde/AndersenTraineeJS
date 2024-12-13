const readline = require('readline');

function toBinary(number) {
    return (number >>> 0).toString(2);
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

console.log("Binary of number 10: " + toBinary(10));

rl.question("Enter number: ", (input) => {
    const number = Number(input);
    console.log("Binary of number " + number + ": " + toBinary(number));
    rl.close();
});
