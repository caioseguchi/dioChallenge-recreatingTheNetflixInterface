// Function to toggle between light and dark modes
function changeMode() {
  changeClasses(); // Update classes
  changeText(); //Update text
}

// Change classes for dark mode
function changeClasses() {
  // Toggle dark mode
  button.classList.toggle(darkModeClass);
  body.classList.toggle(darkModeClass);
  footer.classList.toggle(darkModeClass);

  // Toggle navbar links
  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].classList.toggle(darkModeClassNavbar);
  }

  // Toggle main-anime-buttons
  for (let i = 0; i < buttonMain.length; i++) {
    buttonMain[i].classList.toggle(darkModeClass);
  }
}

// Updates the text content of the toggle button based on the current theme
function changeText() {
  const lightMode = "Light Mode";
  const darkMode = "Dark Mode";

  // If dark mode is active, switch the button text to "Light Mode"
  if (body.classList.contains(darkModeClass)) {
    button.innerHTML = lightMode;
    return;
  }

  // Otherwise, show "Dark Mode"
  button.innerHTML = darkMode;
}

// === DOM Element References ===
const darkModeClass = "dark-mode"; // CSS class name used to indicate dark mode
const darkModeClassNavbar = "text-light"; // Dark mode class for navbar text (typically changes text to light color)
const button = document.getElementById("mode-selector"); // Reference to the mode toggle button
const body = document.getElementsByTagName("body")[0]; // Reference to the body element
const footer = document.getElementsByTagName("footer")[0]; // Reference to the footer element
const navLinks = document.getElementsByClassName("nav-link"); // Collection of navigation link elements
const buttonMain = document.getElementsByClassName("button-main-picture"); // Collection of main action buttons (e.g., call-to-action buttons)

// === Event Listener ===
// When the user clicks the toggle button, switch modes
button.addEventListener("click", changeMode);
