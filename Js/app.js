"use strict";
const header = document.querySelector(".header");

// HEADER TOGGLE//
const navView = document.querySelector(".header__expand");

function toggle() {
  const navList = document.querySelector(".nav__list");
  navList.classList.toggle("nav-toggle");
}
navView.addEventListener("click", function (e) {
  toggle();
});
