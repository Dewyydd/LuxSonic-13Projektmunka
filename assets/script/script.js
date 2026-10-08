let nav = document.querySelector("nav");

let title = document.querySelector("#websiteTitle");
let hamburger = document.querySelector("#hamburger").querySelector("svg");
let profileIcon = document.querySelector("#profileIcon").querySelector("svg");

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
