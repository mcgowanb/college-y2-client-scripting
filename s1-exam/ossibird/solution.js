initListeners();
var counter = 0;


function initListeners() {
    document.getElementById("about").addEventListener("click", deleteLinks, false);
    document.getElementById("phone").addEventListener("click", changeOpacity, false);
    document.getElementById("gallery").addEventListener("mouseover", addImage, false);
    document.getElementById("gallery").addEventListener("mouseout", removeImage, false);

    document.getElementById("first-article").addEventListener("click", animateElement, false);

    document.getElementById("topbar").addEventListener("click", displayNodeNames, false);
    document.getElementById("foot").addEventListener("dblclick", addExtraChanges, false);
}

function deleteLinks() {
    var x = document.getElementById("social");
    x.parentNode.removeChild(x);
}

function changeOpacity() {
    var x = document.getElementById("phone");
    x.style.opacity = "0.25";
}

function addImage() {
    var img = document.createElement("img");
    img.setAttribute("id", "new-image");
    img.setAttribute("src", "scenicoverlook.jpg");
    img.setAttribute("style", "border: 1px dashed");
    img.style.webkitFilter = "contrast(200%) blur(2px)";
    var location = document.getElementById("pageintro");
    location.appendChild(img);
}

function removeImage() {
    var image = document.getElementById("new-image");
    image.parentNode.removeChild(image);
}

function animateElement() {
    var x = document.getElementById("first-article");
    x.style.position = "absolute";

    var pos = 0;
    var count = 0;
    var id = setInterval(move, 50);

    function move() {
        if (count == 5000) {
            clearInterval(id);
        } else {
            pos += 20;
            count += 50;
            x.style.left = pos + 'px';
        }
    }

}

function displayNodeNames() {
    var all = document.getElementsByTagName("*");
    for (var i = 0; i < all.length; i++) {
        console.log(all[i].nodeName);
    }
}

function addExtraChanges() {
    var left = document.getElementById("foot-left");
    var right = document.getElementById("foot-right");
    var images = document.getElementsByTagName("img");
    var src = "scenicoverlook.jpg";
    changeImages(images, src);
    var backsrc = "scenery_large.jpg";
    changeBackground(document.getElementsByClassName("bgded overlay"), backsrc);
    reverseFooter(left, right);

    var links = document.getElementsByTagName("a");
    var path = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    updateLinks(links, path);
    var style = "cursor: crosshair";
    changeToCrossHair(images, style);

    var d = document.getElementsByClassName("wrapper row2")[0];
    var parent = d.parentNode;
    removeStuff(d, parent);

    var f = document.getElementById("foot");
    var b = document.getElementById("top");
    moveFooterToTop(f,b);

}

function moveFooterToTop(f,b){
    f.parentNode.removeChild(f);
    b.insertBefore(f, b.firstChild);
}

function removeStuff(d, parent) {
    parent.removeChild(d);
}

function changeToCrossHair(images, style) {
    for (var i = 0; i < images.length; i++) {
        images[i].setAttribute("style", style);
    }
}

function updateLinks(links, path) {
    for (var i = 0; i < links.length; i++) {
        links[i].setAttribute("href", path);
    }
}
function changeBackground(doc, src) {
    for (var i = 0; i < doc.length; i++) {
        doc[i].setAttribute("style", "background-image:url(" + src + ")");
    }
}


function changeImages(images, src) {
    for (var i = 0; i < images.length; i++) {
        images[i].setAttribute("src", src);
    }
}
function reverseFooter(left, right) {
    var p = left.parentNode;
    p.removeChild(left);
    p.removeChild(right);
    right.setAttribute("class", "one_third first");
    left.setAttribute("class", "one_third");
    p.appendChild(left);
    p.insertBefore(right, p.firstChild);
}