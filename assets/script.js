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
const bannerImages = document.querySelectorAll("#banner .banner-img");
const bannerTexts = document.querySelectorAll("#banner .banner-img p");

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

function updateSlide() {
    // Mise à jour des images du carrousel
    for (let i = 0; i < bannerImages.length; i++) {
        bannerImages[i].src = slides[index].image;
    }

    // Mise à jour du texte de chaque image avec celui de la diapositive actuelle
    for (let i = 0; i < bannerTexts.length; i++) {
        bannerTexts[i].innerHTML = slides[index].tagLine;
    }

    // Mise en surbrillance de l'indicateur de position correspondant à l'image actuelle
    const dotElements = document.querySelectorAll(".dot");
    for (let i = 0; i < dotElements.length; i++) {
        if (i === index) {
            dotElements[i].classList.add("dot_selected");
        } else {
            dotElements[i].classList.remove("dot_selected");
        }
    }
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