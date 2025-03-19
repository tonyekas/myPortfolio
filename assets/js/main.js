/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/* Menu show */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/* Menu hidden */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== ADD BLUR HEADER ===============*/
const blurHeader = () => {
  const header = document.getElementById("header");
  // Add a class if the bottom offset is greater than 50 of the viewport
  this.scrollY >= 50
    ? header.classList.add("blur-header")
    : header.classList.remove("blur-header");
};
window.addEventListener("scroll", blurHeader);

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById("contact-form"),
  contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault();

  // serviceID - templateID - #form - publicKey
  emailjs.sendForm("", "", "#contact-form", "").then(
    () => {
      // Show sent message
      contactMessage.textContent = "Message sent successfully ✅";

      // Remove message after five seconds
      setTimeout(() => {
        contactMessage.textContent = "";
      }, 5000);

      // Clear input fields
      contactForm.reset();
    },
    () => {
      // Show error message
      contactMessage.textContent = "Message not sent (service error) ❌";
    }
  );
};

contactForm.addEventListener("submit", sendEmail);

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  // reset: true // Animations repeat
});

sr.reveal(`.home__data, .experience, .skills, .contact__container`);
sr.reveal(`.home__img`, { delay: 600 });
sr.reveal(`.home__scroll`, { delay: 800 });
sr.reveal(`.work__card, .services__card`, { interval: 100 });
sr.reveal(`.about__content`, { origin: "right" });
sr.reveal(`.about__img`, { origin: "left" });

// -------------------Below codes for change of theme to the background -------------

// First option: code begins below:

function toggleDarkMode() {
  const body = document.body;
  const button = document.getElementById("theme-toggle");

  body.classList.toggle("dark-mode");

  // Save user preference to local storage
  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
    button.textContent = "Toggle Light Mode";
  } else {
    localStorage.setItem("theme", "light");
    button.textContent = "Toggle Dark Mode";
  }
}

//  --------------------------------Second Option ---------------------
// Second option ----------

// #### Adding a theme setting for the webpage

// Select the toggle button ==================== Code begins below

const themeToggleBtn = document.getElementById("theme-toggle");

// Check local storage for theme preference
const currentTheme = localStorage.getItem("theme") || "light-theme";
document.body.classList.add(currentTheme);

// Function to switch themes
function toggleTheme() {
  const newTheme = document.body.classList.contains("light-theme")
    ? "dark-theme"
    : "light-theme";

  // Remove the existing theme class and add the new one
  document.body.classList.remove("light-theme", "dark-theme");
  document.body.classList.add(newTheme);

  // Save the user's preference to local storage
  localStorage.setItem("theme", newTheme);
}

// Add event listener to the toggle button to change color of the background theme
themeToggleBtn.addEventListener("click", toggleTheme);
