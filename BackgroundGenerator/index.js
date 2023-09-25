function generateRandomColor() {
    // Generate a random color code
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  function updateBackgroundColor() {
    // Set the background color to a random color
    const randomColor = generateRandomColor();
    document.body.style.backgroundColor = randomColor;
    document.getElementById("colorDisplay").textContent = randomColor;
  }

  function copyToClipboard() {
    // Copy the generated color code to the clipboard
    const colorCode = document.getElementById("colorDisplay").textContent;
    const tempInput = document.createElement("input");
    tempInput.value = colorCode;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    alert("Color code copied to clipboard: " + colorCode);
  }

  document
    .getElementById("generateButton")
    .addEventListener("click", updateBackgroundColor);
  document
    .getElementById("copyButton")
    .addEventListener("click", copyToClipboard);

  // Initial background color generation
  updateBackgroundColor();