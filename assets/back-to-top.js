"use strict";
(() => {
  const control = document.querySelector(".back-to-top");
  const hero = document.querySelector(".hero");
  if (!control || !hero) return;
  const update = () => { control.hidden = hero.getBoundingClientRect().bottom > 0; };
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(update, {threshold: 0});
    observer.observe(hero);
  } else {
    window.addEventListener("scroll", update, {passive: true});
    window.addEventListener("resize", update);
  }
  window.addEventListener("pageshow", update);
  update();
  control.addEventListener("click", event => {
    event.preventDefault();
    window.scrollTo({top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth"});
    const home = document.querySelector("header a");
    if (home) home.focus({preventScroll: true});
  });
})();
