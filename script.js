const openButton = document.getElementById("open-button");
const closeButton = document.getElementById("close-button");
const panel = document.getElementById("floating-panel");

openButton.addEventListener("click", () => {
  panel.style.display = "flex";
});

closeButton.addEventListener("click", () => {
  panel.style.display = "none";
});
