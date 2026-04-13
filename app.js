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