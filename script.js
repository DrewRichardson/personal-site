function toggleMenu() {
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    menu.classList.toggle('open');
    icon.classList.toggle('open');
}

var xps = document.querySelectorAll("#xp-level")

for (xp of xps) {
    if (xp.outerText == "Experienced") {
        xp.parentElement.parentElement.querySelector("#xp-icon").src="./assets/checkmark-gold.png"
    } else if (xp.outerText == "Intermediate") {
        xp.parentElement.parentElement.querySelector("#xp-icon").src="./assets/checkmark-silver.png"
    }   else if (xp.outerText == "Basic") {
        xp.parentElement.parentElement.querySelector("#xp-icon").src="./assets/checkmark-bronze.png"
    }
}