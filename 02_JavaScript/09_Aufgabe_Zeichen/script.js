/* let a = 8;
let b = 2;


if (a % 8 == 0) {
    console.log("Nubmer is even")
}
else {
    console.log("Nubmer is odd")
}

a = 1999;
b = 2;

for (let i = 1; i < 50; i++) {
    console.log("x")

    if (i % 5 == 0) {
        console.log("")
    }
} */


    
let str = "ab"
let asciVals = [];
let sumOfAsci = 0;

for (let i = 0; i < str.length; i++) {
    asciVals.push(str.charCodeAt(i))

    if(asciVals[i]%2==0){
        sumOfAsci += asciVals[i]*2
    }
    else{
        sumOfAsci += asciVals[i]
    }
}
console.log(asciVals);

console.log(sumOfAsci);





/* 
You have to print the sum of the ASCII values of the characters in the string str.
A character with an even ASCII value will be counted twice.
Input
A string str containing printable characters of the ASCII table
Output
The sum of the ASCII values with even values counted twice.
Constraints
1 ≤ length(str) ≤ 255
Example
Input
ab
Output
293 */