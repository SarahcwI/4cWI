let todos = [
    {id: 1, title: "putzen", isDone: false},
    {id: 2, title: "Aufgaben", isDone: false},
    {id: 3, title: "Essen", isDone: false},
]


let html = "";

todos.forEach(element => {
    html+="<div>" + element.title + " - " + element.isDone + "</div>"; 
});

document.getElementById("todos").innerHTML = html;