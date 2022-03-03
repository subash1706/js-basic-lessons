/* eslint-disable semi */
/* eslint-disable quotes */
const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
  nav.classList.remove("hidden");
  closeBtn.classList.remove("hidden-btn");
  menuBtn.classList.add("hidden-btn");
});

closeBtn.addEventListener("click", () => {
  nav.classList.add("hidden");
  closeBtn.classList.add("hidden-btn");
  menuBtn.classList.remove("hidden-btn");
});
