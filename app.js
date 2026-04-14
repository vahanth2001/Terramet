document.addEventListener("DOMContentLoaded", function () {

  // ======================
  // HERO SLIDER
  // ======================
  const slides = document.querySelectorAll(".slide");
  let index = 0;
  let interval;

  function showSlide() {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
    index = (index + 1) % slides.length;
  }

  function startSlider() {
    interval = setInterval(showSlide, 4000);
  }

  function stopSlider() {
    clearInterval(interval);
  }

  // Start slider
  if (slides.length > 0) {
    startSlider();

    const hero = document.querySelector(".hero");
    if (hero) {
      hero.addEventListener("mouseenter", stopSlider);
      hero.addEventListener("mouseleave", startSlider);
    }
  }

  // ======================
  // HAMBURGER MENU
  // ======================
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });
  }

  // ======================
  // MOBILE DROPDOWN
  // ======================
  const dropdowns = document.querySelectorAll(".dropdown > a");

  dropdowns.forEach(item => {
    item.addEventListener("click", function (e) {
      if (window.innerWidth <= 992) {
        e.preventDefault();
        const submenu = this.nextElementSibling;
        submenu.classList.toggle("show");
      }
    });
  });

});

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});