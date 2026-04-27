const header = document.querySelector(".site-header");

const syncHeaderShadow = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 12);
};

syncHeaderShadow();
window.addEventListener("scroll", syncHeaderShadow, { passive: true });
