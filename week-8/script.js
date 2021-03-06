// JavaScript Document
"use strict";
setUpListeners();

function setUpListeners()
{
	//Set up our event listeners and the code we want to execute when
	//these events are activated
	var x = document.getElementById('btn1');
	//Notice we don't use onclick, we use click
	//Ignore the false parameter for now (but always use it)
	x.addEventListener("click", function1, false);
	x.addEventListener("click", function2, false);
	x.addEventListener("mouseout", function1, false);
}

function function1()
{
	alert("I am function 1");	
	//We can determine the event which caused the function to be called
	alert("The event which activated me is " + event.type);
}

function function2()
{
	alert("I am function 2");	
}