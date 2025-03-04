const sections = document.querySelectorAll(".section");

function checkVisibility() {
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
            section.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", checkVisibility);
checkVisibility();

function makeDrunk() {
    document.querySelectorAll("*").forEach(el => {
        el.classList.add("drunk");
        el.style.position = "relative"; 
        el.style.animationDuration = `${Math.random() * 4 + 2}s`; 
    });
}

function soberUp() {
    document.querySelectorAll("*").forEach(el => {
        el.classList.remove("drunk");
        el.style.position = ""; // Tilbakestiller posisjon
    });
}