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
const dots = document.querySelector(".dots");
const arrowRight = document.querySelector(".arrow_right");
const arrowLeft = document.querySelector(".arrow_left");
const imageContainers = document.querySelectorAll("#banner .banner-img .slide-container");
const bannerImages = document.querySelectorAll("#banner .banner-img img");
let index = 0;

// Affichage des dots
function displayDots() {
    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        dots.appendChild(dot);
        if (i == index) {
            dot.classList.add("dot_selected");
        }
    }
}

displayDots();


// gestion des images du carrousel

function updateSlide() {
    bannerImages.forEach((img, i) => {
        img.src = slides[index].image;
    });

    const allImageTexts = document.querySelectorAll("#banner .banner-img .slide-container .image-text");
    allImageTexts.forEach((text) => {
        text.innerHTML = ""; 
    });

    const currentImageText = imageContainers[index].querySelector(".image-text");
    currentImageText.innerHTML = slides[index].tagLine;

    const dotElements = document.querySelectorAll(".dot");
    dotElements.forEach((dot, i) => {
        if (i === index) {
            dot.classList.add("dot_selected");
        } else {
            dot.classList.remove("dot_selected");
        }
    });
}

//  Affichage au clic droit

arrowRight.addEventListener("click", () => {
    index = (index + 1) % slides.length; 
    updateSlide();
    console.log("droite");
});

// Affichage au clic gauche

arrowLeft.addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    updateSlide();
    console.log("gauche");
});