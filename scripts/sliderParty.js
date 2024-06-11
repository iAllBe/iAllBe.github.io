// Получаем элементы слайдера
const sliderParty = document.querySelector(".slider-party");
const prevButtonParty = document.querySelector(".slider-party__prev");
const nextButtonParty = document.querySelector(".slider-party__next");
const slidesParty = Array.from(
  sliderParty.querySelectorAll(".slider-party__slide")
);
const slideCountParty = slidesParty.length;
let slideIndexParty = 0;

// Устанавливаем обработчики событий для кнопок
prevButtonParty.addEventListener("click", showPreviousSlideParty);
nextButtonParty.addEventListener("click", showNextSlideParty);

// Функция для показа предыдущего слайда
function showPreviousSlideParty() {
  slideIndexParty = (slideIndexParty - 1 + slideCountParty) % slideCountParty;
  mobileSliderParty();
}

// Функция для показа следующего слайда
function showNextSlideParty() {
  slideIndexParty = (slideIndexParty + 1) % slideCountParty;
  mobileSliderParty();
}

// Функция для обновления отображения слайдера
function mobileSliderParty() {
  slidesParty.forEach((slide, index) => {
    if (index === slideIndexParty) {
      slide.style.display = "block";
    } else {
      slide.style.display = "none";
    }
    let controlParty = document.querySelector(".slider-party__control");
    controlParty.style.display = "flex";
  });
}

//Выключаем функционал слайдера
function descktopSliderParty() {
  slidesParty.forEach((slide) => {
    slide.style.display = "block";
  });
  let controlParty = document.querySelector(".slider-party__control");
  controlParty.style.display = "none";
}

//Трансформация мобильного-десктопного слайдера
function transformSliderParty() {
  if (window.innerWidth < 1366) {
    // Инициализация слайдера
    mobileSliderParty();
  } else {
    // Выключение слайдера
    descktopSliderParty();
  }
}

//Выбор первоначального вида слайдера
transformSliderParty();

//Перепроверка размера окна
window.addEventListener("resize", (e) => {
  transformSliderParty();
});
