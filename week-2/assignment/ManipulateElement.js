
"use strict";

function changeTextbox() {

    var x = document.getElementById('txt1');
    x.setAttribute("value", "can no longer be used");
    x.setAttribute("disabled", "true");
    x.setAttribute("type", "number");

    x.style.opacity = ".2";
    x.style.height = "300px";
    x.style.width = "150px";
}

function changeButton() {
    var x = document.getElementById('btn1');
    x.setAttribute("type", "image");
    x.setAttribute("src", "http://itsligo.ie/files/2015/03/Eclipse-Sligo1-e1427106151825.jpg");
    x.style.border = "dashed";
    x.style.transform = "rotate(45deg)";
}

function changeRadio(){
    var btn = document.getElementById('radio1');
    btn.setAttribute("type", "text");
    btn.setAttribute("placeholder", "placeholder text");

    btn.style.padding = "10px";
    btn.style.font = "italic bold 20px serif"
}