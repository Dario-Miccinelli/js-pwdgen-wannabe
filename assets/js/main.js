let nomeUtente = prompt('Come ti chiami?');

let cognomeUtente = prompt ('E il cognome?')

let colorePreferito = prompt ('Dimmi il tuo colore preferito!');

document.getElementById('password').innerHTML +=
`${nomeUtente}${cognomeUtente}${colorePreferito}99`;