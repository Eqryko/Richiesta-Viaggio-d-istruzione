function aggiornaImmagine() {
    var mete = document.getElementsByName("mete");
    for(var i < mete.length){

    }

    // Nasconde tutte le immagini
    document.getElementById("img1").style.display = "none";
    document.getElementById("img2").style.display = "none";
    document.getElementById("img3").style.display = "none";
    document.getElementById("img4").style.display = "none";
    document.getElementById("img5").style.display = "none";

    // Mostra solo quella corretta
    switch (mete) {
        case "Praga":
            document.getElementById("img1").style.display = "block";
            break;
        case "Andalusia":
            document.getElementById("img2").style.display = "block";
            break;
        case "Barcellona":
            document.getElementById("img3").style.display = "block";
            break;
        case "Berlino":
            document.getElementById("img4").style.display = "block";
            break;
        case "Parigi":
            document.getElementById("img5").style.display = "block";
            break;
    }
}
