
const numbers = [2, 46, 10, 6, 20, 25, 60, 100];

const bigNumber = numbers.filter(number => number > 20);

console.log(bigNumber);

const smallNumber = numbers.filter(n => n < 20);

console.log(smallNumber);

const dividedBy2 = numbers.filter(num => num % 2 == 0);

console.log(dividedBy2);


const products = [

    { name: 'mobile', price: 1000 },
    { name: 'laptop', price: 11000 },
    { name: 'watch', price: 2000 },
    { name: 'bike', price: 111000 },
];

const list = products.filter(p => p.price < 3000);

const find = products.find(p => p.price < 3000);
console.log(list);
console.log(find);