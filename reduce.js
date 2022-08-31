
const number = [2, 3, 4, 5, 6, 7, 8];

const result = number.reduce((previous, current) => previous + current, 0);

console.log(result);

const student = {
    name: 'rofikul islam',
    age: 25,
    marks: {
        eng: 67,
        math: 56,
        bangla: 80
    }
};

const result2 = student['marks']['eng'];

console.log(result2);