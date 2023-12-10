// Erstelle eine Formular, um das Alter von zwei Leuten zu vergleichen.
// Nutze dafür zwei Input-Felder, einen Button, der die Funktion aufruft und eine Funktion, die die Differenz in Jahren in dein HTML schreibt.

function years() {
    const ageOne = document.querySelector(".date").value
    console.log(ageOne)
    const ageTwo = document.querySelector(".date2").value
    console.log(ageTwo)
    let output = document.querySelector(".output")
    output.innerHTML = ageOne - ageTwo
}
