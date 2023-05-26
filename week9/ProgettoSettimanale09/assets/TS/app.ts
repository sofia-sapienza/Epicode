console.log('---Progetto Settimanale 09 - Sofia Sapienza---')

//Creao un'interfaccia con due proprietà e cinque metodi
interface Smartphone {
    //proprietà
    credito: number;
    numeroChiamate: number;

    //metodi
    ricarica(quantita: number): void; //ricarica del credito con un parametro per indicare di quanto è la ricarica
    chiamata(minuti: number): void; //simula una chiamata con un parametro che indica quanti minuti dura la chiamata
    numero404(): number; //restituisce il credito disponibile
    getNumeroChiamate(): number; //restituisce quante chiamate sono state fatte
    azzeraChiamate(): void; //azzera le chiamate

}

//ADESSO IMPLEMENTO L'INTERFACCIA IN UNA CLASSE
class Utenti implements Smartphone {
    public credito: number;
    public numeroChiamate: number;

    constructor(_credito: number, _numeroChiamate: number) {
        this.credito = _credito;
        this.numeroChiamate = _numeroChiamate
    }

    public ricarica(quantita: number): void {
        this.credito += quantita

    }

    public chiamata(minuti: number): void {
        this.credito -= minuti * 0.20 //prendi il mio credito e SOTTRAI il risultato che ne devira dalla MOLTIPLICAZIONE dei minuti che ho passato al telefono per i 20 centesimi
    }

    public numero404(): number {

    }

    public getNumeroChiamate(): number {

    }

    public azzeraChiamate(): void {

    }
}
