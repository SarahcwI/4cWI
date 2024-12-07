 // Erstelle eine Variable banana mit dem Wert "Banane"
// Erstelle eine Variable apple mit dem Wert "Apple"
let banana = "Bananen";
let apple = "Apple"

// Erstelle eine Variable bananaPricePerKilo mit dem Wert 2.14
// Erstelle eine Variable applePricePerKilo mit dem Wert 3.43
let bananaPricePerKilo = 2.14;
let applePricePerKilo = 3.43;

// Ein Apfel hat durchschnittlich ein Gewicht von 0.34 Kilo
// Eine Banane hat durchschnittlich ein Gewicht von 0.22 Kilo
let bananaWeight = 0.34;
let appleWeight = 0.22;

// Gib folgendes aus: Anzahl Bananen/Äpfel pro Kilo, 
//Preis pro Banane/Apfel
let bananasPerKilo = 1/bananaWeight;
let pricePerBanan = bananaPricePerKilo * bananaWeight;
console.log("Ein Kilo Bananen sind " + bananasPerKilo + banana + "und eine banane kostet " + pricePerBanan);
console.log(pricePerBanan * bananasPerKilo);

let applesPerKilo = 1/appleWeight;
let pricePerApple =applePricePerKilo * appleWeight;
console.log("Ein Kilo Bananen sind " + applesPerKilo + apple + "und ein Apfel kostet " + pricePerApple);
console.log(pricePerApple * applesPerKilo);



// Preis von 8 Äpfeln
console.log("Preis von 8 apples " + pricePerApple * 8);

// Preis von 17 Bananen
console.log("Preis von 17 Bananen " + pricePerBanan * 17);

// Preis von 1 Tonne Äpfel
console.log("Preis von 1 Tonne apples " + applePricePerKilo * 1000);

// Preis von 1 Tonne Bananen
console.log("Preis von 1 Tonne banans " + bananaPricePerKilo * 1000);



