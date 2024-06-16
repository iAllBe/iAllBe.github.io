//Постарался реализовать создание слайдера чез экземпляр класса, но терелся this при привязке события к кнопке, не смог разобраться в чем проблема
class СreateSlider {
  constructor(slider, prevButton, nextButton, slides) {
    this.showSlider = this.showSlider.bind(this);

    this.slider = document.querySelector(slider);
    this.prevButton = document.querySelector(prevButton);
    this.nextButton = document.querySelector(nextButton);
    this.slides = Array.from(this.slider.querySelectorAll(slides));
    this.slideCount = this.slides.length;
    this.slideIndex = 0;

    this.prevButton.addEventListener("click", this.showPreviousSlide);
    this.nextButton.addEventListener("click", this.showNextSlide);

    this.showPreviousSlide = function () {
      this.slideIndex =
        (this.slideIndex - 1 + this.slideCount) % this.slideCount;
      this.showSlider();
    };

    this.showNextSlide = function () {
      console.log("Привет!");
      this.slideIndex = (this.slideIndex + 1) % this.slideCount;
      this.showSlider();
    };
  }

  showSlider() {
    this.slides.forEach((slide, index) => {
      if (index === this.slideIndex) {
        slide.style.display = "flex";
      } else {
        slide.style.display = "none";
      }
    });
  }
}

const stageSlider = new СreateSlider(
  ".slider",
  ".slider__prev",
  ".slider__next",
  ".slider__slide"
);

stageSlider.showSlider();

console.log(stageSlider);

if (window.innerWidth < 1366) {
} else {
}
