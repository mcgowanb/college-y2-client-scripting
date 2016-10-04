// JavaScript Document
"use strict";
function changeparas()
{
	var x = document.getElementsByTagName('p');
	console.log(x);
	alert(x.length);
	//Make 2 changes to each of the 6 paragraphs - ideally each change should be unrelated to the other
	//Replace the generic logo with an image
	x[0].style.backgroundColor="red";
	x[0].style.opacity="0.25";
	x[0].setAttribute("draggable", "true");
	x[1].style.fontSize="32px";
	x[1].style.border="5px dotted";
	x[2].style.transform="rotate(25deg)";
	x[2].setAttribute("contenteditable", "true");
}

function changefooter()
{
	//Make two changes to the footer
	alert("Here");
}

//Make 5 other changes of your own choice - you may need to add id's to some elements in the HTML file.