loadFootballData();


function loadFootballData() {
    fetch("https://api.openligadb.de/getbltable/bl1/2024")
        .then((response) => response.json())
        .then((json) => {
            console.log(json);

            let html = "<div>";

            for (let i = 0; i < json.length; i++) {
                html += `<div>${json[i].teamName}</div>`;
            }
            document.getElementById("table").innerHTML = html;

        })


}

