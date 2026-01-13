document.addEventListener("DOMContentLoaded", () => {
  // Generate QR Code for Girls Hostel location using your provided link
  const qrBox = document.getElementById("qrBox");
  const locationUrl = "https://maps.app.goo.gl/y9kCcBvnXCRKDBqCA";

  new QRCode(qrBox, {
    text: locationUrl,
    width: 200,
    height: 200,
    colorDark: "#004080",
    colorLight: "#ffffff"
  });
});