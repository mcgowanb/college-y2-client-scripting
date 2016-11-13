initListeners();
var imageCounter = 1;

function initListeners() {
    document.getElementById('part-a').addEventListener("click", partA, false);
    document.getElementById('part-b').addEventListener("click", partB, false);
    document.getElementById('reset').addEventListener("click", reloadPage, false);
}

function reloadPage() {
    window.location.reload();
}

function partA() {
    document.getElementById("part-b").className = "";
    document.getElementById("part-a").className = "current";
    document.getElementById("skyline").setAttribute("src", "images/skyline.jpg");
    changeSliderImages();
    changeFontType();
    setInterval(changeSliderImages, 4000);

}

function changeFontType(){
    var headers = document.getElementsByTagName("h2");
    for  (var i = 0; i < headers.length; i++) {
        headers[i].style.fontFamily = "Impact,Charcoal,sans-serif";
    }
}

function partB() {
    document.getElementById("part-a").className = "";
    document.getElementById("part-b").className = "current";
}

function changeSliderImages() {
    var img = document.getElementById("slider");
    img.style.opacity = '0.0';
    img.setAttribute("src", "images/slider-" + imageCounter + ".jpg");
    fadeIn("slider");
    imageCounter++;
    if (imageCounter == 5) imageCounter = 1;
}


function fadeIn(id, val) {
// ID of the element to fade, Fade value[min value is 0]
    if (isNaN(val)) {
        val = 0;
    }
    document.getElementById(id).style.opacity = '0.' + val;
    if (val < 9) {
        val++;
        setTimeout('fadeIn("' + id + '",' + val + ')', 100);
    } else {
        return;
    }
}