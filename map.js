
const numbers = [2, 8, 4, 6, 3];

// const output = [];

// for (const number of numbers) {
//     const doubleTheNumber = number + 3;

//     output.push(doubleTheNumber);
// }



// console.log(output);


// Example -2

function getTheNumber(numbers) {

    const output = [];

    for (const number of numbers) {
        const doubleTheNumber = number * 3;

        output.push(doubleTheNumber);
    }
    return output;
}



// const arrayAddition = getTheNumber(numbers);

// console.log(arrayAddition);

// Example -3

function getTheNumber(numbers) {

    const output = [];

    for (const number of numbers) {

        const doubleTheNumber = wokingSpace(number);

        output.push(doubleTheNumber);
    }
    return output;
}


function wokingSpace(number) {

    return number * 3;
}

const functionMultipay = getTheNumber(numbers);

console.log(functionMultipay);

// Example -4

function getTheNumber(numbers) {

    const output = [];

    for (const num of numbers) {

        const doubleTheNumber = wokingSpace(num);

        output.push(doubleTheNumber);
    }
    return output;
}

const arrowFunction = (num) => num * 3;

console.log(getTheNumber(numbers));

// Example -5

const makeTriple = numbers.map(arrowFunction);

console.log(makeTriple);

// Example -6

const makeTriple2 = numbers.map((num) => num * 3);

console.log(makeTriple2);

// Example -7

const makeTriple3 = [2, 8, 4, 6, 3].map((num) => num * 3);

console.log(makeTriple3);

// Example -8

console.log([2, 8, 4, 6, 3].map((num) => num * 3));