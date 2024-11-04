/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* Number: tipo di variable utilizzato per contenere sia numeri interi sia numeri decimali. 
In JavaScript, i numeri sono sempre dello stesso tipo, che siano interi o decimali e vanno assegnati 
senza alcun tipo di virgolette.

String: si tratta di un insieme di caratteri che vanno messi tra virgolette, ad esempio "Ciao".
Mentre se scriviamo "123" è sempre considerata un testo anche se è un numero perchè è messo tra virgolette.

Boolean: per indicare il vero e falso, come una lampadina che può essere accesa (vero) o spenta (falso). 
Possiamo utilizzare questo tipo di variabile per indicare se una certa condizione è vera o falsa.

Undefined: è una variabile a cui non è ancora stato assegnato alcun valore, è una variabile vuota che
abbiamo solo definito.
 */

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

const myName = "Giacomo";
console.log(myName);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let num1 = 12;
let num2 = 20;
let somma = num1 + num2;
console.log(somma);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12;
console.log(x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

myName = "Rigo"; //da commentare se vogliamo proseguire con l'esecuzione in console
console.log(myName);

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let sott = 4-x;
console.log(sott);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = "john";
let name2 = "John";
let compare = (name1 === name2);
console.log("name1 e name2 sono uguali? " + compare);
compare = (name1 === name2.toLowerCase());
console.log("Con il lowercase la risposta è: " + compare);
