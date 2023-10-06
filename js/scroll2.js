var slider2 = document.getElementById("slider-main2");
var img2 = document.getElementsByClassName("items");

function prev2(){
    slider2.prepend(img2[img2.length -1]);
}

function next2(){
    slider2.append(img2[0]);
}