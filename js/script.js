var mail = ["ab@gmail.com", "bc@gmail.com", "cd@gmail.com", "de@gmail.com", "ef@gmail.com", "fg@gmail.com", "gh@gmail.com", "hi@gmail.com"];
var insert = prompt("Inserisci la tua mail")

for (var i = 0; i < mail.length; i++) {
  if (insert == mail[i]) {
    alert("Accesso consentito");
    break
  }
  else {
    alert("Accesso negato");
    continue
  }
}
