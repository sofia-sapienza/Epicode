// La prima cosa che verrà eseguita al caricamento della pagina sarà questa
window.onload = () => {
  fetch("https://striveschool-api.herokuapp.com/api/product/", {
    headers: {
      "Authorization":
        "Bearer placeholder",
    },
  })
    .then((response) => {
      //il parametro di questo then() è la response che ho ricevuto dalla fetch
      console.log(response);
      if (response.ok) {
        //se response è ok
        return response.json(); //ritornamela con il metodo .json e passa al blocco successivo
      } else {
        //altrimenti
        throw new Error("Errore nel recupero dei dati!"); //passa direttamente al blocco catch()
      }
    })
    .then((dati) => {
      //il parametro di questo then() a sua volta è la response che il then() precedente mi ha dato
      console.log(dati); //adesso posso vedere gli eventuali dati

      let containerCards = document.getElementById("container-cards");
      dati.forEach((event) => {
        let colCards = `<div class="col-sm-6 col-xl-3 mt-3">
        <div class="card">
          <img src="${event.imageUrl}" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">${event.name}</h5>
            <p class="card-text">
              ${event.description}
            </p>
            <p>${event.brand} - ${event.price}€</p>
            <a href="#" class="btn btn-primary">Scopri di più</a>
            <a href="./backoffice.html?eventId=${event._id}" class="btn btn-danger">Modifica</a>
          </div>
        </div>
      </div>`;

      containerCards.innerHTML += colCards
      });
    })
    .catch((error) => {
      console.log(error);
    });
};
