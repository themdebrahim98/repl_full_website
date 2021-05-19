var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("card");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    // for (i = 0; i < dots.length; i++) {
    //     dots[i].className = dots[i].className.replace(" active", "");
    // }
    slides[slideIndex - 1].style.display = "block";
    // dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 5000); // Change image every 2 seconds
}




var slideIndex = 1;
showSlide(slideIndex);


function currentSlide(n) {
    showSlide(slideIndex = n);

}


function plusSlides(n) {
    showSlide(slideIndex += n);
    console.log("kjhaegg");
}

function showSlide(n) {
    var i;


   
    const slides = document.getElementsByClassName("card");

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    
    slides[slideIndex - 1].style.display = "block";
   
    setTimeout(showSlides, 5000);



}