document.addEventListener("DOMContentLoaded", () => {
  // Generate QR Code for Boys Hostel 1 location using your provided link
  const qrBox = document.getElementById("qrBox");
  const locationUrl = "https://maps.app.goo.gl/Hw7n6L8bDscnxk4b7";

  new QRCode(qrBox, {
    text: locationUrl,
    width: 200,
    height: 200,
    colorDark: "#004080",
    colorLight: "#ffffff"
  });
});