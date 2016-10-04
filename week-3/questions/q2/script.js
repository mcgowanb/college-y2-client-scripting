function writeToParagraph(){
    var p = document.getElementById("paragraph");
    var txt = document.getElementById("data").value;
    p.innerHTML += txt;
} 