// JavaScript Document
"use strict";

function changeLinks() {
    //When the logo is clicked, change the link colour and background colour
    var x = document.getElementsByTagName('a');
    for (var i = 0; i < x.length; i++) {
        x[i].setAttribute("style", "background-color: cyan; color: red");
    }
}

function reduceImage() {
    //When the first image is mouseover, add a border and reduce the opacity
    var x = document.getElementById('img1');
    x.style.opacity = "0.25";
    x.style.border = "5px dashed";
}

function flipImage() {
    //When the second button is clicked, rotate it 180 degrees
    var x = document.getElementById('img2');
    x.style.transform = "rotate(180deg)";
}

//1. When the third image is clicked, set any two other styles OR change any 2 other attributes pertaining to the image
function adjustImage(image) {
    image.style.border = "5px dashed";
    image.setAttribute("src", "Desert.jpg");
}
//2. When text is entered into the textbox, make its colour red and make the text uppercase on the mouseout.
function setTextToUpper(element) {
    var text = element.value;
    element.value = text.toUpperCase();
}
function changeTextColor(elem) {
    elem.value = "";
    elem.style.color = "red";
}


//3. When the first "TEXT LINK" is clicked, bring the user to itsligo.ie
function goToItSligo() {
    window.location = "https://itsligo.ie";
}

//4. When the second "TEXT LINK" is clicked, make 2 changes to the footer
function changeFooter() {
    var footer = document.getElementById('footer');
    footer.setAttribute("style", "background: #C0C0C0");
    footer.style.fontSize = "18px";
    footer.parentNode.setAttribute("style", "background: #C0C0C0");
}


//5. When the "About Us" text is clicked, change the text to something else, and apply 2 styles. Use getElementsByClassName
function changeAboutUs() {
    var elements = document.getElementsByClassName('title');
    elements[2].innerHTML = "Something Else";
    elements[2].style.fontStyle = "normal";
    elements[2].setAttribute("style", "border: 1px solid black");
}

//6. When the footer is double clicked, make sure all href attributes for <a> elements point to facebook.com
function changeRefsToFacebook() {
    var elements = document.getElementsByTagName('a');
    for (var i = 0; i < elements.length; i++) {
        elements[i].setAttribute('href', 'http://www.facebook.com');
    }
}

//7. When the 'Submit' button is clicked, change its background colour
//(NOTE: DEPENDING ON HOW YOU APPROACH THIS, YOU MAY ONLY BE ABLE TO VERIFY IT WORKS BY USING F11 IN CHROME DEV TOOLS)
function changeBackgroundColor() {
    var btn = document.getElementById('sf_submit');
    btn.style.background = "magenta";
}

//8. When the 'Lorum ipsum dolor' header is clicked, make 3 style changes to the paragraph just below it. Also append a new paragraph to the header (with text 'New Paragraph, font size 72).
function changeParagraph() {
    var paragraph = document.getElementById('p1');
    paragraph.style.fontSize = "24px";
    paragraph.style.fontStyle = "italic";
    paragraph.style.color = "green";

    var newPara = document.createElement('p');
    newPara.innerHTML = "New Paragraph";
    newPara.style.fontSize = "72px";
    var header = document.getElementById("head-1");
    header.appendChild(newPara);
}

