const menuBtn = document.querySelector("#menu-Btn");
const menu = document.querySelector(".nav-list");
const nav = document.querySelector(".nav-bar");

menuBtn.addEventListener("click", function () {
  menu.classList.toggle("open");
  menuBtn.classList.toggle("bx-x");
  nav.classList.toggle("open");
});

window.onscroll = () => {
  menu.classList.remove("open");
  menuBtn.classList.remove("bx-x");
  nav.classList.remove("open");
};

const home = document.querySelector(".home");

home.addEventListener("click", function () {
  menu.classList.remove("open");
  menuBtn.classList.remove("open");
  nav.classList.remove("open");
});
