let nav = document.querySelector("nav");
let menu = document.querySelector(".header__hamburger");
menu.addEventListener("click", () => {
  nav.classList.toggle("header__navbar");
});
