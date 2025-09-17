function aggiornaImmagine() {
    var radios = document.getElementsByName("meta");
    var valoreSelezionato;

    // radio 
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            valoreSelezionato = radios[i].value;
            break;
        }
    }

    // Nasconde tutte le immagini
    document.getElementById("img1").style.visibility = "hidden";
    document.getElementById("img2").style.visibility = "hidden";
    document.getElementById("img3").style.visibility = "hidden";
    document.getElementById("img4").style.visibility = "hidden";
    document.getElementById("img5").style.visibility = "hidden";

    // Mostra solo quella corretta
    switch (valoreSelezionato) {
        case "Praga":
            document.getElementById("img1").style.visibility = "visible";
            break;
        case "Andalusia":
            document.getElementById("img2").style.visibility = "visible";
            break;
        case "Barcellona":
            document.getElementById("img3").style.visibility = "visible";
            break;
        case "Berlino":
            document.getElementById("img4").style.visibility = "visible";
            break;
        case "Parigi":
            document.getElementById("img5").style.visibility = "visible";
            break;
    }
}
