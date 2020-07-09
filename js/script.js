var mail = ["ab@gmail.com", "bc@gmail.com", "cd@gmail.com", "de@gmail.com", "ef@gmail.com", "fg@gmail.com", "gh@gmail.com", "hi@gmail.com"];

var insert = prompt("Inserisci la tua mail")

var control = false

for (var i = 0; i < mail.length; i++) {
  if (insert == mail[i]) {
    control = true;
  }
}

if (control) {
  alert("Accesso consentito");
  console.log("Accesso consentito");
 }
else {
  alert("Accesso negato");
  console.log("Accesso negato");
}
