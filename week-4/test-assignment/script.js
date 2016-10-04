function changeParagraph() {
    var paragraph = document.getElementById("para");

    paragraph.style.width = "50%";
    paragraph.style.float = "right";
    paragraph.setAttribute("contenteditable", true);
    paragraph.setAttribute("draggable", true);
    paragraph.style.transform = "rotate(-15deg)";

}

function getImageAttributes() {

    var options = document.getElementsByName("attribute");
    var num;

    for (var i = 0; i < options.length; i++) {
        if (options[i].checked) {
            num = parseInt(options[i].value);
            break;
        }
    }
    displayAttributeValues(num);
}

function displayAttributeValues(num) {
    var image = document.getElementById("image");

    var attributeList = [];
    attributeList[0] = "image src: " + image.getAttribute("src");
    attributeList[1] = "image style: " + image.getAttribute("style");
    attributeList[2] = "alt tag is: " + image.getAttribute("alt");
    attributeList[3] = "image height attribute is: " + image.getAttribute("height");


    var para = document.getElementById("att-list");
    var currentText = para.innerHTML;
    for (var i = 0; i < num; i++) {
        currentText += "<br />" + attributeList[i];
    }
    para.innerHTML = currentText;

}