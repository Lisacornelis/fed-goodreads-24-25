// Sterren klik animatie en transformatie

var sterren = document.querySelectorAll(".star");
// Dit is een loop die over alle sterren gaat. "element" refereerd naar de enkele ster.
// Met "onclick" roept het de functie "togglestar" aan.
sterren.forEach(function (element) {
  element.onclick = toggleStar;
});
// "this" betekend de functie, daarmee toggeled het de class "active".
function toggleStar() {
  this.classList.toggle("active");
}

console.log(sterren);

// Toggle Inverted Color Mode

// Voeg een event listener toe voor toetscombinaties
document.addEventListener("keydown", (event) => {
  // Controleer of de gebruiker Ctrl+I (of Cmd+I op macOS) indrukt
  const isCtrlOrCmd = event.ctrlKey || event.metaKey; // Ctrl (Windows/Linux) of Cmd (macOS)
  if (isCtrlOrCmd && event.key === "i") {
    event.preventDefault(); // Voorkom dat de browser de pagina opslaat
    document.body.classList.toggle("InvertedColors"); // Toggle de Inverted Color Mode

    // Optionele melding in de console
    console.log(
      "InvertedColors:",
      document.body.classList.contains("InvertedColors")
        ? "Actief"
        : "Uitgeschakeld"
    );
  }
});

// Button klik animatie

document.addEventListener("DOMContentLoaded", function () {
  // Selecteer de eerste knop
  const firstButton = document.querySelectorAll(".button")[0];

  // Voeg een klik event toe aan de eerste knop
  firstButton.addEventListener("click", function () {
    // Voeg de 'clicked' class toe aan de eerste knop wanneer erop wordt geklikt
    firstButton.classList.toggle("clicked");
  });
});
