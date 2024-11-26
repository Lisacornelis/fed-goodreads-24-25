// dit was om te checken of het goed is gekoppeld:
// console.log("hallo");
// Dit is de variabele waar het in is opgeslagen (eerste poging):
// var sterren = document.querySelectorAll(".star");
// sterren.onclick = toggleStar;
// function toggleStar() {
//   sterren.classList.toggle(".active");
// }
// console.log(sterren);
// Bovenste poging lukte niet, hieronder lukte het wel.
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
