let body = document.querySelector("body");
let nav = document.querySelector("nav");
let title = document.querySelector("#websiteTitle");
let hamburger = document.querySelector("#hamburger").querySelector("svg");
let profileIcon = document.querySelector("#profileIcon").querySelector("svg");
let menuOverlay = document.querySelector("#menuOverlay");
let closeNav = document.querySelector("#closeNav");
let bottomMenu = document.querySelector("#bottomMenu");
let bottomHome = document.querySelector("#bottomHome");

let hover = false;
let scrolledOver = false;

function openMenu() {
  body.classList.toggle("menuOverlayVisible");
  body.classList.toggle("menuOverlayInvisible");
  body.style.overflow = "hidden";
};


function CloseMenu() {
  body.classList.toggle("menuOverlayVisible");
  body.classList.toggle("menuOverlayInvisible");
  body.style.overflow = "";
}

hamburger.onclick = openMenu;
bottomMenu.onclick = openMenu;

closeNav.onclick = CloseMenu;
menuOverlay.onclick = CloseMenu;

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

bottomHome.onclick = function (event) {
  event.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
};