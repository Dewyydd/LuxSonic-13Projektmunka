let body = document.querySelector("body");
let nav = document.querySelector("#mainNav");
let title = document.querySelector("#websiteTitle");
let hamburgerBtn = document.querySelector("#hamburger");
let hamburger = hamburgerBtn.querySelector("svg");
let profileIcon = document.querySelector("#profileIcon").querySelector("svg");
let menuOverlay = document.querySelector("#menuOverlay");
let closeNav = document.querySelector("#closeNav");
let bottomMenu = document.querySelector("#bottomMenu");

let hover = false;
let scrolledOver = false;

function openMenu() {
  body.classList.add("menuOverlayVisible");
  body.classList.remove("menuOverlayInvisible");
  body.style.overflow = "hidden";
  hamburgerBtn.setAttribute("aria-expanded", "true");
}

function closeMenu() {
  body.classList.remove("menuOverlayVisible");
  body.classList.add("menuOverlayInvisible");
  body.style.overflow = "";
  hamburgerBtn.setAttribute("aria-expanded", "false");
}

hamburgerBtn.onclick = openMenu;
bottomMenu.onclick = openMenu;

closeNav.onclick = closeMenu;
menuOverlay.onclick = closeMenu;

function updateNav() {
  if (hover || scrolledOver) {
    nav.classList.add("invertedNav");
    title.classList.add("invertedNavItem");
    hamburger.setAttribute("fill", "black");
    profileIcon.setAttribute("fill", "black");
  } else {
    nav.classList.remove("invertedNav");
    title.classList.remove("invertedNavItem");
    hamburger.setAttribute("fill", "white");
    profileIcon.setAttribute("fill", "white");
  }
}

nav.onmouseenter = function () {
  hover = true;
  updateNav();
};

nav.onmouseleave = function () {
  hover = false;
  updateNav();
};

window.onscroll = function () {
  if (window.scrollY > 0 && scrolledOver == false) {
    scrolledOver = true;
    updateNav();
  } else if (window.scrollY == 0 && scrolledOver == true) {
    scrolledOver = false;
    updateNav();
  }
};