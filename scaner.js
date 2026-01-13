document.addEventListener("DOMContentLoaded", () => {
  const readerDiv = document.getElementById("reader");
  const statusP   = document.getElementById("status");

  // Generate QR code for CSE department with the specified location
  QRCode.toCanvas(document.getElementById("qr-cse"), "https://maps.app.goo.gl/57zErXp5i9X6mAxi9", { width: 200 }, function (error) {
    if (error) console.error(error);
  });

  const scanner = new Html5QrcodeScanner(
    "reader",
    { fps: 10, qrbox: 250, rememberLastUsedCamera: true },
    false
  );

  function onSuccess(decodedText) {
    scanner.clear().then(() => {
      statusP.textContent = "Decoded pathway: " + decodedText;
    });
  }
  scanner.render(onSuccess, /* onFailure */ () => {});
});
