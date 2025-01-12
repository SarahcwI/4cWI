function add(){
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let result = parseFloat(num1) + parseFloat(num2);

    printResult.innerHTML = "Result = " + result  ;
}

function substract(){
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let result = parseFloat(num1) - parseFloat(num2);

    printResult.innerHTML = "Result = " + result  ;
}

function multiply(){
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let result = parseFloat(num1) * parseFloat(num2);

    printResult.innerHTML = "Result = " + result  ;
}

function divide(){
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let result = parseFloat(num1) / parseFloat(num2);

    printResult.innerHTML = "Result = " + result  ;
}

