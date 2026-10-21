let body = document.querySelector("body");
let nav = document.querySelector("#mainNav");
let title = document.querySelector("#websiteTitle");
let titleSpan = title.querySelector("span");
let hamburgergomb = document.querySelector("#hamburger");
let hamburger = hamburgergomb.querySelector("svg");
let profileIcon = document.querySelector("#profileIcon").querySelector("svg");
let menuOverlay = document.querySelector("#menuOverlay");
let closeNav = document.querySelector("#closeNav");
let bottomMenu = document.querySelector("#bottomMenu");

let hover = false;
let scrolledOver = false;
let waitingForHeight = false;

function openMenu() {
  body.classList.add("menuOverlayVisible");
  body.classList.remove("menuOverlayInvisible");
  body.style.overflow = "hidden";
}

function closeMenu() {
  body.classList.remove("menuOverlayVisible");
  body.classList.add("menuOverlayInvisible");
  body.style.overflow = "";
}

hamburgergomb.onclick = openMenu;
bottomMenu.onclick = openMenu;

closeNav.onclick = closeMenu;
menuOverlay.onclick = closeMenu;

function updateNav() {
  if (hover || scrolledOver || waitingForHeight) {
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
  if (window.scrollY > 0 && !scrolledOver) {
    scrolledOver = true;
    waitingForHeight = false;
    nav.classList.add("scrolledNav");
    titleSpan.classList.add("scrolledNav");
    updateNav();
  } else if (window.scrollY === 0 && scrolledOver) {
    scrolledOver = false;
    waitingForHeight = true;
    nav.classList.remove("scrolledNav");
    titleSpan.classList.remove("scrolledNav");
  }
};

function heightDone(event) {
  if (event.propertyName === "height" && waitingForHeight) {
    waitingForHeight = false;
    updateNav();
  }
}

nav.addEventListener("transitionend", heightDone);
nav.addEventListener("transitioncancel", heightDone);
