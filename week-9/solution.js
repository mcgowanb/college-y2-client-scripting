setUpListeners();


function setUpListeners() {
    document.getElementById("page").addEventListener("mouseover", alterNavigation, false);
    document.getElementsByClassName("contentText")[0].addEventListener("click", changeText, false);
    document.getElementById("mainPicture").addEventListener("click", alterPara, false);
}


function alterNavigation() {
    document.getElementsByClassName("topNaviagationLink")[0].style.backgroundColor = "#ff0000";
    document.getElementsByClassName("topNaviagationLink")[2].style.backgroundColor = "magenta";
}

function changeText() {

    try {
        var div = document.getElementsByClassName("contentText")[0];
        div.parentNode.removeChild(div);
        var table = document.createElement("table");
        var body = document.createElement("tbody");

        for (var i = 0; i < 2; i++) {
            var row = document.createElement("tr");

            for (var x = 0; x < 2; x++) {
                var cell = document.createElement("td");
                cell.appendChild(document.createTextNode("row " + i + " and cell text " + x));
                row.appendChild(cell);
            }

            body.appendChild(row);
        }

        table.appendChild(body);
        styleTable(table);
        var content = document.getElementsByClassName("innerBox")[0];
        content.insertBefore(table, content.childNodes[0]);
    }
    catch (err) {
        alert(err.message);
    }


}

function styleTable(table) {
    table.setAttribute("style", "border: 3px solid green; width: 100%; text-align: left; font-size:2em; font-weight:bolder");
}

function alterPara() {
    var paragraph = document.querySelectorAll(".contentText > p")[0];
    paragraph.setAttribute("style", "font-size: 2em; font-style: oblique; transform: rotate(-1deg)");

    var links = document.querySelectorAll("#page a");
    for (var i = 0; i < links.length; i++) {
        links[i].setAttribute("href", "https://itsligo.ie");
    }

    document.querySelector(".innerBox > h1").setAttribute("style", "background-color: grey");

    var browser = "Browser name is " + navigator.appName + " and version is " + navigator.appVersion;
    alert(browser);
}