// var mail = ["ab@gmail.com", "bc@gmail.com", "cd@gmail.com", "de@gmail.com", "ef@gmail.com", "fg@gmail.com", "gh@gmail.com", "hi@gmail.com"];
//
// var insert = prompt("Inserisci la tua mail")
//
// var control = false
//
//
// for (var i = 0; i < mail.length; i++) {
//   if (insert == mail[i]) {
//     control = true;
//   }
// }
//
// if (control) {
//   alert("Accesso consentito");
//   console.log("Accesso consentito");
//  }
// else {
//   alert("Accesso negato");
//   console.log("Accesso negato");
// }

// Gioco dei dadi
// Generare un numero random da 1  a 6, sia per il giocatore sia per il computer
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Se dobbiamo confrontare qualcosa che "cosa" ci serve?
// Consigli del giorno:
// 1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// 2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
// 3. si ma noi cosa vogliamo fare?
// 4. torniamo a scrivere in italiano
// 5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"

var lancioUtente = Math.floor(Math.random()*6) + 1;
alert("Il tuo lancio di dadi ha dato come esito: " + lancioUtente);
document.getElementById('lancio_utente').innerHTML = lancioUtente

var lancioPC = Math.floor(Math.random()*6) + 1;
alert("Il lancio di dadi del banco ha dato come esito: " + lancioPC);
document.getElementById('lancio_pc').innerHTML = lancioPC

if (lancioUtente > lancioPC) {
  document.getElementById('esito').innerHTML = "Hai vinto!"
  document.getElementById('lancio_utente').style.color = "blue"
  document.getElementById('esito').style.color = "green"

} else if (lancioPC > lancioUtente) {
  document.getElementById('esito').innerHTML = "Hai perso, ritenta!"
  document.getElementById('lancio_pc').style.color = "blue"
  document.getElementById('esito').style.color = "red"
} else {
  document.getElementById('esito').innerHTML = "Pareggio"
  document.getElementById('esito').style.color = "yellow"
}
