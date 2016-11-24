initListeners();
var imageCounter = 1;

var directionsService, directionsDisplay, map, waypts = [], startingLocation, endLocation;
// var ordinatesList = [
//     new google.maps.LatLng(54.1803, -8.4988),
//     new google.maps.LatLng(54.0552, -8.7298),
//     new google.maps.LatLng(53.9640, -8.7926)
// ];

var ordinatesList = [
    new LatLng(54.1803, -8.4988),
    new LatLng(54.2495, -8.8799),
    new LatLng(54.1149, -9.1551),
    new LatLng(54.1446, -9.7429),
    new LatLng(53.9062, -9.7814),
    new LatLng(53.8021, -9.5143),
    new LatLng(53.4891, -10.0202)
    // {lat: 54.1803, lng: -8.4988},
    // {lat: 54.0552, lng: -8.7298},
    // {lat: 53.9640, lng: -8.7926}
];

function LatLng(lat, lng){
    this.lat = lat;
    this.lng = lng;
}
function initListeners() {
    document.getElementById('part-a').addEventListener("click", partA, false);
    document.getElementById('part-b').addEventListener("click", partB, false);
    document.getElementById('reset').addEventListener("click", reloadPage, false);
}

function reloadPage() {
    window.location.reload();
}


function partA() {
    document.getElementById("part-b").className = "";
    document.getElementById("part-a").className = "current";
    document.getElementById("skyline").setAttribute("src", "images/skyline.jpg");
    document.getElementById("body").setAttribute("style", "background-image: url('images/nyc_large.png'); background-position: 0 -14%;background-repeat: no-repeat;");
    changeSliderImages();
    changeFontType();
    setInterval(changeSliderImages, 4000);
    changeButtonStyles();
    changeHeader();
    movePageContent();
    changeColours();
}


function changeColours() {
    document.getElementById("strapline").setAttribute("style", "background: -webkit-linear-gradient(#F7B731, #676767); border-radius:0");
    document.querySelector("#menubar").setAttribute("style", "background: -webkit-linear-gradient(#F7B731, #676767); border-radius:0");
    document.getElementById("footer").setAttribute("style", "background: -webkit-linear-gradient(#F7B731, #676767); border-radius:0");
}

function movePageContent() {
    document.getElementById("sidebar").style.float = "left";
    document.getElementById("content").style.float = "right";
    document.getElementById("slideshow").setAttribute("style", "float:right; margin-left:0; margin-right:20px");
}

function changeHeader() {
    var header = document.getElementById("header");
    header.style.backgroundImage = "url(images/header-colour.png)";
}

function changeButtonStyles() {
    var actualButtons = document.querySelectorAll(".read-more");
    for (var i = 0; i < actualButtons.length; i++) {
        actualButtons[i].parentNode.className = "basic";
        actualButtons[i].className = "btn btn-xs btn-primary";
        actualButtons[i].style.fontFamily = "Roboto,Charcoal,sans-serif";
    }

    var menuButtons = document.querySelectorAll("#nav li a");
    for (var i = 0; i < menuButtons.length; i++) {
        menuButtons[i].style.fontFamily = "Bevan,cursive";
        menuButtons[i].style.paddingTop = "7px";
    }
}
function changeFontType() {
    var tagList = ["h1", "h2", "h3"];
    tagList.forEach(changeFontTypeForElements);
}

function changeFontTypeForElements(item) {
    var headers = document.getElementsByTagName(item);
    for (var i = 0; i < headers.length; i++) {
        headers[i].style.fontFamily = "Bevan,cursive";
        if (item == "h3") {
            headers[i].setAttribute("style", "text-shadow: 11px 6px 5px rgba(0, 0, 0, 1); font-family:Bevan, cursive")
        }
    }
}

function partB() {
    document.getElementById("part-a").className = "";
    document.getElementById("part-b").className = "current";
    fadeOut("main");
    createPartBContent();
}

function changeSliderImages() {
    var img = document.getElementById("slider");
    img.style.opacity = '0.0';
    img.style.borderRadius = "0";
    img.setAttribute("src", "images/slider-" + imageCounter + ".jpg");
    fadeIn("slider");
    imageCounter++;
    if (imageCounter == 5) imageCounter = 1;
}


function fadeIn(id, val) {
    if (isNaN(val)) val = 0;
    document.getElementById(id).style.opacity = '0.' + val;
    if (val < 9) {
        val++;
        setTimeout('fadeIn("' + id + '",' + val + ')', 90);
    }
}

function fadeOut(id, val) {
    if (isNaN(val)) {
        val = 9;
    }
    var main = document.getElementById(id);
    main.style.opacity = '0.' + val;
    if (val > 0) {
        val--;
        setTimeout('fadeOut("' + id + '",' + val + ')', 50);
    } else if (val === 0) {
        main.parentNode.removeChild(main);
    }
}

function createPartBContent() {
    generateMainBodyContent();

    initMap();
}

function generateMainBodyContent() {
    var headerRow = document.createElement("div");
    headerRow.setAttribute("class", "row");
    headerRow.setAttribute("style", "margin-top: 20px");

    var headerCol = document.createElement("div");
    headerCol.setAttribute("class", "col-xs-8 col-xs-offset-2");
    var btn = document.createElement("button");
    btn.setAttribute("class", "btn btn-xs btn-primary");
    btn.setAttribute("id", "add-route");
    btn.innerHTML = "Continue";

    headerCol.innerHTML = "<h3 style='font-family:Bevan, cursive'>Welcome to the map planner. We have pre planned a route for you today. Please click continue to generate your route</h3>";
    headerCol.appendChild(btn);
    headerRow.appendChild(headerCol);

    var mapRow = document.createElement("div");
    mapRow.setAttribute("class", "row");

    var mapDiv = document.createElement("div");
    mapDiv.setAttribute("class", "col-xs-4 col-xs-offset-2");
    mapDiv.setAttribute("id", "map");

    var directionsDiv = document.createElement("div");
    directionsDiv.setAttribute("class", "col-xs-4");
    directionsDiv.setAttribute("id", "panel");

    mapRow.appendChild(mapDiv);
    mapRow.appendChild(directionsDiv);
    document.getElementById("body").appendChild(headerRow).appendChild(mapRow);

    document.getElementById("add-route").addEventListener("click", addWayPoint, false);
}
function initMap() {
    directionsService = new google.maps.DirectionsService();
    directionsDisplay = new google.maps.DirectionsRenderer();
    var lat, lng;
    navigator.geolocation.getCurrentPosition(function (location) {
        lat = location.coords.latitude;
        lng = location.coords.longitude;
    });

    // location of it sligo
    startingLocation = endLocation = new google.maps.LatLng(54.2785534, -8.4622789);

    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 8,
        mapTypeId: google.maps.MapTypeId.ROADMAP

    });
    directionsDisplay.setMap(map);
    directionsDisplay.setPanel(document.getElementById('panel'));

    calculateAndDisplayRoute();
}

function calculateAndDisplayRoute() {
    directionsService.route({
        origin: startingLocation,
        destination: endLocation,
        waypoints: waypts,
        travelMode: google.maps.TravelMode.DRIVING
    }, function (response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
        } else {
            window.alert('Directions request failed due to ' + status);
        }
    });
}
function addWayPoint() {
    if (ordinatesList.length > 0) {
        var l = new google.maps.LatLng(ordinatesList[0].lat, ordinatesList[0].lng);
        waypts.push({location: l, stopover: true});
        ordinatesList.shift();
        calculateAndDisplayRoute();
        setTimeout(addWayPoint, 1000);
    }
}
