// JavaScript Document
"use strict";
function joinText() {
    //Declare an array x[]
    var x = [];
    for (var i = 0; i < 5; i++) {
        //We know we have 5 textboxes so populate the
        //array with the contents of each textbox - the array will have 5 elements
        x[i] = document.getElementById('txt' + (i + 1)).value;
    }
    //Pass the array as an argument to the function displayOutput
    displayOutput(x);
}

//function displayOutput - fullText is an array
function displayOutput(fullText) {
    //If our label has any data, clear it
    document.getElementById('output').innerHTML = "";
    //This function does not know how many elements the array has
    //so we can use the length property to determine how many elements are in the array
    for (var i = 0; i < fullText.length; i++) {
        //Append an element of the array to our label, which has an id of 'output'
        document.getElementById('output').innerHTML += fullText[i];
    }
}