// JavaScript Document
"use strict";

function process(operator) {

    var number1 = 0;
    var number2 = 0;
    var number3 = 0
    var number4 = 0
    var answer = 0;

    //Need to use selectedIndex + 1 as the selected index value starts at index 0, and we need to increment it by one as the 
    // numbers start at one and not zero
    number1 = document.getElementById('num1').selectedIndex + 1;
    number2 = document.getElementById('num2').selectedIndex + 1;
    number3 = document.getElementById('num3').selectedIndex + 1;
    number4 = document.getElementById('num4').selectedIndex + 1;

    answer = domath(operator, number1, number2, number3, number4);
    displayresult(answer);
}


function domath(op, n1, n2, n3, n4) {
    switch (op) {
        case "+":
            return (n1 + n2 + n3 + n4);
            break;
        case "-":
            return (n1 - n2 - n3 - n4);
            break;
        case "/":
            return (n1 / n2 / n3 / n4);
            break;
        case "*":
            return (n1 * n2 * n3 * n4);
            break;
    }
}

function displayresult(ans) {
    document.getElementById('answer').innerHTML = "The Answer is " + ans;
    return (null);
}