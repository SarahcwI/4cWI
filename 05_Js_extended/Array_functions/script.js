const items = [
    { name: 'Bike', price: 100 },
    { name: 'TV', price: 200 },
    { name: 'Album', price: 10 },
    { name: 'Book', price: 5 },
    { name: 'Phone', price: 500 },
    { name: 'Computer', price: 1000 },
    { name: 'Keyboard', price: 25 }
];


//nur preise kleiner oder 9leic7 als 100
const filtered = items.filter((item) => {
    return item.price <= 100
})

console.log(filtered);

//alle items aber nur der Name 
const itemNames = items.map((item) => {
    return item.name
})

console.log(itemNames);


//nur das Item das true ansc7lae9t
const foundItem = items.find((item) => {
    return item.name === 'Book'
})

console.log(foundItem);

//gibt den namen aller Elemte aus/for loop aber fancy 
// items.forEach((item) => {
//     console.log(item.name);})


//wenn eines true ist wird einmal true ausgegeben
const inexpensive = items.some((item) => {
    return item.price <= 100
});

console.log(inexpensive);

//wenn alle true sind wird true ausgegeben
const expensive = items.every((item) => {
    return item.price <= 100
});

console.log(expensive);

//Mehrere Operationen werden zusammengeführt, 
// item wird in property(currentTotal) reduced
const total = items.reduce((currentTotal, item) => {
    return item.price + currentTotal
}, 0);

console.log(total);

//prüft ob etwas in7alten ist
const numbers = [1,2,3,4,5]

const includesTwo = numbers.includes(2)
console.log('i' + includesTwo);


