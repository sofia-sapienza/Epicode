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
    }
    numero404() {
    }
    getNumeroChiamate() {
    }
    azzeraChiamate() {
    }
}
