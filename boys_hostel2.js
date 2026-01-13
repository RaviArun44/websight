document.addEventListener("DOMContentLoaded", () => {
  // Generate QR Code for Boys Hostel 2 location using your provided link
  const qrBox = document.getElementById("qrBox");
  const locationUrl = "https://maps.app.goo.gl/2fqWZFw3ione2ycj8";

  new QRCode(qrBox, {
    text: locationUrl,
    width: 200,
    height: 200,
    colorDark: "#004080",
    colorLight: "#ffffff"
  });
});