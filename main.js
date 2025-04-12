let Auswahl;
let PC_Auswahl;

function Schere_isPressed() {
    Auswahl = "Schere";
    document.getElementById("Schere").style.backgroundColor = "green";
    console.log("Meine Auswahl: " + Auswahl);
}
function Stein_isPressed() {
    Auswahl = "Stein";
    document.getElementById("Stein").style.backgroundColor = "green";
    console.log("Meine Auswahl: " + Auswahl);
}
function Papier_isPressed() {
    Auswahl = "Papier";
    document.getElementById("Papier").style.backgroundColor = "green";
    console.log("Meine Auswahl: " + Auswahl);
}
function Choosing() {
    PC_Auswahl = Math.floor(Math.random() * 3) + 1;
    if (PC_Auswahl == 1) {
        PC_Auswahl = "Schere";
    } else if (PC_Auswahl == 2) {
        PC_Auswahl = "Stein";
    } else if (PC_Auswahl == 3) {
        PC_Auswahl = "Papier";
    }
    console.log("Bot Auswahl: " + PC_Auswahl);
}
function Check() {
    if (Auswahl == PC_Auswahl) {
        console.log("Unentschieden!");
        document.getElementById("Ausgang").innerHTML = "Unentschieden!";
    } else if (
        (Auswahl == "Schere" && PC_Auswahl == "Papier") ||
        (Auswahl == "Stein" && PC_Auswahl == "Schere") ||
        (Auswahl == "Papier" && PC_Auswahl == "Stein")
    ) {
        console.log("Du hast gewonnen!");
        document.getElementById("Ausgang").innerHTML = "Du hast gewonnen!";
    } else {
        console.log("Du hast verloren!");
        document.getElementById("Ausgang").innerHTML = "Du hast verloren!";
    }
}