Album Nidek è un'applicazione web che permette di visualizzare e gestire album fotografici, con funzionalità di ricerca e ordinamento. L'app consente di sfogliare i titoli degli album e visualizzare il proprietario, offrendo una navigazione interattiva verso i dettagli degli album, inclusa una galleria fotografica con titoli.

## Funzionalità

- **Tabella ordinabile**: Gli album possono essere ordinati in modo crescente o decrescente sia per titolo dell'album che per nome utente del proprietario.
- **Barra di ricerca**: Un campo di ricerca permette di filtrare gli album in base al titolo, facilitando la navigazione tra i contenuti.
- **Dettaglio dell'album**: Cliccando su una riga della tabella si accede alla pagina di dettaglio, dove vengono mostrati:
  - Nome del proprietario dell'album
  - Titolo dell'album
  - Galleria di tutte le foto dell'album, ognuna con il suo titolo.

## Installazione

Segui questi semplici passaggi per installare e avviare l'applicazione sul tuo ambiente locale:

````bash
# Clona il repository
git clone https://github.com/SimoneV91/album-nidek.git

# Vai nella directory del progetto
cd album_test

# Installa le dipendenze
npm install

# Avvia l'applicazione
npm start

L'app sarà disponibile all'indirizzo http://localhost:3000 di default.

Verione Node.js: v16.14.0

Tecnologie utilizzate
React: Per la creazione dell'interfaccia utente dinamica e componentizzata.
TypeScript: Per una tipizzazione sicura e robusta del codice JavaScript.
React Router: Per la gestione della navigazione all'interno dell'app.
Tailwind CSS: Per lo styling flessibile e reattivo dell'interfaccia.
Fetch API: Per effettuare chiamate HTTP e ottenere i dati da servizi REST.
LocalStorage: per la memorizzazione di alcuni dati nello storage

=======
# React + TypeScript + Vite
