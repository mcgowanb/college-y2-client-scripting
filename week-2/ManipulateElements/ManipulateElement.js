// JavaScript Document
"use strict";
//This function gets called when we double click on the textbox
function changeTextbox()
{
	//NOTE: We are not getting the contents of teh textbox, we are getting the textbox itself!
	var x = document.getElementById('txt1');
	//We can use the setAttribute method to alter the textbox attributes.
	//This will overwrite existing attributes if we have previous values
	x.setAttribute("value", "can no longer be used");
	x.setAttribute("disabled", "true");
	//When altering stlyes, it is generally not a good idea to use
	//setAttribute - use the following approach instead
	x.style.height="300px";
	x.style.width="150px";
}


//This function gets called when we move the mouse away from the button
function changeButton()
{
	var x = document.getElementById('btn1');
	x.setAttribute("type", "image");
	x.setAttribute("src","http://itsligo.ie/files/2015/03/Eclipse-Sligo1-e1427106151825.jpg");
	//Again, don't use setAttribute for styling changes
	x.style.border = "dashed";
	x.style.transform="rotate(45deg)";
}