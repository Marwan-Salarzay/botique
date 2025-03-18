let currentSlide = 0
const slideInterval = 3000
let slideTimer

function showSlide(index) {
  const slides = document.querySelectorAll(".slide")
  const totalSlides = slides.length

  // Hide all slides first
  slides.forEach((slide) => {
    slide.style.display = "none"
    slide.classList.remove("fade")
  })

  // Update current slide index with bounds checking
  if (index >= totalSlides) {
    currentSlide = 0
  } else if (index < 0) {
    currentSlide = totalSlides - 1
  } else {
    currentSlide = index
  }

  // Show and animate only the current slide
  slides[currentSlide].style.display = "block"
  slides[currentSlide].classList.add("fade")

  // Reset the timer when manually changing slides
  resetTimer()
}

// Function to change slides manually
function changeSlide(n) {
  showSlide(currentSlide + n)
}

// Reset the automatic slide timer
function resetTimer() {
  clearInterval(slideTimer)
  slideTimer = setInterval(() => {
    changeSlide(1)
  }, slideInterval)
}

// Initialize the slider
document.addEventListener("DOMContentLoaded", () => {
  // Set up initial slide
  showSlide(currentSlide)

  // Start automatic slideshow
  resetTimer()
})

