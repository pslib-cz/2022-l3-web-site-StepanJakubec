document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("hamburgerMenu-active");
        document.querySelector(".navbar__menu").classList.toggle("menu-active");
    });
});