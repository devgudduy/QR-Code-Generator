const qrInput = document.querySelector("#qr-input");
const qrImg = document.querySelector("#qr-img");
const qrButton = document.querySelector("#qr-button");
// console.log(qrInput, qrImg, qrButton); // Check if the elements are selected

// Event Listener
qrButton.addEventListener("click", () => {
  const inputValue = qrInput.value;
  // console.log(inputValue); // Check if the input value is captured
  // Website -> goqr.me
  if (!inputValue) {
    alert("Please enter a valid URL");
    return;
  } else {
    const api = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;
    qrImg.src = api;
    qrImg.alt = `QR code for ${inputValue}`;
  }
  qrInput.value = "";
});
