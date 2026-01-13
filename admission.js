// Simple script for future enhancements (e.g., smooth scrolling or form handling)

console.log("Admissions page loaded successfully!");

// Optional: Smooth scroll for anchor links (if added later)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});