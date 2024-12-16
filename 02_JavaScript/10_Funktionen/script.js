/* // Funktionen

//Dry Dont repeat yourself

function printMenu(name, age){
    console.log("Wilkommen " + name + ": " + age);
    console.log("Drücke");
    console.log("1 Für Start");
    console.log("2 Für Statisk");
    console.log("3 Für ende");
    
}

printMenu("Peter", 17);


function add(a,b){
    return a + b;
}

console.log(add(4,7)); */



function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function mulitply(a, b) {
    return a * b;
}
function supercalculation(a, b) {
    return (a + b) / 2 * a;
}


console.log(add(4,7));
console.log(subtract(4,7));
console.log(mulitply(4,7));
console.log(supercalculation(4,7));


function printEasterDate(year) {
    let N = year - 1900;
    let A = N%19;
    let B =Math.floor((7*A+1)/19)
    let M =(11*A+4-B)%29;
    let Q = Math.floor(N/4);
    let W = (N+Q+31-M)%7;
    let P = (25-M-W);

    console.log(P);
    if (P > 0) {
        return "Ostersonntag ist der " + P + ". April";
    } else{
        return "Ostersonntag ist der " + (P + 31) + ". März";
    }

}


console.log(printEasterDate(2024));



