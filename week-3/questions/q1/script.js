
function resizeImage(){
    var image = document.getElementById("image-1");
    var size = document.getElementById("size").value;

    image.style.width = size + "px";
    image.style.height = size + "px";
}