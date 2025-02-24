document.getElementById("buttonLoad").addEventListener("click", function () {
    loadData();
});

function loadData() {
    fetch("https://5e391b0baad2220014962337.mockapi.io/swp/todos")
        .then((response) => response.json())
        .then((json) => {
            let html = [];

            json.forEach(todo => {
                html.push(
                    "<div></div>" +
                     todo.title + 
                     "<div><img width = '40px'src='" +
                      todo.image + "?id=" + Math.random() + 
                      "'/><div>-----</div></div>");
            });
            document.getElementById("content").innerHTML = html.join("");

        })
}

