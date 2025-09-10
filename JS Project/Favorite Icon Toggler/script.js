const favoriteIcons = document.querySelectorAll(".favorite-icon");

favoriteIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    icon.classList.toggle("filled");
    icon.innerHTML = icon.classList.contains("filled") ? "&#10084;" : "&#9825;";
  });
});
