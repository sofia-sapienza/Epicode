/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/*I data type in JavaScript sono i tipi di dato che possiamo fornire ad una variabile. 
I principali sono: 
STRING => si tratta di una seguenza di caratteri di tipo testuale 
NUMBER => si tratta di un tipo di dato numerico, che può essere intero o decimale. Ad esempio 7 o 7.5
BOOLEAN => è un tipo di dato che può possiamo fornire saltando con la parola true (vero) o false (falso)
 
abbiamo anche dei data type definiti "primitivi", ovvero che non verrano scritti da noi, ma verranno direttamente generati in output quando:
NULL => indica l'assenza intenzionale di un valore
UNDEFINED => indica che una variabile non ha un valore assegnato oppure non è affatto definita
*/

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
 
*/

var nome = 'Sofia';

console.log(nome);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

var numero1 = 12;
var numero2 = 20;

console.log(numero1 + numero2);


/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

var x = 12;

console.log(x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

var nome = 'Sapienza';
console.log(nome);

/* const y = 7;
const y = 6;

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

console.log(x - 4);


/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

var nome1 = 'john';
var nome2 = 'John';

console.log(nome1 === nome2);

console.log(nome1 === nome2.toLowerCase())
