// JavaScript Document
"use strict";
function reduceImage(image){
    var width = image.getAttribute("width") / 2;
    var height = image.getAttribute("height") /2;
    image.setAttribute("width", width+"px");
    image.setAttribute("height", height+"px");
}

function changeFooter() {
    var footer = document.getElementById('footer');
    footer.setAttribute("style", "background: #C0C0C0");
    footer.style.fontSize = "18px";
}

function transformPara(){
    var link = document.getElementById("point-to-fb");
    link.setAttribute("href", "http://www.facebook.com");
    
    var p1 = document.getElementById("par1");

    p1.style.fontSize = "40px";
}

function readMore(){
    var images = document.getElementsByTagName("img");
    images[8].style.border = "5px green dashed";
    images[8].setAttribute("width", "50px");
}

function blurImage(image){
    image.style.filter = "contrast(200%)";
    var otherImage = document.getElementById("image-3");
    otherImage.style.filter = "blur(5px)";
}

function logoClick(){
    var p = document.getElementById("middle-p");
    p.style.textAlign = "right";
    p.style.boxShadow = "5px 5px 5px grey";
    p.style.cursor = "crosshair";
    p.style.textShadow = "5px 5px 1px #ff0000";
    p.style.wordWrap = "break-word";
}

function makeLoadChanges(){
    var paras = document.getElementsByTagName("p");
    for(var i = 0; i < paras.length; i++){
        var div = document.createElement("div");
        div.setAttribute("width", "75px");
        div.setAttribute("height", "75px");
        div.style.backgroundColor = "cyan";

        var h = document.createElement("h3");
        h.innerHTML = "New header created";
        h.style.font = "Verdana";
        h.style.fontSize = "14px";
        h.color = "red";
        h.style.opacity = "75%";
        div.appendChild(h);
    }

}