 // Erstelle eine Zufallszahl zwischen 5 und 10

// Wenn der Wert 10 ist gib aus Ten
// Wenn der Wert 9 ist gib aus Nine
// Wenn der Wert 8 ist gib aus Eight
// etc.
let random = Math.floor(Math.random()*5 +5 );
console.log(random);

switch(random) {

    case 10: 
        console.log ("Ten");
        break;
    case 9:
        console.log ("Nine");
        break;
    case 8:
        console.log ("Eight");
        break;
    case 7:
        console.log ("Seven");
        break;
    case 6:
        console.log ("Six");
        break;
    case 5:
        console.log ("Five");
}