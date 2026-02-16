import './style.scss'

const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector("nav ul.menu");

hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");
});