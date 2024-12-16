/* let a = 4;
let b = 9;
let c = 8;

let arr = [4,9,8];
console.log(arr[1]);
arr.push(3);

for (let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}
 */
let arr =[4,1,2,3];
arr.push(17,199);

for (let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

let result = 0;
for (let i = 0; i < arr.length; i++){
    result += arr[i];
}
console.log(result);

console.log(result/arr.length);


let arrN = ["Susi", "Paul", "John"];

console.log("Meine freunde sind: " + arrN);

arrN.push("Sepp");

console.log("Meine freunde sind: " + arrN);
