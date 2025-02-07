

let data = [
    { firsname: "Peter", lastname: "John", points: 30 },
    { firsname: "josef", lastname: "bann", points: 40 },
    { firsname: "Matteo", lastname: "Uban", points: 20 },
    { firsname: "Stefanie", lastname: "Trautz", points: 69 },

];



function loadPeople() {
    let html = "";
    data.forEach(element => {
        html += "<div>" +element.firsname + " " + element.lastname + " " + element.points + "</div>"});
}