const firstName = prompt( "inserisci il tuo nome");
const secondName = prompt( "inserisci il tuo cognome");
const color = prompt( "inserisci il tuo colore preferito");



const tutto = firstName + secondName + color;

document.getElementById("tutto").innerHTML = "Il tuo nome, cognome e colore preferito sono :" + tutto + "21";