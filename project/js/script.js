initListeners();
var imageCounter = 1;

var directionsService, directionsDisplay, directionsResult, map, waypts = [], startingLocation, endLocation, infoWindow;

var ordinatesList = [
    new LatLng(40.7484, -73.9857, "Empire State Building", "The Empire State Building is a 102-story skyscraper located on Fifth Avenue between West 33rd and 34th Streets in Midtown, Manhattan, New York City. <a href='https://en.wikipedia.org/wiki/Empire_State_Building' target='_blank'> Wikipedia</a>"),
    new LatLng(40.7527, -73.9772, "Grand Central Terminal", "Grand Central Terminal is a commuter, rapid transit railroad terminal at 42nd Street and Park Avenue in Midtown Manhattan in New York City, United States. <a href='https://en.wikipedia.org/wiki/Grand_Central_Terminal' target='_blank'> Wikipedia</a>"),
    new LatLng(40.7116, -74.0132, "World Trade Center Memorial", "The National September 11 Memorial & Museum are the principal memorial and museum, respectively. They commemorate the September 11, 2001 attacks, which killed 2,977 victims, and the World Trade Center bombing of 1993, which killed six. <a href='https://en.wikipedia.org/wiki/National_September_11_Memorial_%26_Museum' target='_blank'> Wikipedia</a>"),
    new LatLng(40.7587, -73.9787, "The RockeFeller Center", "Rockefeller Center is a large complex consisting of 19 highrise commercial buildings covering 22 acres between 48th and 51st Streets in New York City. <a href='https://en.wikipedia.org/wiki/Rockefeller_Center' target='_blank'> Wikipedia</a>"),
    new LatLng(40.7831, -73.9592, "Solomon Guggenheim Museum", "The Solomon R. Guggenheim Museum, often referred to as The Guggenheim, is an art museum located at 1071 Fifth Avenue on the corner of East 89th Street in the Upper East Side neighborhood of Manhattan, New York City <a href='https://en.wikipedia.org/wiki/Solomon_R._Guggenheim_Museum' target='_blank'> Wikipedia</a>"),
    new LatLng(40.7599, -73.9803, "Radio City Music Hall", "Radio City Music Hall is an entertainment venue located in Rockefeller Center in New York City. Its nickname is the Showplace of the Nation, and it was for a time the leading tourist destination in the city. <a href='https://en.wikipedia.org/wiki/Radio_City_Music_Hall' target='_blank'> Wikipedia</a>"),
    new LatLng(40.7644, -73.9993, "Intrepid Sea Air & Space Museum", "The Intrepid Sea, Air & Space Museum is an American military and maritime history museum with a collection of museum ships in New York City. It is located at Pier 86 at 46th Street in the Hell's Kitchen neighborhood on the West Side of Manhattan. <a href='https://en.wikipedia.org/wiki/Intrepid_Sea,_Air_%26_Space_Museum' target='_blank'> Wikipedia</a>")
];

//lat lng object
function LatLng(lat, lng, name, details) {
    this.lat = lat;
    this.lng = lng;
    this.name = name;
    this.details = details;
}

function initListeners() {
    document.getElementById("part-a").addEventListener("click", partA, false);
    document.getElementById("part-b").addEventListener("click", partB, false);
    document.getElementById("reset").addEventListener("click", reloadPage, false);
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
    for (var x = 0; x < menuButtons.length; x++) {
        menuButtons[x].style.fontFamily = "Bevan,cursive";
        menuButtons[x].style.paddingTop = "7px";
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
            headers[i].setAttribute("style", "text-shadow: 11px 6px 5px rgba(0, 0, 0, 1); font-family:Bevan, cursive");
        }
    }
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


function partB() {
    document.getElementById("part-a").className = "";
    document.getElementById("part-b").className = "current";
    fadeOut("main");
    generateMainBodyContent();
    createMap();
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
    btn.setAttribute("style", "float:right");
    btn.innerHTML = "Beginulate";

    headerCol.innerHTML = "<h3 style='font-family:Bevan, cursive'>Welcome to the map planner. We have pre planned a route for you to see some sights. Please click the button to see where you're off to.....</h3>";
    headerCol.appendChild(btn);
    headerRow.appendChild(headerCol);

    var resultRow = document.createElement("div");
    resultRow.setAttribute("class", "row");
    resultRow.setAttribute("style", "margin-top: 20px");

    var durationCol = document.createElement("div");
    durationCol.setAttribute("class", "col-xs-8 col-xs-offset-2");
    durationCol.setAttribute("id", "duration");

    var distanceCol = document.createElement("div");
    distanceCol.setAttribute("class", "col-xs-8 col-xs-offset-2");
    distanceCol.setAttribute("id", "distance");

    resultRow.appendChild(durationCol);
    resultRow.appendChild(distanceCol);

    var mapRow = document.createElement("div");
    mapRow.setAttribute("class", "row");

    var mapDiv = document.createElement("div");
    mapDiv.setAttribute("class", "col-xs-8 col-xs-offset-1");
    mapDiv.setAttribute("id", "map");

    var directionsDiv = document.createElement("div");
    directionsDiv.setAttribute("class", "col-xs-2");
    directionsDiv.setAttribute("id", "directions");

    mapRow.appendChild(mapDiv);
    mapRow.appendChild(directionsDiv);
    document.getElementById("body").appendChild(headerRow).appendChild(resultRow).appendChild(mapRow);

    document.getElementById("add-route").addEventListener("click", startRoute, false);
}

//initialise the map on the page
function createMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.MAP,
        center: {lat: 40.7624, lng: -73.9738}
    });
    //trump tower
    startingLocation = endLocation = new google.maps.LatLng(40.7625, -73.9738);

    //adding direction service to the map
    directionsService = new google.maps.DirectionsService();
    directionsDisplay = new google.maps.DirectionsRenderer();
    directionsDisplay.setMap(map);
    directionsDisplay.setPanel(document.getElementById("directions"));
    infoWindow = new google.maps.InfoWindow({map: map});
}

function startRoute() {
    updateRoute();
    addWayPoint();
}


function updateRoute() {
    directionsService.route({
        origin: startingLocation,
        destination: endLocation,
        waypoints: waypts,
        optimizeWaypoints: true,
        travelMode: google.maps.TravelMode.DRIVING
    }, function (response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            directionsResult = response;
            directionsDisplay.setDirections(response);
        } else {
            window.alert("Directions request failed due to " + status);
        }
    });
}
function addWayPoint() {
    if (ordinatesList.length > 0) {
        var l = new google.maps.LatLng(ordinatesList[0].lat, ordinatesList[0].lng);
        var marker = createMarker(l, ordinatesList[0].name, "http://www.google.com/mapfiles/arrow.png");
        marker.addListener("click", function () {
            infowindow.open(map, marker);
        });
        var infowindow = new google.maps.InfoWindow({
            content: ordinatesList[0].details
        });
        waypts.push(
            {
                location: l,
                stopover: false
            }
        );
        ordinatesList.shift();
        updateRoute();

        var totalDistance = 0;
        var totalDuration = 0;
        if (directionsResult != null) {
            var legs = directionsResult.routes[0].legs;
            for (var i = 0; i < legs.length; ++i) {
                totalDistance += (legs[0].distance.value) / 1000;
                totalDuration += legs[0].duration.value;
            }
            document.getElementById("distance").innerHTML = "<p class='summary'>Total Distance: " + Math.round(totalDistance) + "km (approx)</p>";
            document.getElementById("duration").innerHTML = "<p class='summary'>Total Time: " + convertSecondsToTime(totalDuration) + "</p>";
        }
        setTimeout(addWayPoint, 1000);
    }

    function convertSecondsToTime(seconds) {
        var h = parseInt(seconds / 3600) % 24;
        var m = parseInt(seconds / 60) % 60;
        return (h < 10 ? "0" + h : h) + " hours " + (m < 10 ? "0" + m : m) + " minutes";
    }
}

function createMarker(latLng, label, url) {
    return new google.maps.Marker({
        position: latLng,
        map: map,
        icon: url,
        title: label
    });
}
