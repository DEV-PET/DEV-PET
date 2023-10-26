//====================================CAROUSEL====================================\\
const slide = document.querySelector(".slide");

let slideIndex = 0;

setInterval(nextSlide, 5000)

//FUNCTIONS
function showSlide(index) {
    if (index < 0) {
        slideIndex = slide.childElementCount - 1;
    } else if (index >= slide.childElementCount) {
        slideIndex = 0;
    }

    slide.style.transform = `translateX(-${slideIndex * 100}%)`;
    
    showSlide(slideIndex);
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}