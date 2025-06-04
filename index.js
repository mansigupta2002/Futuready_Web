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


const slideWrapper = document.getElementById("slideWrapper");
    const prevBtn = document.querySelector(".prev-slide");
    const nextBtn = document.querySelector(".next-slide");
    let currentSlide = 0;
    const totalSlides = 2;

    function updateSlidePosition() {
      slideWrapper.style.transform = `translateX(-${currentSlide * 50}%)`;
    }

    prevBtn.addEventListener("click", () => {
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
      updateSlidePosition();
    });

    nextBtn.addEventListener("click", () => {
      currentSlide = (currentSlide + 1) % totalSlides;
      updateSlidePosition();
    });

    updateSlidePosition();



  
