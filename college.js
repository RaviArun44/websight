// Simple script for the departments page

console.log("National Engineering College Departments page loaded successfully!");

// Optional: Add smooth hover effect or future interactivity
document.querySelectorAll('.dept-list a').forEach(link => {
  link.addEventListener('mouseenter', () => {
    link.style.transform = 'scale(1.05)';
  });
  link.addEventListener('mouseleave', () => {
    link.style.transform = 'scale(1)';
  });
});