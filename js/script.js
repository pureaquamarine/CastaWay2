"use strict";

var btnNavEl = document.querySelector(".btn-mobile-nav"),
    headerEl = document.querySelector(".header");
btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
var allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function (e) {
  e.addEventListener("click", function (t) {
    t.preventDefault();
    var o = e.getAttribute("href");
    "#" === o && window.scrollTo({
      top: 0,
      behavior: "smooth"
    }), "#" !== o && o.startsWith("#") && document.querySelector(o).scrollIntoView({
      behavior: "smooth"
    }), e.classList.contains("main-nav__link") && headerEl.classList.toggle("nav-open");
  });
});
// var sectionEpisodesEl = document.querySelector(".section-about"),
//     obs = new IntersectionObserver(function (e) {
//   var t = e[0];
//   console.log(t), !1 === t.isIntersecting && document.querySelector(".header").classList.add("sticky");
// }, {
//   root: null,
//   threshold: 0
// });
// obs.observe(sectionEpisodesEl);


