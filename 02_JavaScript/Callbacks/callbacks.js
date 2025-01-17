/*Aufgabe 1
Erstelle eine Funktion Decider. Decider erwartet 2 Argumente - eine Zahl und eine Callback-Funktion.
Wenn die Zahl > 100 ist, dann rufe die Callbackfunktion auf. Ansonsten nicht.
*/

console.log("---------------------------------Aufgabe 1 ---------------------------------------")
function decider(callback, number) {
    console.log("Its being decided")
  if(number > 100){
    callback();
  } 
}

function callbackFunc1() {
  console.log("Die Zal ist über 100"); 
}

decider(callbackFunc1, 103);

/*
Aufgabe 2
Die Funktion orderPizza nimmt den Namen der Pizza und einen Callback 
entgegen. Sie simuliert das Bestellen der Pizza.Wenn die Pizza fertig ist wird der Callback 
aufgerufen. Dem Callback wird ein zufälliger Preis mitgegeben. */

console.log("------------------------------------Aufgabe 2 ---------------------------------------")

function getRandomNumberInRange() {
    return Math.floor(Math.random() * (50 - 9 + 1)) + 9;
  }
  
 
function orderPizza(pizzaName, callback){
    console.log("Making order: " + pizzaName);
    console.log(pizzaName + " ready to deliver");
    callback(getRandomNumberInRange());
}

function callbackFunc2(price){
    console.log("Price is:" + price);
}

orderPizza("Pizza",callbackFunc2);