function reOrder(action) {

    var numbers = [];
    for (var i = 0; i < 10; i++) {
        numbers[i] = parseInt(document.getElementById("num-" + (i + 1)).value);
    }
    if (action == "asc") {
        numbers.sort(function (a, b) {
            return a - b
        });
    }
    else {
        numbers.sort(function (a, b) {
            return b - a
        })
    }
    printNumbers(numbers)
}

function printNumbers(nums) {
    var paragraph = document.getElementById("par");
    for (var i = 0; i < nums.length; i++) {
        paragraph.innerHTML += nums[i] + "<br />";
    }
}
