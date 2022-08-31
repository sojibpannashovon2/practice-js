

const products = [

    { name: 'mobile', price: 1000 },
    { name: 'laptop', price: 11000 },
    { name: 'watch', price: 2000 },
    { name: 'bike', price: 111000 },
];

const result = products.map(product => product.name);

console.log(result);

console.log(products.map(p => p.price));


products.forEach(p => console.log(p.name));