

document.getElementById("buttonLoad").addEventListener("click", function () {
loadData();
});

function loadData() {
    fetch("https://5e391b0baad2220014962337.mockapi.io/swp/todos")
        .then((response) => response.json())
        .then((json) => {
            console.log(json)
        })
}

