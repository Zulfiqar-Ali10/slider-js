
const slider = document.querySelector(".slider");
const sliders = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let slideIndex = 0;
sliders[slideIndex].classList.add("active");

prevBtn.addEventListener("click", slidePrev)
nextBtn.addEventListener("click", slideNext)

function slidePrev(){
    sliders[slideIndex].classList.remove("active")
    slideIndex = (slideIndex === 0 ) ? sliders.length - 1 : slideIndex - 1;
    sliders[slideIndex].classList.add("active");
    slider.style.transform = `translateX(-${slideIndex * 100}%)`;
}

function slideNext(){
    sliders[slideIndex].classList.remove("active")
    slideIndex = (slideIndex === sliders.length - 1) ? 0 : slideIndex + 1;
    sliders[slideIndex].classList.add("active");
    slider.style.transform = `translateX(-${slideIndex * 100}%)`;
}