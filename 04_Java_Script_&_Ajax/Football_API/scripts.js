loadFootballData();


function loadFootballData() {
    fetch(`https://api.openligadb.de/getbltable/bl1/2024`)
        .then((response) => response.json())
        .then((json) => {
            console.log(json);

            let html = "<div id='table'>";

            for (let i = 0; i < json.length; i++) {
                html += `<div id="team" data-teamID="${json[i].teamInfoId}">${json[i].teamName}</div>`;
            }
            document.getElementById("table").innerHTML = html;
        })
}

document.getElementById("table").addEventListener("click", (event) => {
    let selectedTeamId = event.target.getAttribute("data-teamid");
    console.log("selectedTeamId", selectedTeamId);
    getNextMatchForTeam(selectedTeamId);
})



function getNextMatchForTeam(teamId) {
    fetch(`https://api.openligadb.de/getnextmatchbyleagueteam/4741/${teamId}`)
        .then((response) => response.json())
        .then((json) => {
            console.log(json);

            let html = "<div id='nextMatch'>";
            html += `<div>${json.matchDateTime}</div>`;

            html += `<div><img width = "40px"; src="${json.team1.teamIconUrl}"/>${json.team1.teamName} vs.  ${json.team2.teamName}<img width = "40px"; src="${json.team2.teamIconUrl}"/></div>`;
            html += "</div>";
            document.getElementById("nextMatch").innerHTML = html;     
        })
}

