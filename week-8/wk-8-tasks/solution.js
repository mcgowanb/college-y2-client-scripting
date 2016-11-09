// JavaScript Document
"use strict";
addEventListeners();

//When dealing with event listeners, put the <script> element as the last part of the <body>
function addEventListeners()
{
	//This structure will be fine for almost all scenarios
	document.getElementById('img1').addEventListener("click", reduceSize, false);
	//Add event listeners for the rest of the questions (Q's 3, 4, 5, 6, 7)
	//and make sure that in the HTML file you remove all JavaScript function calls
}

//createDiv was originally called from the body load, but if we call it from within our JS file it will execute immediately.
createDiv();
//1. 25 Marks
//When the body has finished loading call a function such that for ALL paragraphs on the page:
//- A new <div> is created for each paragraph
//- Each div is 75px * 75px, has a background colour of cyan, has an opacity of 75%
//- Each div contains a new <h3> which displays the text "New header created" with a font of Verdana, size 14px and a font colour of red
function createDiv()
{
	var x = document.getElementsByTagName('p');
	for (var i=0; i<x.length; i++)
	{
		var par = document.createElement('div');
		par.setAttribute("style", "background-color: cyan; width: 75px; height: 75px; opacity: 0.75");
		var hdr = document.createElement('h3');
		hdr.setAttribute("style", "font: verdana; font-size: 14px; color: red");
		hdr.innerHTML="New header Created";
		par.appendChild(hdr);
		x[i].appendChild(par);
	}
}

//2. 8 Marks
//When the mouse is clicked on the left image, reduce the image size by 50%

function reduceSize()
{
	var x = document.getElementById('img1');
	var width=x.width;
	var height=x.height;
	x.setAttribute("width", width/2);
	x.setAttribute("height", height/2);
}

//3. 6 Marks
//When the mouse is moved away from the footer, make 2 visible changes to the footer

function changeFooter()
{
	var x = document.getElementById('footer');
	x.setAttribute("style", "background-color: red; opacity: 0.5");
}

//4. 8 Marks
//When the first "Text Link" is clicked use a CSS3 transform to double the size of the first paragraph and point the second "Text Link" link to Facebook
function moveLink()
{
	var x  = document.getElementById('link2');
	x.setAttribute("href", "http://www.facebook.com");
	var y = document.getElementById('mainpar');
	y.style.transform = "scale(2,2)";
}

//5. 8 Marks
//When the first "Read More" link is clicked make any 2 style changes to the 9th image on the page. You are PROHIBITED from using getElementById

function changeImage()
{
	var x = document.getElementsByTagName('img');
	x[8].style.border="dashed 5px";
	x[8].style.width="100px";
}

//6. 8 Marks
// When the rightmost image is clicked (215 X 150px) use a CSS3 filter to increase the contrast of the image. Also blur the image to the left.
function alterImage()
{
	var x = document.getElementById('img4');
	var y = document.getElementById("img3");
	y.style.filter="blur(100px)";
	x.style.filter="contrast(200%)";
}

//7. 7 Marks
//When the logo is clicked, make 5 visible changes to any one of the paragraphs. You are PROHIBITED from using innerHTML, font (or any variation, e.g. font-size), background-color, opacity, height, width, border, filter and transform.

function make5Changes()
{
	var x = document.getElementById('mainpar');
	x.style.textAlign="right";
	x.style.outlineStyle="dotted";
	x.style.outlineColor="red";
	x.style.letterSpacing="5px";
	x.style.paddingBottom="5cm";
}
