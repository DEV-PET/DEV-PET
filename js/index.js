//CAROUSEL
const slide = document.querySelector(".slide");
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");

let slideIndex = 0;

//ACTION LISTENERS
prevBtn.addEventListener("click", prevSlide());
nextBtn.addEventListener("click", nextSlide());

//FUNCTIONS
function showSlide(index) {
    if (index < 0) {
        slideIndex = slide.childElementCount - 1;
    } else if (index >= slide.childElementCount) {
        slideIndex = 0;
    }
    
    slide.style.transform = `translateX(-${slideIndex * 100}%)`;
}

function prevSlide() {
    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}

showSlide(slideIndex);  