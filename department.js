document.addEventListener("DOMContentLoaded", () => {
  // Generate QR Code for CSE Department location (using campus coordinates - specific building approximated)
  const qrBox = document.getElementById("qrBox");
  const locationUrl = "https://www.google.com/maps/place/4RWJ%2BPVQ,+K.R.Nagar,+Kovilpatti,+Nallatinputhur,+Tamil+Nadu+628503/@9.1472272,77.8307169,431m/data=!3m1!1e3!4m6!3m5!1s0x3b06ae09208dc96d:0x91bc53b29c735832!8m2!3d9.1468582!4d77.8323058!16s%2Fg%2F11rklkhx5v?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA2OUgBUAM%3D";

  new QRCode(qrBox, {
    text: locationUrl,
    width: 200,
    height: 200,
    colorDark: "#004080",
    colorLight: "#ffffff"
  });

  // Accordion for faculty details (only one open at a time)
  document.querySelectorAll(".faculty button").forEach(btn => {
    btn.addEventListener("click", () => {
      const targetId = btn.dataset.faculty;
      const panel = document.getElementById(targetId);

      // Close all others
      document.querySelectorAll(".details").forEach(p => {
        if (p !== panel) p.style.display = "none";
      });

      // Toggle current
      panel.style.display = panel.style.display === "block" ? "none" : "block";
    });
  });
});