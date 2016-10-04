function changeParagraph() {
    var paragraph = document.getElementById("para");

    paragraph.style.width = "50%";
    paragraph.style.float = "right";
    paragraph.setAttribute("contenteditable", true);
    paragraph.setAttribute("draggable", true);
    paragraph.style.transform = "rotate(-15deg)";

}