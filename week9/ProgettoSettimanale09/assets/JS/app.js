console.log('---Progetto Settimanale 09 - Sofia Sapienza---');
//ADESSO IMPLEMENTO L'INTERFACCIA IN UNA CLASSE
class Utenti {
    constructor(_credito, _numeroChiamate) {
        this.credito = _credito;
        this.numeroChiamate = _numeroChiamate;
    }
    ricarica(quantita) {
        this.credito += quantita;
    }
    chiamata(minuti) {
        this.credito -= minuti * 0.20; //prendi il mio credito e SOTTRAI il risultato che ne devira dalla MOLTIPLICAZIONE dei minuti che ho passato al telefono per i 20 centesimi
        this.numeroChiamate++;
    }
    numero404() {
        return this.credito;
    }
    getNumeroChiamate() {
        return this.numeroChiamate;
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
    }
}
//ADESSO A PARTIRE DALLA CLASSE MADRE CREO 3 INSTANZE
let utente1 = new Utenti(0, 0);
console.log('Primo utente:');
console.log('-------------');
//faccio una ricarica
utente1.ricarica(10);
//chiamo 
utente1.chiamata(2);
//verifico con un console.log() il credito residuo
console.log('Credito residuo:', utente1.numero404());
//verifico con un console.log() quante chiamate sono state fatte
console.log('Numero chiamate:', utente1.getNumeroChiamate());
//verifico con un console.log() le chiame azzerate, ovviamente TESTA DI CAZZO prima chiami il metodo no?!
utente1.azzeraChiamate();
console.log('Chiamate azzerate:', utente1.numeroChiamate);
console.log('');
let utente2 = new Utenti(0, 0);
console.log('Secondo utente:');
console.log('-------------');
//faccio una ricarica
utente2.ricarica(5);
//chiamo 
utente2.chiamata(10);
//verifico con un console.log() il credito residuo
console.log('Credito residuo:', utente2.numero404());
//verifico con un console.log() quante chiamate sono state fatte
console.log('Numero chiamate:', utente2.getNumeroChiamate());
//verifico con un console.log() le chiame azzerate, ovviamente TESTA DI CAZZO prima chiami il metodo no?!
utente2.azzeraChiamate();
console.log('Chiamate azzerate:', utente2.numeroChiamate);
console.log('');
let utente3 = new Utenti(0, 0);
console.log('Terzo utente:');
console.log('-------------');
//faccio una ricarica
utente3.ricarica(20);
//chiamo 
utente3.chiamata(20);
utente3.chiamata(5);
//verifico con un console.log() il credito residuo
console.log('Credito residuo:', utente3.numero404());
//verifico con un console.log() quante chiamate sono state fatte
console.log('Numero chiamate:', utente3.getNumeroChiamate());
//verifico con un console.log() le chiame azzerate, ovviamente TESTA DI CAZZO prima chiami il metodo no?!
utente3.azzeraChiamate();
console.log('Chiamate azzerate:', utente3.numeroChiamate);
