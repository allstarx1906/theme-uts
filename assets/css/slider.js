var counter = 1;
var slides = document.getElementsByClassName("carousel-item");
var totalSlide = slides.length;

setInterval(function(){
    document.getElementById('radio'+ counter).checked = true;
    counter ++;
    if(counter > totalSlide){
        counter = 1;
    }
},5000)