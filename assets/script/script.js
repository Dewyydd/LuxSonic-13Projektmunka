let body = document.querySelector("body")
let nav = document.querySelector("nav");
let title = document.querySelector("#websiteTitle");
let hamburger = document.querySelector("#hamburger").querySelector("svg");
let profileIcon = document.querySelector("#profileIcon").querySelector("svg");
let menuOverlay = document.querySelector("#menuOverlay");
let closeNav = document.querySelector("#closeNav");

nav.onmouseenter = function () {
  nav.classList.toggle("invertedNav");
  title.classList.toggle("invertedNavItem");
  hamburger.setAttribute("fill", "black");
  profileIcon.setAttribute("fill", "black");
};

nav.onmouseleave = function () {
  nav.classList.toggle("invertedNav");
  title.classList.toggle("invertedNavItem");
  hamburger.setAttribute("fill", "white");
  profileIcon.setAttribute("fill", "white");
};

hamburger.onclick = function () {
  body.classList.toggle("menuOverlayVisible");
  body.classList.toggle("menuOverlayInvisible");
};

closeNav.onclick = function () {
  body.classList.toggle("menuOverlayVisible");
  body.classList.toggle("menuOverlayInvisible");
};
