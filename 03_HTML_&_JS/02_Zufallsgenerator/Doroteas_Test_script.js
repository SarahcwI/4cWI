let number = 0;

for(let i=7; i<344;i++){
    
    if(i%2==0){number += i}

    if(i%12==0){
        number += (2*i)
    }  
}

console.log(number);


let data = "Super Duper".split("");

for(let j=0; j<data.length; j++){
    if(data[j]=="u" || data[j]=="e"){
        data[j] = "x";
    }
}

let result = data.join("");
console.log(result);


let number2=100;
while(true){

    
    if(number2 != 50 && number2 != 40 && number2 != 30){
        console.log(number2);}

        number2--

        if(number2 == 25){
            break;
        }
}