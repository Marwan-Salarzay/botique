document.querySelector('.newArrivals').addEventListener('onclick',()=>{
  window.location.href = "/public/newArrivals.html"
})
 
 document.addEventListener("DOMContentLoaded", () => {
  
    // Mobile menu toggle
    const menuToggle = document.querySelector(".menu-toggle")
    const navbar = document.querySelector(".navbar")
  
    if (menuToggle) {
      menuToggle.addEventListener("click", () => {
        navbar.classList.toggle("mobile-active")
      })
    }
  })
  
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
  
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      })
    })
  })
  
  // Hamburger menu functionality
  document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const navContainer = document.getElementById('navContainer');
    
    menuToggle.addEventListener('click', function() {
      menuToggle.classList.toggle('active');
      navContainer.classList.toggle('active');
    });
    
    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-container a');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        menuToggle.classList.remove('active');
        navContainer.classList.remove('active');
      });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      const isClickInsideNav = navContainer.contains(event.target);
      const isClickOnToggle = menuToggle.contains(event.target);
      
      if (!isClickInsideNav && !isClickOnToggle && navContainer.classList.contains('active')) {
        menuToggle.classList.remove('active');
        navContainer.classList.remove('active');
      }
    });
  });