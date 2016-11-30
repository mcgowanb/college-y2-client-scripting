// Create a variable to hold a random number between 1 and 10
var randomNum = Math.floor((Math.random() * 10) + 1);

var x = Math.pow(randomNum, 3);
var y = Math.sqrt(randomNum);
var z = Math.tan(randomNum);

// Create a variable called el to hold the element whose id attribute has a value of info
var el = document.getElementById('info');
// Write the number into that element
el.innerHTML = '<h2>random number</h2><p>' + randomNum + '</p><h2>Powers (' + randomNum + '^3)</h2><p>' + x + '</p><h2>Square Root (' + randomNum + ')</h2><p>' + y + '</p><h2>Tan (' + randomNum + ')</h2><p>' + z + '</p>';