let nomeUtente = prompt('Come ti chiami?');

let cognomeUtente = prompt ('E il cognome?')

let colorePreferito = prompt ('Dimmi il tuo colore preferito!');

document.getElementById('password').innerHTML +=
`${nomeUtente}${cognomeUtente}${colorePreferito}99`;



var words = [ 'Password Insicure SRL.', 'Creiamo password insicure per tutti. ', 'Dal 1999.' , 'Veramente poco sicure.' , 'Non esitare a contattarci se tieni poco ai tuoi dati.'];
var counter = 0;
var word = document.getElementById("keep");
setInterval(update_carousel_words, 900);
function update_carousel_words() {
  word.innerHTML = words[counter];
  counter++;

  if (counter >= words.length) {
    counter = 0;
  }
}