// Erstelle ein Formular, in dem du eine Zahl eingeben kannst. Daneben steht ein Button, der eine Funktion ausführt und zwar "Verdoppel mich". Du sollst also eine Funktion deklarieren, die den Wert aus deinem Input-Feld mit 2 multipliziert. Das Ergebnis wird schließlich in deinem HTML ausgegeben.

// Gib deiner form onsubmit="return false" falls sich deine Seite nach dem Absenden neu lädt.

console.log("läuft");

function toDouble() {
    const numA = document.querySelector(".mick").value
    console.log(numA)
    
    let output = document.querySelector(".output")
    output.innerHTML = numA * 2
}