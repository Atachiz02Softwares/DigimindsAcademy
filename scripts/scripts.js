let slideIndex = 1;
const slides = document.getElementsByClassName("testimonial");

const showSlides = (n) => {
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    Array.from(slides).forEach((slide, index) => {
        slide.classList.remove("active", "prev", "next");
        if (index === slideIndex - 1) {
            slide.classList.add("active");
        } else if (index === slideIndex - 2 || (slideIndex === 1 && index === slides.length - 1)) {
            slide.classList.add("prev");
        } else if (index === slideIndex || (slideIndex === slides.length && index === 0)) {
            slide.classList.add("next");
        }
    });
};

const nextSlide = () => {
    showSlides(slideIndex += 1);
};

const prevSlide = () => {
    showSlides(slideIndex -= 1);
};

document.querySelector('.fa-chevron-right').addEventListener('click', nextSlide);
document.querySelector('.fa-chevron-left').addEventListener('click', prevSlide);

showSlides(slideIndex);