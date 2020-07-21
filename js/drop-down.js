(() => {
  const refs = {
    openDropBtn: document.querySelector("[data-drop-open]"),
    closeDropBtn: document.querySelector("[data-drop-close]"),
    drop: document.querySelector("[data-drop]"),
  };

  refs.openDropBtn.addEventListener("click", toggleDrop);
  refs.closeDropBtn.addEventListener("click", toggleDrop);

  function toggleDrop() {
    refs.drop.classList.toggle("is-hidden");
  }
})();
