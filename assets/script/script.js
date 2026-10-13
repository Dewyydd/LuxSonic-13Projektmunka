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
/* ---------- Scroll animációk ---------- */
(function () {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce || !("IntersectionObserver" in window)) return;

  const groups = [
    [".sectionHead h2", "up"],
    [".tile", "up"],
    [".featureImg", "left"],
    [".featureText > *", "up"],
    [".galleryHead > *", "up"],
    [".gThumb", "zoom"],
    [".footCols > div", "up"],
    [".footLegal", "up"],
    [".wordmark", "up"],
  ];

  const items = [];
  groups.forEach(([selector, type]) => {
    document.querySelectorAll(selector).forEach((el, i) => {
      el.classList.add("reveal", "reveal-" + type);
      el.style.transitionDelay = (i % 5) * 0.1 + "s";
      items.push(el);
    });
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -5% 0px" }
  );
  items.forEach((el) => observer.observe(el));

  // Enyhe parallax a hero képen
  const hero = document.querySelector("#underNavImg");
  let ticking = false;
  window.addEventListener(
    "scroll",
    () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        if (window.scrollY < window.innerHeight) {
          hero.style.backgroundPositionY = window.scrollY * 0.3 + "px";
        }
        ticking = false;
      });
    },
    { passive: true }
  );
})();