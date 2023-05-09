// questo form salverà in localStorage il nome e cognome dell'utente
// alla pressione del tasto "SALVA", dovremo inserire un nuovo nome alla lista già presente
let namesList = [];

// all'avvio della pagina sarà necessario ripartire dalla lista di nomi già salvata, se la troveremo in localStorage

// prendo i riferimenti agli input field
const nameField = document.getElementById('name');
const surnameField = document.getElementById('surname');

// prendo i riferimenti ai button
const saveButton = document.getElementById('save-button');
const clearButton = document.getElementById('clear-button');

// creo la funzione che prende il contenuto di nameList e crea tanti <li> corrispondenti
// prendo anche un riferimento alla lista

const creaLista = function () {
    console.log('sono in creaLista')
    let list = document.querySelector('ul');
    // svuoto la lista per non rimanere con residui
    list.innerHTML = '';

    //cicliamo nameList
    namesList.forEach((datoUtente) => {
        //per ogni nome creo un <li> e lo appendo alla lista
        const newLi = document.createElement('li');
        newLi.innerText = datoUtente.name + ' ' + datoUtente.surname;
        list.appendChild(newLi);
    })

}

saveButton.addEventListener('click', function (e) {
    e.preventDefault() // FERMA la pagina dal suo riavvio automatico
    const newUser = {
        name: nameField.value,
        surname: surnameField.value,
    }

    console.log(newUser);
    namesList.push(newUser)

    //per salvare il mio array che contiene un oggetto uso il metodo stringify altrimenti non lo legge
    const namesListAsAString = JSON.stringify(namesList)
    console.log("valore dell'array stringhifizzato:", namesListAsAString)

    //adesso posso memorizzare nel localStorage questa lista
    localStorage.setItem('namesListArray', namesListAsAString);

    //svuotiamo i campi del form prima di renderizzare la pagina
    nameField.value = ''
    surnameField.value = ''

    creaLista()
});

clearButton.addEventListener('click', function (e) {
    e.preventDefault();
    localStorage.removeItem('namesListArray');
    const list = document.querySelector('ul');
    list.innerHTML = '';

});


window.onload = function () {
    if (localStorage.getItem('namesListArray')) {
        let arrayAsAStringFromLocalStorage = localStorage.getItem('namesListArray')
        let newnamesListArray = JSON.parse(arrayAsAStringFromLocalStorage)
        namesList = newnamesListArray

        creaLista();
    }
}

//----CONTATORE----

let stampaTimer = document.querySelector("span");
let tempo = 0;

if(sessionStorage.getItem('timer')){
  tempo = Number(sessionStorage.getItem('timer'))
}

let miaFunzione = function () {
  tempo++;
  stampaTimer.innerHTML = tempo;
  sessionStorage.setItem("timer", tempo);
};

setInterval(miaFunzione, 1000);
