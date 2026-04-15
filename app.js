document.addEventListener("DOMContentLoaded", () => {

  /* ======================
     HERO SLIDER
  ====================== */
  const slides = document.querySelectorAll(".slide");
  let index = 0;
  let interval;

  if (slides.length > 0) {

    const showSlide = () => {
      slides.forEach(slide => slide.classList.remove("active"));
      slides[index].classList.add("active");
      index = (index + 1) % slides.length;
    };

    const startSlider = () => {
      interval = setInterval(showSlide, 4000);
    };

    const stopSlider = () => {
      clearInterval(interval);
    };

    startSlider();

    const hero = document.querySelector(".hero");
    if (hero) {
      hero.addEventListener("mouseenter", stopSlider);
      hero.addEventListener("mouseleave", startSlider);
    }
  }


  /* ======================
     HAMBURGER MENU
  ====================== */
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");
  const closeMenu = document.getElementById("close-menu");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("active");

      hamburger.textContent =
        navMenu.classList.contains("active") ? "✕" : "☰";

      document.body.classList.toggle("menu-open");
    });
  }

  if (closeMenu && navMenu) {
    closeMenu.addEventListener("click", () => {
      navMenu.classList.remove("active");
      document.body.classList.remove("menu-open");
      hamburger.textContent = "☰";
    });
  }


  /* ======================
     MOBILE DROPDOWN
  ====================== */
  const dropdownLinks = document.querySelectorAll(".dropdown > a");

  dropdownLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      if (window.innerWidth <= 992) {
        e.preventDefault();

        const submenu = this.nextElementSibling;

        document.querySelectorAll(".submenu").forEach(menu => {
          if (menu !== submenu) menu.classList.remove("show");
        });

        submenu.classList.toggle("show");
      }
    });
  });

}); // ✅ properly closed DOMContentLoaded


/* ======================
   NAVBAR SCROLL EFFECT
====================== */
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");

  if (!navbar) return;

  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});