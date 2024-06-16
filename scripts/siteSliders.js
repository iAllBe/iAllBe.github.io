//   ---Слайдер с этапами---
// Получаем элементы слайдера
const sliderStage = document.querySelector(".slider");
const prevButtonStage = document.querySelector(".slider__prev");
const nextButtonStage = document.querySelector(".slider__next");
const slidesStage = Array.from(sliderStage.querySelectorAll(".slider__slide"));
const slideCountStage = slidesStage.length;
let slideIndexStage = 0;

// Устанавливаем обработчики событий для кнопок
prevButtonStage.addEventListener("click", showPreviousSlideStage);
nextButtonStage.addEventListener("click", showNextSlideStage);

// Функция для показа предыдущего слайда
function showPreviousSlideStage() {
  slideIndexStage = (slideIndexStage - 1 + slideCountStage) % slideCountStage;
  transformSliderStage();
}

// Функция для показа следующего слайда
function showNextSlideStage() {
  slideIndexStage = (slideIndexStage + 1) % slideCountStage;
  transformSliderStage();
}

// Функция для обновления отображения слайдера
function mobileSliderStage() {
  slidesStage.forEach((slide, index) => {
    if (index === slideIndexStage) {
      slide.style.display = "flex";
    } else {
      slide.style.display = "none";
    }
    let controlStage = document.querySelector(".slider__control");
    controlStage.style.display = "flex";
  });
}

//Выключаем функционал слайдера
function desktopSliderStage() {
  slidesStage.forEach((slide) => {
    slide.style.display = "flex";
  });
  let controlStage = document.querySelector(".slider__control");
  controlStage.style.display = "none";
}

//Трансформация мобильного-десктопного слайдера
function transformSliderStage() {
  if (window.innerWidth < 1366) {
    // Инициализация слайдера
    mobileSliderStage();
  } else {
    // Выключение слайдера
    desktopSliderStage();
  }
}

//Выбор первоначального вида слайдера
transformSliderStage();

//Перепроверка размера окна
window.addEventListener("resize", (e) => {
  transformSliderStage();
});

//   ---Слайдер с участниками---
// Получаем элементы слайдера
const sliderParty = document.querySelector(".slider-party");
const prevButtonParty = document.querySelector(".slider-party__prev");
const nextButtonParty = document.querySelector(".slider-party__next");
const slidesParty = Array.from(
  sliderParty.querySelectorAll(".slider-party__slide")
);
const slideCountParty = slidesParty.length;
let slideIndexParty = 0;

const slidesPartyGroup = Array.from(
  sliderParty.querySelectorAll(".slider-party__slide-group")
);
const slideCountPartyGroup = slidesPartyGroup.length;
let slideIndexPartyGroup = 0;

// Устанавливаем обработчики событий для кнопок
prevButtonParty.addEventListener("click", showPreviousSlideParty);
nextButtonParty.addEventListener("click", showNextSlideParty);

// Функция для показа предыдущего слайда
function showPreviousSlideParty() {
  slideIndexParty = (slideIndexParty - 1 + slideCountParty) % slideCountParty;
  transformSliderParty();
}

// Функция для показа следующего слайда
function showNextSlideParty() {
  slideIndexParty = (slideIndexParty + 1) % slideCountParty;
  transformSliderParty();
}

// Функция для обновления отображения слайдера
function mobileSliderParty() {
  slidesParty.forEach((slide, index) => {
    if (index === slideIndexParty) {
      slide.style.display = "block";
    } else {
      slide.style.display = "none";
    }
  });
}

//Выключаем функционал слайдера
function desktopSliderParty() {
  slidesPartyGroup.forEach((slideGroup, index) => {
    if (index === slideIndexPartyGroup) {
      slideGroup.style.display = "flex";
    } else {
      slideGroup.style.display = "none";
    }
  });
}

//Трансформация мобильного-десктопного слайдера
function transformSliderParty() {
  if (window.innerWidth < 1366) {
    // Инициализация слайдера
    mobileSliderParty();
  } else {
    // Выключение слайдера
    desktopSliderParty();
  }
}

//Выбор первоначального вида слайдера
transformSliderParty();

//Перепроверка размера окна
window.addEventListener("resize", (e) => {
  transformSliderParty();
});
