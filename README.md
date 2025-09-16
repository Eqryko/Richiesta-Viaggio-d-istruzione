# Richiesta Viaggio d'istruzione

Creare la pagina web "Modulo.html" per inviare le richieste riguardo al viaggio d'istruzione con le seguenti informazioni:
Titolo: MODULO di Richiesta Viaggio d'Istruzione
 -Barra di navigazione con i seguenti link: home dell'ITIS Rossi, modulo2, modulo3.

 -paragrafo1:
Docente richiedente -> campo di testo
Classe -> campo di testo
numero di partecipanti -> numerico >0 e <50
Elenco partecipanti -> tabella
data e ora di partenza -> datetime
Preferenze meta: Barcellona/Praga/Berlino/Parigi   -> casella di riepilogo
Immagini rappresentative delle città, ridimensionate a 300x200 e contenenti link alle rispettive pagine wikipedia 
Preferenze mezzo: Aereo/Treno/Autobus/Crociera   -> scelta multipla
   -paragrafo2:
trattamento: b&b/Mezza pensione/Pensione completa    -> scelta univoca con pulsanti.
quota pro-capite  -> formato €
email del docente -> formato email
Note -> memo
   -Pie' di pagina con i seguenti link: contatti, credits.

La pagina deve risultare strutturata e chiaramente indentata, avendo cura di distinguere titoli e paragrafi. 
Inoltre, racchiudere in un form i contenuti rilevanti, ed inserire i pulsanti Invia  e Cancella.
Consegnare la progettazione (digitale o foto del cartaceo).
Determinare quali altri controlli/elementi si potrebbero aggiungere.
+ +++++ +++ +++ +++ +++ +++ +
Riferimenti: Libro di testo p.207 e 213; w3school.
PHP: impostare il form con metodo GET per passare i dati del modulo alla pagina "Stampa.php".
Creare la copia
ModuloPost.html ed impostare il form con metodo POST.
Eseguire una stampa semplice, con istruzione echo, per visualizzare:
il messaggio Riepilogo della richiesta di viaggio:<br>
i valori dei campi di input Docente, classe, meta   (-> sperimentare l'array $_GET[ <variabile>]  )
Prevedere NELLA STESSA PAGINA due sezioni, separate da linea orizzontale <hr>, rispettivamente con le informazioni presenti negli array $_GET e $_POST.
