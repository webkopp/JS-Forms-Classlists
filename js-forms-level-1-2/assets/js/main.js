// In dieser Aufgabe sollst du ein Formular zur Berechnung deines Alters erstellen.
// Erstelle dazu ein Formular, in dem du dein Geburtsjahr eingeben kannst, sowie einen Button, der die Funktion dann ausführt.
// Definiere eine Funktion, die dein Alter in Jahren ausgibt. Dein Alter soll dann in deinem HTML ausgegeben werden.

const date = new Date()
const thisYear = date.getFullYear()
console.log(thisYear)
function years() {
    let bYear = Number(document.querySelector(".date").value)
    let output = document.querySelector(".output")
    output.innerHTML = thisYear - bYear
}
