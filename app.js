document.addEventListener("DOMContentLoaded", function () {
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
  startSlider();

  // Pause on hover
  const hero = document.querySelector(".hero");
  hero.addEventListener("mouseenter", stopSlider);
  hero.addEventListener("mouseleave", startSlider);
});

document.addEventListener("DOMContentLoaded", function () {

  // HERO SLIDER
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

  startSlider();

  const hero = document.querySelector(".hero");
  hero.addEventListener("mouseenter", stopSlider);
  hero.addEventListener("mouseleave", startSlider);


  // HAMBURGER MENU
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });


  // MOBILE DROPDOWN
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

// SCROLL ANIMATION
const elements = document.querySelectorAll(".card, .about, .cta");

function revealOnScroll() {
  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);