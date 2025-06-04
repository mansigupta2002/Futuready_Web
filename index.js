// Navbar

const toggleBtn = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('close-btn');

toggleBtn.addEventListener('click', () => {
  sidebar.classList.add('open');
});

closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('open');
});

// Slider

let slides = document.querySelectorAll(".brand-slide");
let currentSlide = 0;

setInterval(() => {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}, 4000);

