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

    let containerCard = document.getElementById('containerCard');
    let card = '';
    for (let i = 0; i < dati.length; i++) {
      card += ` <div class="col-md-4 col-lg-3 mb-4"> <div class="card h-100">
            <img src="${dati[i].img}" class="card-img-top  h-50" alt="${dati[i].title}">
            <div class="card-body d-flex flex-column justify-content-between">
              <div>
                <h5 class="card-title">${dati[i].title}</h5>
                <p class="card-text">$${dati[i].price}</p>
              </div>
              <div>
                <button class="btn btn-danger w-100 mb-2 remove-btn" onclick ="ciao(event)">Scarta</button>
                <button class="btn btn-primary w-100 add-btn">Compra ora</button>
              </div>
            </div>
          </div>
          </div>`
    }

    containerCard.innerHTML = card;

  })

  .catch((errore) => {
    console.log('Qualcosa è andato storto!', errore)
  })

  function ciao (event) {
    event.target.closest('.col-md-4').remove()

  }
