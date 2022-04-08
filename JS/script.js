/*

Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).

*/


let distance = prompt("How many Kilometers do you need to travel?");

let userAge = prompt("How old are you?");

let totalPrice = distance * 0.21;


if(userAge < 18){
  totalPrice = parseFloat(totalPrice * 0.8).toFixed(2);
}

else if(userAge > 65){
  totalPrice = parseFloat(totalPrice * 0.6).toFixed(2);
  
}

else {
 totalPrice = parseFloat(totalPrice).toFixed(2);
}

const outputText ="Your Ticket is going to cost you ': " + totalPrice;

document.getElementById("out-put-text").innerHTML = outputText