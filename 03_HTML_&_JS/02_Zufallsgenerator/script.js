function generate(){
    let field1= document.getElementById("field1").value;
    let field2= document.getElementById("field2").value;

    let amountOfRandos = parseInt(field2) - parseInt(field1) + 1
    let randomNumber = Math.floor(Math.random() * amountOfRandos) + parseInt(field1); 

    console.log(randomNumber);

    document.getElementById("randomNumber").innerHTML = randomNumber; 
}