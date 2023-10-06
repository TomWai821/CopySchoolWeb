var slider = document.getElementById("slider-main");
var img = document.getElementsByClassName("item");

function prev(){
    slider.prepend(img[img.length - 1]);
}

function next(){
    slider.append(img[0]);
}