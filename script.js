console.log("JS is connected! 🚀");
const toggleButton = document.getElementById("theme-toggle");

toggleButton.addEventListener("click", () => {
  const isDark = document.body.getAttribute("data-theme") === "dark";
  document.body.setAttribute("data-theme", isDark ? "light" : "dark");
});