var slideIndex = 0;
//showSlides(slideIndex);

autoShow();

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// This function runs in a loop to advance the slides every few seconds
function autoShow() {
  plusSlides(1);
  setTimeout(autoShow, 8000); //Change slide every xx seconds
}


function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 0) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }

  var thisSlide = slides[slideIndex-1];
  var thisDot = dots[slideIndex-1];
  thisSlide.style.display = "block"; 
  thisDot.className += " active";
}

