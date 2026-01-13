document.addEventListener("DOMContentLoaded", () => {
  // Generate QR Code for Civil Engineering Department location using your provided link
  const qrBox = document.getElementById("qrBox");
  const locationUrl = "https://maps.app.goo.gl/ZHgWSfpuYcPXZuf28";

  new QRCode(qrBox, {
    text: locationUrl,
    width: 200,
    height: 200,
    colorDark: "#004080",
    colorLight: "#ffffff"
  });

  // Accordion functionality for faculty details (only one open at a time)
  document.querySelectorAll(".faculty button").forEach(btn => {
    btn.addEventListener("click", () => {
      const targetId = btn.dataset.faculty;
      const panel = document.getElementById(targetId);

      // Close all other panels
      document.querySelectorAll(".details").forEach(p => {
        if (p !== panel) p.style.display = "none";
      });

      // Toggle current panel
      panel.style.display = panel.style.display === "block" ? "none" : "block";
    });
  });
});