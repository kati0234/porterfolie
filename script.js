// Vent på, at DOM'en er fuldt indlæst, før vi kører koden
document.addEventListener("DOMContentLoaded", function () {
  // Hent alle elementer med klassen "accordion"
  const accordions = document.querySelectorAll(".accordion");
  // Hent referencer til modal-elementerne
  const modal = document.querySelector(".modal");
  const modalImg = document.querySelector(".modal-content");
  const captionText = document.querySelector(".caption");
  const modalclose = modal.querySelector(".close");
  // tilføjer lydt til krys i modal
  modalclose.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    modal.style.display = "none";
  });
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
      //stopper den normale klik på den normale klik
      e.preventDefault();
      e.stopPropagation();
      openImage(img);
      console.log("img");
    });
  });

  // Luk modalen, når der klikkes uden for billedet
  modal.onclick = function (e) {
    e.preventDefault();
    if (e.target === modal) {
      modal.style.display = "none";
    }
  };

  // Klikhåndtering for accordion-header
  accordions.forEach((accordion) => {
    const accordionHeader = accordion.querySelector(".accordion_header");

    accordionHeader.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      accordion.classList.toggle("active");
    });
  });
});
