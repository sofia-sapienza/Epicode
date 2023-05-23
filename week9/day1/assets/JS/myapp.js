"use strict";
//Dichiaro quelle che saranno le tre variabili principali, in questo caso tutte di tipo :number
let Giocatore1 = 7;
let Giocatore2 = 3;
let NumeroEstratto = Math.floor(Math.random() * 100 + 1);
function verifica() {
    //verifico se c'è stato un pareggio
    if (Giocatore1 === NumeroEstratto && Giocatore2 === NumeroEstratto) {
        console.log('Wow! C\'è stato un pareggio!');
        //verifico se il Giocatore 1 ha vinto
    }
    else if (Giocatore1 === NumeroEstratto) {
        console.log('Il giocatore 1 ha indovinato!');
        //verifico se il Giocatore 2 ha vinto
    }
    else if (Giocatore2 === NumeroEstratto) {
        console.log('Il giocatore 2 ha indovinato!');
        //se nessuno dei due giocatori a vinto verifico quale quale sei due si è avvicinato di più
    }
    else if (Math.abs(NumeroEstratto - Giocatore1) < Math.abs(NumeroEstratto - Giocatore2)) {
        console.log('Nessuno ha vinto ma il giocatore 1 si è avvicinato di più');
        //se nessuno dei due giocatori a vinto verifico quale quale sei due si è avvicinato di più
    }
    else if (Math.abs(NumeroEstratto - Giocatore2) < Math.abs(NumeroEstratto - Giocatore1)) {
        console.log('Nussuno ha vinto ma il giocatore 2 si è avvicinato di più');
    }
}
console.log('Numero giocatore 1 -', Giocatore1);
console.log('---------------------------------');
console.log('Numero giocatore 2 -', Giocatore2);
console.log('---------------------------------');
console.log('Numero estratto -', NumeroEstratto);
verifica();
