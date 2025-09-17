<?php
// Controllo se il form è stato inviato
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Recupero i valori del form
    $docente = htmlspecialchars($_POST['Docente']);
    $classe = htmlspecialchars($_POST['Classe']);
    $partecipanti = htmlspecialchars($_POST['Partecipanti']);
    $data = htmlspecialchars($_POST['Data']);
    $ora = htmlspecialchars($_POST['Ora']);
    $meta = htmlspecialchars($_POST['mete']);

    // Mezzi selezionati (array)
    $mezzi = isset($_POST['mezzo']) ? $_POST['mezzo'] : [];

    $trattamento = htmlspecialchars($_POST['trattamento']);
    $quota = htmlspecialchars($_POST['quota']);
    $email = htmlspecialchars($_POST['email']);
    $note = htmlspecialchars($_POST['note']);

    echo "<h1>Riepilogo Richiesta Viaggio</h1>";
    echo "<p><b>Docente:</b> $docente</p>";
    echo "<p><b>Classe:</b> $classe</p>";
    echo "<p><b>Numero partecipanti:</b> $partecipanti</p>";
    echo "<p><b>Data e Ora:</b> $data $ora</p>";
    echo "<p><b>Meta scelta:</b> $meta</p>";

    echo "<p><b>Mezzi selezionati:</b> ";
    if (!empty($mezzi)) {
        echo implode(", ", $mezzi);
    } else {
        echo "Nessun mezzo selezionato";
    }
    echo "</p>";

    echo "<p><b>Trattamento:</b> $trattamento</p>";
    echo "<p><b>Quota pro-capite:</b> € $quota</p>";
    echo "<p><b>Email docente:</b> $email</p>";
    echo "<p><b>Note:</b> $note</p>";

} else {
    echo "<p>Modulo non inviato correttamente.</p>";
}
?>
