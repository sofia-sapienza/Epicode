console.log('Esercizitazione S7/L3');

fetch('https://striveschool-api.herokuapp.com/books')
    .then((response) => {
        // come parametro di then() ho l'oggetto RESPONSE restituito dal server, faccio un console.log per verificare
        console.log(response);

        // adesso per avere dall'oggetto RESPONSE il mio array/oggetto utilizzo il metodo .json
        return response.json()

        //MA, il metodo .json() mi ritorna l'array o l'oggetto che mi serve sempre sotto forma di promise, proprio perchè potrebbe metterci del tempo

    })
    .then((dati) => {
        // qui la promise .json è stata completata! 
        // il parametro di then() è il corpo della response

        console.log(dati)//l'array compare!

        let containerCard = document.getElementById('containerCard')
        dati.forEach((book) => {
            let newCard = document.createElement(`<div class="col-sm-4 col-xl-3">
    <div class="card">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                card's
                content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
    </div>`)
            containerCard.newCard.appendChild(newCard)
        })
    })
    .catch((errore) => {
        console.log('Qualcosa è andato storto!', errore)
    })