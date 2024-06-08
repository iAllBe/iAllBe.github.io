// Получаем элементы слайдера
const slider = document.querySelector(".slider");
const prevButton = document.querySelector(".slider__prev");
const nextButton = document.querySelector(".slider__next");
const slides = Array.from(slider.querySelectorAll(".slider__slide"));
const slideCount = slides.length;
let slideIndex = 0;

// Устанавливаем обработчики событий для кнопок
prevButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);

// Функция для показа предыдущего слайда
function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  mobileSlider();
}

// Функция для показа следующего слайда
function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  mobileSlider();
}

// Функция для обновления отображения слайдера
function mobileSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = "flex";
    } else {
      slide.style.display = "none";
    }
    let control = document.querySelector(".slider__control");
    control.style.display = "flex";
  });
}

//Выключаем функционал слайдера
function descktopSlider() {
  slides.forEach((slide) => {
    slide.style.display = "flex";
  });
  let control = document.querySelector(".slider__control");
  control.style.display = "none";
}

//Трансформация мобильного-десктопного слайдера
function transformSlider() {
  if (window.innerWidth < 1366) {
    // Инициализация слайдера
    mobileSlider();
  } else {
    // Выключение слайдера
    descktopSlider();
  }
}

//Выбор первоначального вида слайдера
transformSlider();

//Перепроверка размера окна
window.addEventListener("resize", (e) => {
  transformSlider();
});
