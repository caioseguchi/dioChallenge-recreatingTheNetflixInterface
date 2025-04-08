function changeMode() {
  changeClasses();
  changeText();
}

function changeClasses() {
  button.classList.toggle(darkModeClass);
  body.classList.toggle(darkModeClass);
  footer.classList.toggle(darkModeClass);

  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].classList.toggle(darkModeClassNavbar);
  }
}

function changeText() {
  const lightMode = "Light Mode";
  const darkMode = "Dark Mode";

  if (body.classList.contains(darkModeClass)) {
    button.innerHTML = lightMode;
    return;
  }

  button.innerHTML = darkMode;
}

const darkModeClass = "dark-mode";
const button = document.getElementById("mode-selector");
const body = document.getElementsByTagName("body")[0];
const footer = document.getElementsByTagName("footer")[0];
const navLinks = document.getElementsByClassName("nav-link");
const darkModeClassNavbar = "text-light";

button.addEventListener("click", changeMode);
