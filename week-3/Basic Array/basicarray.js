"use strict";
function process() {
    var x = new Array();
    //Fill the array with values
    for (var i = 0; i < 10; i++) {
        x[i] = Math.random();
    }
    printarray(x);
}

function printarray(arr1) {
    for (var i = 0; i < 10; i++) {
        document.getElementById('output').innerHTML += "<br/>" + arr1[i];
    }
}