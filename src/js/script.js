// for the menu bar

function onToggleMenu(e){
    const navLinks = document.querySelector('.nav-links')
    e.name = e.name === 'menu-outline' ? 'close-outline' : 'menu-outline';
    navLinks.classList.toggle('top-[9%]')
}

// for the mini-bio slider

document.addEventListener("DOMContentLoaded", function () {
var slides = document.querySelectorAll(".slide");
var currentIndex = 0;

function showSlide(index) {
for (var i = 0; i < slides.length; i++) {
if (i === index) {
 slides[i].style.display = "block";
} else {
 slides[i].style.display = "none";
}
}
}

function prevSlide() {
currentIndex = (currentIndex - 1 + slides.length) % slides.length;
showSlide(currentIndex);
}

function nextSlide() {
currentIndex = (currentIndex + 1) % slides.length;
showSlide(currentIndex);
}


var angleLeftIcon = document.querySelector(".fa-caret-left");
var angleRightIcon = document.querySelector(".fa-caret-right");

angleLeftIcon.addEventListener("click", prevSlide);
angleRightIcon.addEventListener("click", nextSlide);

showSlide(currentIndex);
});


//for portfolio sliders
const sliderContainers = document.querySelectorAll('.slider-container');
const scrollDistance = 200; 

sliderContainers.forEach((container) => {
  const sliderContent = container.querySelector('.slider-content');
  const sliderIcons = container.querySelectorAll('.slider-icon');

  sliderIcons.forEach((icon) => {
    icon.addEventListener('click', () => {
      const direction = icon.classList.contains('fa-angle-left') ? -1 : 1;
      sliderContent.scrollBy({
        left: direction * scrollDistance,
        behavior: 'smooth',
      });
    });
  });


  sliderContent.addEventListener('scroll', () => {
    const isAtStart = sliderContent.scrollLeft === 0;
    sliderIcons[0].classList.toggle('disabled', isAtStart);
  });


  sliderContent.addEventListener('scroll', () => {
    const isAtEnd =
      sliderContent.scrollLeft + sliderContent.clientWidth ===
      sliderContent.scrollWidth;
    sliderIcons[1].classList.toggle('disabled', isAtEnd);
  });
});



// for the hidden certificates on resume
function hideShow() {
    const section = document.getElementById("certificates-resume");
    const toggleLink = document.getElementById("certificates__toggle");
  
    if (section.classList.contains("hidden")) {
      section.classList.remove("hidden");
      toggleLink.textContent = "less<<";
    } else {
      section.classList.add("hidden");
      toggleLink.textContent = "more>>";
    }
  }



//resume aside

function toggleTestimonials() {
    var asideHidden = document.getElementById("aside_hidden");
    if (asideHidden.style.display === "block") {
        asideHidden.style.display = "none";
    } else {
        asideHidden.style.display = "block";
    }
  }