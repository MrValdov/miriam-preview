"use strict";
(() => {
  const ids = new Set(["approach-leader", "approach-communication", "approach-team"]);
  function reveal(id) {
    if (!ids.has(id)) return null;
    const pillar = document.getElementById(id);
    if (pillar instanceof HTMLDetailsElement) pillar.open = true;
    return pillar;
  }
  document.querySelectorAll("a[data-pillar]").forEach(link => {
    link.addEventListener("click", () => reveal(link.dataset.pillar));
  });
  function followHash() {
    const pillar = reveal(window.location.hash.slice(1));
    if (pillar) requestAnimationFrame(() => pillar.scrollIntoView({block: "start"}));
  }
  window.addEventListener("hashchange", followHash);
  if (window.location.hash) followHash();
})();
