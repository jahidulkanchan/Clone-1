const crossbar = document.getElementById("crossBar");
const form = document.getElementById("form");
const payButton = document.getElementById("payBtn");
crossbar.addEventListener("click", () => {
  payButton.style.display = "block";
  payButton.style.opacity = "1";
  window.location.reload();
});
payButton.addEventListener("click", () => {
  form.style.transform = "scale(1)";
  payButton.style.opacity = 0;
  form.style.height = "100%";
});
