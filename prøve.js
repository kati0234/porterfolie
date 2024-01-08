// Først samler jeg alle accordions og gemmer dem i en variabel
const accordions = document.querySelectorAll(".accordion");

// Tilføj klikhåndtering til hver accordion
accordions.forEach((accordion) => {
  accordion.addEventListener("click", (e) => {
    e.stopPropagation();
    accordion.classList.toggle("active");

    // Skjul modalen ved at ændre dens display-status til "none"
    modal.style.display = "none";
  });

  // Find billedet inde i den aktuelle accordion
  const img = accordion.querySelector(".myImg");

  // Tilføj klikhåndtering til billedet
  img.addEventListener("click", (e) => {
    e.stopPropagation();

    // Find det nærmeste modal-element i forhold til det klikkede billede
    const modal = accordion.querySelector(".myModal");
    const modalImg = modal.querySelector(".modal-content");
    const captionText = modal.querySelector(".caption");

    // Åbn modalen
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
  });

  // Find krydset inde i den aktuelle accordion
  const closeIcon = accordion.querySelector(".kryds_box");

  // Tilføj klikhåndtering til krydset for at man kan åbne accordian
  closeIcon.addEventListener("click", (e) => {
    console.log("luk");
    closeIcon.classList.toggle("active");
    // e.stopPropagation();
  });

  // Find accordion_header inden i den aktuelle accordion
  const accordionHeader = accordion.querySelector(".accordion_header");

  // Tilføj klikhåndtering til accordion_header for at lukke accordion
  accordionHeader.addEventListener("click", () => {
    console.log("lukker acordian hedder");
    accordion.classList.remove("active");
  });
});

// Tilføj klikhåndtering til modalen for at lukke den ved klik uden for billedet
document.addEventListener("click", () => {
  const modals = document.querySelectorAll(".myModal");
  modals.forEach((modal) => {
    modal.style.display = "none";
  });
});
