/* if((4 > 7) && (3<4)){
    console.log("Is true");
}

if((4 > 7) || (3<4)){
    console.log("Is true");
} */

// Erstelle zwei Zufallszahl zwischen 0 und 100
let random = Math.random() * 100;
let random2 = Math.random() * 100;
console.log(random, +" "+ random2);

// Speichere diese jeweils in einer Variable

// Wenn die erste Zahl kleiner ist als die zweite UND die erste Zahl kleiner ist als 50

if(random < random2 && random < 50){
    console.log("Zahl 1 ist kleiner als Zahl 2 und Mini");
}
// dann gib aus "Zahl 1 ist kleiner als Zahl 2 und Mini"

if(random <30 ||random2 <30){
    console.log("Eine der beiden ist kleiner als 30");
}

// Wenn die erste Zahl kleiner ist als 30 oder die zweite Zahl kleiner ist als 30
// dann gib aus "Eine der beiden ist kleiner als 30"


if(random <50 && random2 != 30){
    console.log("Erste Zahl klein, zweite kein 50iger");
}
// Wenn die erste Zahl kleiner ist als 50 UND die zweite Zahl ungleich 50 ist
// dann gib aus "Erste Zahl klein, zweite kein 50iger"
