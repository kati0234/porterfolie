//kalder aller accoridan
const accordions = document.querySelectorAll(".accordion");
// Henter modalen, billedet i modalen og billedteksten ved hjælp af klasser
const modals = document.getElementsByClassName("modal");
const modalImgs = document.getElementsByClassName("modalImg");
const captionTexts = document.getElementsByClassName("caption");

//Når du klikker på en accordion, skal den skifte sin tilstand mellem åben og lukket.
//Hvis den er åben og du klikker igen, skal den lukke sig.

accordions.forEach((accordion) => {
  accordion.addEventListener("click", (e) => {
    e.stopPropagation();
    accordion.classList.toggle("active");

    // Skjul modalen ved at ændre dens display-status til "none"
    modal.style.display = "none";
  });
});
//Når du klikker på billedet inde i en accordion, skal modalvinduet åbne sig og vise billedet.
//Klikning på billedet skal ikke påvirke accordionens tilstand.
accordions.forEach((accordion) => {
  const img = accordion.querySelector(".img");

  img.onclick = function (e) {
    e.stopPropagation();
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  };
});
//Når du klikker uden for billedet i modalvinduet, skal modalen lukke sig.
//Klikning på modalvinduet selv skal ikke påvirke accordionens tilstand.
modal.onclick = function (e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};
//Hvis du har en header inde i accordion, kan du tilføje en klikhåndtering for at lukke accordionen. det her er forkert
accordions.forEach((accordion) => {
  const accordionHeader = accordion.querySelector(".accordion_header");

  accordionHeader.addEventListener("click", (e) => {
    e.stopPropagation();
    accordion.classList.remove("active");
  });
});
