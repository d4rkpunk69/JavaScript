const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const closeBtn = document.getElementById("close-btn");

galleryItems.forEach((item) => {
  item.addEventListener("click", () => {
    const fullScr = item.src.replace("-thumbnail", "");
    lightboxImage.src = fullScr;
    lightbox.style.display = "flex";
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e) => {
  e.target === lightbox ? (lightbox.style.display = "none") : undefined;
});
