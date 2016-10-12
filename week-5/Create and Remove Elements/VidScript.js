// JavaScript Document
"use strict";
function create() {
    //Create a paragraph
    var par1 = document.createElement('p');
    //Add a text node
    var txt1 = document.createTextNode("Basic Paragraph Created");
    //Append to paragraph
    par1.appendChild(txt1);
    //Style the paragraph
    //NOTE: If setAttribute is used multiple times as separate statements,
    //it can override previous settings (not always)
    //It is best to apply all style settings at once.
    par1.setAttribute("style", "border:solid 5px blue; background-color: cyan; text-align:center; color:red; font-size: 36px");
    //Assign an id
    par1.setAttribute("id", "para1");
    //create a line break
    var linebreak = document.createElement('br');
    //Append to the paragraph
    par1.appendChild(linebreak);
    //Create a video element
    var vid = document.createElement('video');

    vid.setAttribute("src", "breakingbad.mp4");
    vid.setAttribute("autoplay", "true");
    vid.setAttribute("controls", "on");
    //append the video to the paragraph
    par1.appendChild(vid);
    //Create a button to close the document window
    var btn = document.createElement('input');
    btn.setAttribute("type", "button");
    btn.setAttribute("value", "Click to Close");
    btn.setAttribute("onclick", "closewindow()");
    par1.appendChild(btn);
    //Append the paragraph to the document body
    document.body.appendChild(par1);
}

function closewindow() {
    window.close();
}

//NEVER create a function called remove
function removevid() {
    var x = document.getElementById('para1');
    x.removeChild(x.childNodes[2]);
}