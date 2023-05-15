//creo una variabile che indendifichi la barra degli indirizzi
let barraDegliIndirizzi = new URLSearchParams(window.location.search);

//dal valore della barra degli indirizzi cerchiamo se c'è eventId (ovvero l'Id univoco che viene generato per ogni card)
let eventId = barraDegliIndirizzi.get("eventId");
console.log(eventId);

if (eventId) {
  fetch("https://striveschool-api.herokuapp.com/api/product/" + eventId, {
    headers: {
      "Content-type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDYxMDE0NWYzYjY1YzAwMTQ1OTMxZDkiLCJpYXQiOjE2ODQwNzg5MTcsImV4cCI6MTY4NTI4ODUxN30.x29Hz2A6EaJlfIsXF4b5zj3TzDiSo7eJiEB5TLVKD-Q",
    }
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("ERRORE NEL SALVATAGGIO");
      }
    })
    .then((film) => {
      console.log("Film", film);
        let cardRow = document.getElementById('cardRow');
      let card = `<div class="col-12">
                   <div class="card mb-4 row">
                   <div class="col-4">
                    <img src="${film.imageUrl}" alt="" srcset="" class="my-3 immaginiCard">
                   </div>
                  <div class="col-8">
              <div class="card-body">
              <h5 class="card-title"> Name:
              <span class="text-secondary d-block">${film.name}</span></h5> 
              <p class="card-text"> Brand: 
              <span class="text-secondary d-block">
               ${film.brand}
              </span>
              </p>
              <p class="card-text"> Description:
              <span class="text-secondary  d-block">
                  ${film.description}
                  </span>
                  </p>
              <p class="card-text"> Price:
              <span class="text-secondary d-block">
              ${film.price} €
              </span>
              </p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">   
                 </div>
                  </div>
                </div>
              </div>
            </div>
          </div>`;

      cardRow.innerHTML = card;
    })

    .catch((error) => {
      console.error(
        "Si è verificato un errore durante il recupero dei dati del prodotto:",
        error
      );
    });
}
