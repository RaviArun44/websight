console.log("NEC Homepage with Light Blink Background loaded!");

// Optional: Enhance hero fade-in
window.addEventListener("load", () => {
  document.querySelector('.hero').style.opacity = 0;
  document.querySelector('.hero').style.transition = 'opacity 2s ease';
  setTimeout(() => {
    document.querySelector('.hero').style.opacity = 1;
  }, 500);
});