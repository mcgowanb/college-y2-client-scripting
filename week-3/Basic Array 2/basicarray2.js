// JavaScript Document
"use strict";
function printarray() {
    var arr1 = ["joe", 23, true, 18.5];
    arr1[0] = "pat";
    arr1[5] = "Hello";

    for (var i = 0; i < arr1.length; i++) {
        document.getElementById('output').innerHTML += arr1[i] + "<br/>";
    }
}