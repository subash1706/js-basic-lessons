/* eslint-disable space-before-function-paren */
/* eslint-disable quotes */
/* eslint-disable semi */
const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);

function switchTheme(e) {
  document.body.classList.toggle("light-mode");
}

toggleSwitch.addEventListener("change", switchTheme, false);
