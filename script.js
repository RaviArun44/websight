console.log("NEC Homepage Loaded");

// Hero fade-in
window.addEventListener("load", () => {
  const hero = document.querySelector(".hero");
  hero.style.opacity = 0;
  hero.style.transition = "opacity 2s";
  setTimeout(() => hero.style.opacity = 1, 500);
});

// Advertisement timer + image switch
let time = 20;
const timer = document.getElementById("ad-timer");
const ad = document.getElementById("ad-overlay");
const adImage1 = document.getElementById("ad-image-1");
const adImage2 = document.getElementById("ad-image-2");

let countdown = setInterval(() => {
  time--;
  timer.innerText = time;

  // Switch to second image after 30 seconds (or adjust time)
  if (time === 10) {
    adImage1.style.display = "none";
    adImage2.style.display = "block";
  }

  if (time <= 0) {
    closeAd();
  }
}, 1000);

function closeAd() {
  ad.style.display = "none";
  clearInterval(countdown);
}
