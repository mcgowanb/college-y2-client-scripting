setUpListeners();

function setUpListeners(){
    document.getElementById("firstLink").addEventListener("click", changeLinks, false);
    document.getElementById("change-image").addEventListener("click", replaceImage, false);
    document.getElementById("header").addEventListener("dblclick", moveHeader, false);
    document.getElementById("footer").addEventListener("click", lastQuestion, false);
}

function changeLinks(){
    var links = document.getElementsByTagName("a");
    console.log(links);
    for(var i = 1; i < links.length; i++){
        //removing the reference to the current link as it immediately navigates away
        if(i === 1) continue;
        links[i].setAttribute("href", "http://www.apple.ie");
        links[i].style.color = "#FF0000";
    }
}

function replaceImage(){
    var image = document.getElementById("change-image");
    var newImage = document.createElement("img");
    newImage.setAttribute("src", "images/rain.jpg");
    newImage.setAttribute("onmouseover", "removeImages()");
    newImage.style.border = "1px dashed";
    newImage.style.transform = "rotate(15deg)";
    var parent = image.parentNode;
    parent.removeChild(image);
    parent.insertBefore(newImage, parent.childNodes[0]);
}

function removeImages(){
    var images = document.getElementsByTagName("img");
    while(images.length > 0) {
        images[0].parentNode.removeChild(images[0]);
    }
}

function moveHeader(){
 var header = document.getElementById("header");
 header.parentNode.removeChild(header);
 var footer = document.getElementById("footer");
 footer.appendChild(header);
}

function lastQuestion(){
    var elem = document.getElementsByTagName("figcaption")[0];
    elem.style.backgroundColor = "cyan";
}

function insertList(){
    console.log("sdfsdf");
}