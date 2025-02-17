let todos = [
    { id: 1, title: "putzen", isDone: false },
    { id: 2, title: "Aufgaben", isDone: false },
    { id: 3, title: "Essen", isDone: false },
]


document.getElementById("input").addEventListener("change", function (event) {
    console.log(event.target.value);
});



function printTasks() {
    let html = "";

    todos.forEach(element => {
        html += "<div>" + element.title + " - " + element.isDone + "</div>";
    });

    document.getElementById("todos").innerHTML = html;

}

printTasks();
