// JavaScript Document
"use strict";
var reverseStyle = "-webkit-transform:rotateY(180deg); -moz-transform:rotateY(180deg);-o-transform:rotateY(180deg);-ms-transform:rotateY(180deg);transform:rotateY(180deg);";
//Q1
function changeImage(image) {
    image.src = "seaside-001.jpg"
}

// Q2
function removeAndReplace(image) {
    image.parentNode.removeChild(image);
    var newImage = document.createElement("img");
    newImage.src = "rain.jpg";
    newImage.setAttribute("style", "width: 700px; height:300px;");
    newImage.setAttribute("class", "img-responsive img-rounded");
    newImage.setAttribute("id", "image-2");

    var middleArticle = document.getElementById("middle-ref");
    middleArticle.appendChild(newImage);
}

//Q3
function rotateImage() {
    var img = document.getElementById("image-2");
    if (img != null) {
        img.style.transform = "rotate(15deg)";
        img.style.border = "dashed blue 5px"
    }
}

//Q4
function removeFooter() {
    var d = document.getElementsByClassName("small-print");
    for (var i = 0; i < d.length; i++) {
        d[i].parentNode.removeChild(d[i]);
    }
}

//Q5
function procrastinate() {
    var footer = document.getElementById("footer");
    footer.setAttribute("style", "width: 80%; margin:0 auto");
}

//Q6
function unleash() {
    // remove the unleash div and add it in again, effectively swapping the last two around
    var u = document.getElementById("unleash");
    u.parentNode.removeChild(u);
    var parent = document.getElementById("footer-blurb-row");
    parent.appendChild(u);
}

//Q6
function synergise() {
    var glyph = document.getElementById("synergise-span");
    glyph.setAttribute("class", "glyphicon glyphicon-trash");
    var text = glyph.parentNode;
    text.setAttribute("style", reverseStyle);
    var nText = document.getElementById("synergise-p");
    nText.setAttribute("style", reverseStyle);
}

//Q7
function makeRandomChanges() {
    var menuIcon = document.getElementById("menu");
    if (menuIcon != null)
        menuIcon.parentNode.removeChild(menuIcon);

    var searchBox = document.getElementById("search");
    searchBox.setAttribute("value", "Default Text");

    var body = document.getElementById("body");
    body.setAttribute("style", "width: 80%; margin: 0 auto; border: 1px solid grey;");

    body.style.font = "Arial";

    var titles = document.getElementsByClassName("mText");
    for (var i = 0; i < titles.length; i++) {
        titles[i].setAttribute("style", reverseStyle);
    }

    var navBar = document.getElementById("mainNavBar");
    navBar.setAttribute("style", "width:80%; margin: 0 auto;")

}

//Q8
function randomColourChange() {
    //generate random hex colour
    var newColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    var back = document.getElementById("main-h-back");
    back.style.backgroundColor = newColor;
}