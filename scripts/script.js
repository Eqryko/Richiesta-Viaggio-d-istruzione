function aggiornaImmagine() {
    let scelta = document.getElementById("mete").value;

    // Associo le mete agli ID delle immagini
    let immagini = {
        praga: "img1",
        andalusia: "img2",
        barcellona: "img3",
        berlino: "img4",
        parigi: "img5"
    };

    // Nascondo tutte le immagini
    for (let meta in immagini) {
        document.getElementById(immagini[meta]).style.display = "none";
    }

    // Mostro solo quella scelta
    document.getElementById(immagini[scelta]).style.display = "block";
}

function apriWiki(citta) {
    let links = {
        praga: "https://it.wikipedia.org/wiki/Praga",
        andalusia: "https://it.wikipedia.org/wiki/Andalusia",
        barcellona: "https://it.wikipedia.org/wiki/Barcellona",
        berlino: "https://it.wikipedia.org/wiki/Berlino",
        parigi: "https://it.wikipedia.org/wiki/Parigi"
    };

    // Apre la pagina in una nuova scheda
    window.open(links[citta], "_blank");
}