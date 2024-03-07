const menuBar = document.querySelector(".menu-bar");
const navbar = document.querySelector(".navbar");
const navbarStyle = window.getComputedStyle(navbar);
menuBar.addEventListener("click", (e) => {
  if (navbarStyle.display === "none") {
    navbar.style.display = "flex";
  } else {
    navbar.style.display ="none";
  }
});
