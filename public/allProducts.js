let items = [];

async function fetchProducts() {
    try {
        const response = await fetch('http://localhost:3000/api/allProducts');
        if (!response.ok) throw new Error('Network response was not ok');
        items = await response.json();
        appendItems();
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

function appendItems() {
  const clothesList = document.querySelector(".allClothes");
  clothesList.innerHTML = '';

  items.forEach((item, index) => {
      const li = document.createElement("li");
      li.innerHTML = `
          <div id="${item._id}" class="item parent flexBetween" style="transition-delay: ${index * 0.25}s;">
              <div class="itemImg div1">
                  <img src="${item.image}" alt="${item.name}" height="400px" width="400px" />
                  <button class="wishlist-btn" aria-label="Add to wishlist">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="heart-icon">
                          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                      </svg>
                  </button>
              </div>
              <div class="info">
                  <div class="name">
                      <h5>${item.name}</h5>
                  </div>
                  <div class="price">
                      <h5>${item.price}</h5>
                  </div>
              </div>
          </div>
      `;

      // Add click event to navigate to the common page
      li.querySelector('.item').addEventListener('click', () => {
          window.location.href = `specificProduct.html?itemId=${item._id}`;
      });

      clothesList.appendChild(li);
  });

  initializeObserver();

  document.querySelectorAll(".wishlist-btn").forEach((btn) => {
      btn.addEventListener("click", function (e) {
          e.preventDefault();
          e.stopPropagation();
          this.classList.toggle("active");
          const heartIcon = this.querySelector(".heart-icon");
          heartIcon.setAttribute("fill", this.classList.contains("active") ? "red" : "none");
      });
  });
  
}


function initializeObserver() {
    const items = document.querySelectorAll(".item");

    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    items.forEach((item) => {
        observer.observe(item);
    });
}

document.addEventListener("DOMContentLoaded", fetchProducts);

// Mobile menu toggle
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navbar = document.querySelector(".navbar");

    if (menuToggle) {
        menuToggle.addEventListener("click", () => {
            navbar.classList.toggle("mobile-active");
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth",
            });
        });
    });
});

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