//---СЛАЙДЕР С ЭТАПАМИ---
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

//---СЛАЙДЕР С УЧАСТНИКАМИ МОБИЛЬНЫЙ---
// Получаем элементы слайдера
const sliderParty = document.querySelector(".slider-party");
const prevButtonParty = document.querySelector(".slider-party__prev");
const nextButtonParty = document.querySelector(".slider-party__next");
const slidesParty = Array.from(
  sliderParty.querySelectorAll(".slider-party__slide")
);
const slideCountParty = slidesParty.length;
let slideIndexParty = 0;

// Функция для показа предыдущего слайда
function showPreviousSlideParty() {
  if (window.innerWidth < 1366) {
    slideIndexParty = (slideIndexParty - 1 + slideCountParty) % slideCountParty;
    mobileSliderParty();
  } else {
    slideIndexPartyGroup =
      (slideIndexPartyGroup - 1 + slideCountPartyGroup) % slideCountPartyGroup;
    desktopSliderParty();
  }
}

// Функция для показа следующего слайда
function showNextSlideParty() {
  if (window.innerWidth < 1366) {
    slideIndexParty = (slideIndexParty + 1) % slideCountParty;
    mobileSliderParty();
  } else {
    slideIndexPartyGroup = (slideIndexPartyGroup + 1) % slideCountPartyGroup;
    desktopSliderParty();
  }
}

// Функция для обновления отображения слайдера
function mobileSliderParty() {
  slidesPartyGroup.forEach((slide) => {
    slide.style.display = "block";
  });
  slidesParty.forEach((slide, index) => {
    if (index === slideIndexParty) {
      slide.style.display = "block";
    } else {
      slide.style.display = "none";
    }
  });
}

//---СЛАЙДЕР С УЧАСТНИКАМИ ДЕСКТОПНЫЙ---
// Получаем элементы слайдера
const sliderPartyGroup = document.querySelector(".slider-party");
const slidesPartyGroup = Array.from(
  sliderPartyGroup.querySelectorAll(".slider-party__slide-group")
);
const slideCountPartyGroup = slidesPartyGroup.length;
let slideIndexPartyGroup = 0;

// Функция для обновления отображения слайдера
function desktopSliderParty() {
  slidesParty.forEach((slide) => {
    slide.style.display = "block";
  });
  slidesPartyGroup.forEach((slide, index) => {
    if (index === slideIndexPartyGroup) {
      slide.style.display = "flex";
    } else {
      slide.style.display = "none";
    }
  });
}

//---ИНИЦИАЛИЗАЦИЯ И ПЕРЕРИСОВКА СЛАЙДЕРА УЧАСТНИКОВ---
//Перепроверка размера окна
window.addEventListener("resize", (e) => {
  togglePartySlider();
});

//Инициализация слайдеров участников
prevButtonParty.addEventListener("click", showPreviousSlideParty);
nextButtonParty.addEventListener("click", showNextSlideParty);
if (window.innerWidth < 1366) {
  mobileSliderParty();
} else {
  desktopSliderParty();
}

//автопромотка карусели с участниками
setInterval(() => {
  showNextSlideParty();
}, 4000);

//Выбор первоначального вида слайдера
function togglePartySlider() {
  if (window.innerWidth < 1366) {
    mobileSliderParty();
  } else {
    desktopSliderParty();
  }
}
