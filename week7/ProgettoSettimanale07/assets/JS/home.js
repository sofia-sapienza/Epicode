// La prima cosa che verrà eseguita al caricamento della pagina sarà questa
window.onload = () => {
  fetch("https://striveschool-api.herokuapp.com/api/product/", {
    headers: {
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDYxMDE0NWYzYjY1YzAwMTQ1OTMxZDkiLCJpYXQiOjE2ODQwNzg5MTcsImV4cCI6MTY4NTI4ODUxN30.x29Hz2A6EaJlfIsXF4b5zj3TzDiSo7eJiEB5TLVKD-Q"
    }
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
          <img src="${event.imageUrl}" class="card-img-top object-fit-contain" style="height:20rem"/>
          <div class="card-body">
            <h5 class="card-title"><b>${event.name}</b></h5>
            <p class="card-text">
              ${event.description}
            </p>
            <p>${event.brand} - ${event.price}€</p>
            <a href="./dettagli.html?eventId=${event._id}" class="btn btn-primary">Scopri di più</a>
            <a href="./backoffice.html?eventId=${event._id}" class="btn btn-danger">Modifica</a>
          </div>
        </div>
      </div>`;

      //alla riga 35 passo al link del bottone un parametro (_id)

      containerCards.innerHTML += colCards
      });
    })
    .catch((error) => {
      console.log(error);
    });
};
