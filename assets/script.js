// tableau
const slides = [
    {
        "image": "./assets/images/slideshow/slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "./assets/images/slideshow/slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "./assets/images/slideshow/slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "./assets/images/slideshow/slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
];

console.log(slides);

// Les variables globales

const bannerImages = document.querySelector(".banner-img");
const bannerText = document.querySelector("#banner p");
const arrowRight = document.querySelector(".arrow_right");
const arrowLeft = document.querySelector(".arrow_left");
const dotsContainer = document.querySelector(".dots");
let currentIndex = 0;

// Affichage des dots

function createDots() {
    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        dotsContainer.appendChild(dot);
        if (i === currentIndex) {
            dot.classList.add("dot_selected");
        }
    }
}

// fonction principale

function updateSlide() {
    bannerImages.src = slides[currentIndex].image;
    bannerText.innerHTML = slides[currentIndex].tagLine;

    const dots = document.querySelectorAll(".dot");
    for (let i = 0; i < dots.length; i++) {
        if (i === currentIndex) {
            dots[i].classList.add("dot_selected");
        } else {
            dots[i].classList.remove("dot_selected");
        }
    }
}
//  Affichage au clic droit

arrowRight.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlide();
});
console.log(arrowRight);

//  Affichage au clic gauche

arrowLeft.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlide();
});
console.log(arrowLeft);

// Mise en route des fonctions

createDots();
updateSlide();