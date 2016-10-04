"use strict";
var num1=0;
var num2=0;
var result;


function loadNumbers(){
	num1 = parseFloat(document.getElementById('txt1').value);
	num2 = parseFloat(document.getElementById('txt2').value);
	result = document.getElementById('result');
	}
	
function add()
{        
loadNumbers();
var total = (num1+num2);
result.setAttribute('value', total);      
}

function subtract(){
loadNumbers();
var total = (num1-num2);
result.setAttribute('value', total);               
}

function multiply(){
loadNumbers();
var total = (num1*num2);
result.setAttribute('value', total);               
}

function divide(){
loadNumbers();
var total = (num1/num2);
result.setAttribute('value', total);               
}


        