//ESERCIZI SUGLI IF: 

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let a = 10
let b = 8
if (a < b){
  console.log(b + " è piu grande di " + a)
} else {
  console.log(a + " è piu grande di " + b)
}

/*
ESERCIZIO 2
  Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numero = prompt(" iserici un numero ")
let num = parseInt(numero)
if (num < 5 ) {
  console.log("Tiny") 
} else if (num< 10) { 
  console.log("Small")
} else if (num < 15){
  console.log("Medium")
} else if (num < 20){
  console.log("Large")
}else if (num >= 20 ){
  console.log("Huge")
} else {
  console.log(" Prova a inserire un Numero ")
}
//ESERCIZI SUI CICLI: 

/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
for (let i = 0; i <= 10; i++) {
  if (i === 3 || i === 8) {
      continue; 
  }
  console.log(i);
}


/* ESERCIZIO 11
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
for (let i = 0; i <= 15; i++) {
  if (i % 2===0 ) {
     console.log(i + " il numero è pari ")
  } else
  console.log(i + " il numero è dispari ");
}


//ESERCIZI EXTRA NON OBBLIGATORI

/* ESERCIZIO EXTRA 1
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numA = -1;
let numB = 9;

if (numA === 8 || numB === 8) {
    console.log("Uno dei numeri è 8");
} else if (numB - numA === 8 || numB + numA === 8) {
    console.log("l'addizione/sottrazione dei 2 numeri è uguale a 8");
} else {
    console.log("Nessuna delle condizioni è soddisfatta");
}


/* ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart= 80; 
let spedizione = 10;

if (totalShoppingCart > 50){
  spedizione = 0; 
}
let addebito = totalShoppingCart + spedizione;
console.log(" hai speso di articoli " + addebito + " euro")
/* ESERCIZIO EXTRA 3
  Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, usando l'algoritmo del codice precedente, se le spedizioni siano gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart= 80; 
let spedizione = 10;
let blackfriday = (totalShoppingCart * 20)/100
let scontoApplicato = totalShoppingCart-blackfriday;
if (totalShoppingCart > 50){
  spedizione = 0; 
}
let addebito = scontoApplicato + spedizione ;
console.log(" hai speso di articoli " + totalShoppingCart + " Euro" )
console.log(" con sconto applicato di " + blackfriday + " Euro")
console.log(" hai speso di spedizione " + spedizione + " Euro" )
console.log(" in totale hai speso " + addebito + " Euro")

/*  ESERCIZIO EXTRA 4
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
  Es. se isMale e' vero, il valore di gender deve essere "male"
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let gender
let isMale= true
if (isMale === true){
 gender= "male"
} else {
  gender="female"
}
console.log(gender)

/* ESERCIZIO EXTRA 5
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3 (operatore modulo!), stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/
let numero = 1;
for (let i = numero; i <= 100; i++) { 
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else {
    console.log(i);
  }
}
