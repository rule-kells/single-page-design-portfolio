const work = document.querySelector(".work");
const previousButton = work.querySelector(".work__btn--previous");
const nextButton = work.querySelector(".work__btn--next");
const worksSlidesWrapper = work.querySelector(".work__slides--wrapper");
const workSlides = work.querySelectorAll(".work__slide");
const slideWidth = workSlides[0].getBoundingClientRect().width;

workSlides.forEach((workSlide, index) => {
  workSlide.style.left = slideWidth * index + "px";
});

nextButton.addEventListener("click", (_) => {
  const currentSlide = worksSlidesWrapper.querySelector(".is-selected");
  const nextSlide = currentSlide.nextElementSibling;
  const destination = getComputedStyle(nextSlide).left;
  worksSlidesWrapper.style.transform = `translateX(-${destination})`;
  currentSlide.classList.remove("is-selected");
  nextSlide.classList.add("is-selected");
  
  previousButton.removeAttribute("disabled");
  if (!nextSlide.nextElementSibling) {
    nextButton.setAttribute("disabled", true);
  }
});

previousButton.addEventListener("click", (_) => {
  const currentSlide = worksSlidesWrapper.querySelector(".is-selected");
  const previousSlide = currentSlide.previousElementSibling;
  const destination = getComputedStyle(previousSlide).left;
  worksSlidesWrapper.style.transform = `translateX(-${destination})`;
  currentSlide.classList.remove("is-selected");
  previousSlide.classList.add("is-selected");
  
  nextButton.removeAttribute("disabled");
  if (!previousSlide.previousElementSibling) {
    previousButton.setAttribute("disabled", true);
  }
});
