document.addEventListener("DOMContentLoaded", function () {
  const accordions = document.querySelectorAll(".accordion");
  const modal = document.querySelector(".modal");
  const modalImg = document.querySelector(".modal-content");
  const captionText = document.querySelector(".caption");

  // Funktion for at åbne modal og vise det klikkede billede
  function openImage(img) {
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
  }

  // Tilføj klikhåndtering til hvert billede i accordion
  const images = document.querySelectorAll(".myImg");
  images.forEach((img) => {
    img.addEventListener("click", function (e) {
      e.stopPropagation();
      openImage(img);
    });
  });

  // Luk modalen, når der klikkes uden for billedet
  modal.onclick = function (e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  };

  // Klikhåndtering for accordion-header
  accordions.forEach((accordion) => {
    const accordionHeader = accordion.querySelector(".accordion_header");

    accordionHeader.addEventListener("click", (e) => {
      e.stopPropagation();
      accordion.classList.toggle("active");
    });
  });

  // Klikhåndtering for kryds-box (lukning af accordion-body)
  const krydsBoxes = document.querySelectorAll(".kryds_box");
  krydsBoxes.forEach((box) => {
    box.addEventListener("click", function (e) {
      e.stopPropagation();
      const accordionBody = box
        .closest(".accordion")
        .querySelector(".accordion_body");
      accordionBody.classList.toggle("active");
    });
  });
});
