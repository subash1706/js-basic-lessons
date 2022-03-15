const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);

function switchTheme(e) {
  document.body.classList.toggle("light-mode");
}

toggleSwitch.addEventListener("change", switchTheme, false);
