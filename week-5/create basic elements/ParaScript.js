// JavaScript Document
"use strict";
function create() {
//	A Paragraph is an element, so we use the createElement method to create it
    var x = document.createElement('p');
//	We now want to add text to, and style the paragrpah
    var paragraphText = document.createTextNode("Dynamically Created Paragraph");
//	We now need to associate the piece of text with the paragraph we have created
    x.appendChild(paragraphText);
//	Style the paragraph
    stylepara(x);
//	Add an image to the paragraph
    addimage(x);
//	Add another paragraph to our existing paragraph
    addanotherpara(x);
//	This will still not display on the page as we need to append the paragraph to 
//	an existing page element, or the page itself.
    document.body.appendChild(x);
}

function stylepara(para) {
//	There are a number of ways to style elements, one is to simply
//	apply styles
    para.style.backgroundColor = "orange";
    para.style.fontFamily = "calibri";
    para.style.fontSize = "32px";
    para.style.color = "red";
    return (true);
}

function addimage(para) {
    var y = document.createElement('img');
//	We can also style an image using setAttribute()
    y.setAttribute("src", "desert.jpg");
    y.setAttribute("width", "100px");
    y.setAttribute("height", "100px");
    y.style.border = "solid 6px";
    y.style.borderColor = "blue";
//	append the image to the paragraph
    para.appendChild(y);
    return (true);
}

function addanotherpara(para) {
    var y = document.createElement('p');
//	Don't worry about textContent for the moment	
    y.textContent = "An inner paragraph";
    para.appendChild(y);
    return (true);
}