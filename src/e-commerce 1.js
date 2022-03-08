/* eslint-disable arrow-spacing */
/* eslint-disable space-infix-ops */
/* eslint-disable quotes */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */
/* eslint-disable no-var */
/* eslint-disable space-before-function-paren */
/* eslint-disable semi */
let currentSlide = 0;
const slides = document.querySelectorAll(".slides");
const thumbnails = document.querySelectorAll("#thumb");

const showSlides = (n) => {
  slides.forEach((slide) => {
    slide.style.display = "none";
    thumbnails.forEach((thumbnail) => {
      thumbnail.classList.remove("active");
    });
  });
  slides[n].style.display = "block";
  thumbnails[n].classList.add("active");
};
document.addEventListener("DOMContentLoaded", showSlides(currentSlide));

thumbnails.forEach((thumbnail, i) => {
  thumbnail.addEventListener("click", () => {
    console.log(currentSlide);
    showSlides(i);
    currentSlide = i;
  });
});

const nextSlide = () => {
  currentSlide >= slides.length - 1 ? (currentSlide = 0) : currentSlide++;
  showSlides(currentSlide);
};

const prevSlide = () => {
  currentSlide <= 0 ? (currentSlide = slides.length - 1) : currentSlide--;
  showSlides(currentSlide);
};

document.getElementById("next").addEventListener("click", nextSlide);
document.getElementById("prev").addEventListener("click", prevSlide);

// Open the lightbox
function openLightbox() {
  document.getElementById("lightbox").style.display = "block";
}

// Close the Modal/Lightbox
function closeModal() {
  document.getElementById("lightbox").style.display = "none";
}

var slideIndex = 1;
showImages(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showImages((slideIndex += n));
}

// Thumbnail image controls
function currentImg(n) {
  showImages((slideIndex = n));
}

function showImages(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var thumbs = document.getElementsByClassName("thumb-img");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < thumbs.length; i++) {
    thumbs[i].className = thumbs[i].className.replace("active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  thumbs[slideIndex - 1].className += " active";
}
