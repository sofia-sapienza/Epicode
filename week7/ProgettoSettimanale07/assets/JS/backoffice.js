//Questo form invierà un nuovo oggetto all'API

// prendo un riferimento al form
const formCreate = document.getElementById("form-create");
formCreate.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("invio i dati");

  //prendo i riferimenti agli input del form
  let nameInput = document.getElementById("name");
  let descriptionInput = document.getElementById("description");
  let brandInput = document.getElementById("brand");
  let imageUrlInput = document.getElementById("imgUrl");
  let priceInput = document.getElementById("price");

  //qui creo l'oggetto base di riferimento che mi servirà per creare i prodotti e do come valore delle proprietà il value degli input
  let newFilm = {
    name: nameInput.value,
    description: descriptionInput.value,
    brand: brandInput.value,
    imageUrl: imageUrlInput.value,
    price: priceInput.value,
  };

  console.log("oggetto da inviare alle API", newFilm);

  //adesso con il metodo POST faccio la request alla mia fetch()
  fetch( eventId ? "https://striveschool-api.herokuapp.com/api/product/" + eventId : "https://striveschool-api.herokuapp.com/api/product/", {
    method: eventId ? "PUT" : "POST",
    body: JSON.stringify(newFilm),
    headers: {
      "Content-type": "application/json",
      Authorization:
        "Bearer placeholder",
    },
  })
    .then((response) => {
      console.log(response);
      if (response.ok) {
        alert("EVENTO CREATO CON SUCCESSO!");
      } else {
        alert("ERRORE NEL SALVATAGGIO");
        throw new Error("ERRORE NEL SALVATAGGIO");
      }
    })
    .catch((errore) => {
      console.log(errore);
    });
});

//--- ADESSO FACCIAMO IN MODO CHE SI POSSA MODIFICARE IL PRODOTTO ---//

//creo una variabile che indendifichi la barra degli indirizzi
let barraDegliIndirizzi = new URLSearchParams(window.location.search);

//dal valore della barra degli indirizzi cerchiamo se c'è eventId (ovvero l'Id univoco che viene generato per ogni card)
let eventId = barraDegliIndirizzi.get("eventId");
console.log(eventId);

if (eventId) {
  document.getElementsByTagName("h1")[0].innerText =
    "BACK OFFICE - MODIFICA PRODOTTO";
  document.getElementById("btnCreaProdotto").innerText = "Modifica prodotto";

  //bottone reset con fetch METODO DELETE
  let btnReset = document.getElementById("btnReset");
  btnReset.classList.remove("d-none");
  btnReset.addEventListener("click", () => {
    fetch("https://striveschool-api.herokuapp.com/api/product/" + eventId, {
      method: "DELETE",
      headers: {
        Authorization:
          "Bearer placeholder",
      },
    })
      .then((response) => {
        if (response.ok) {
          alert("Il prodotto è stato eliminato con successo");
          location.assign("./home.html");
        } else {
          throw new Error("Problema con l'eliniminazione del prodotto");
        }
      })
      .catch((errore) => {
        console.log(errore);
      });
  });

  fetch("https://striveschool-api.herokuapp.com/api/product/" + eventId, {
    headers: {
      "Content-type": "application/json",
      Authorization:
        "Bearer placeholder",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Errore nel recupeto del prodotto");
      }
    })
    .then((prodotto) => {
      console.log("DATI DEL SINGOLO PRODOTTO", prodotto);

      document.getElementById("name").value = prodotto.name;
      document.getElementById("description").value = prodotto.description;
      document.getElementById("brand").value = prodotto.brand;
      if (prodotto.imageUrl) {
        // Se la proprietà "imageUrl" è presente nell'oggetto "prodotto", allora
        // inseriamo il valore di "prodotto.imageUrl" all'interno dell'elemento
        // HTML con id "imgUrl" tramite la proprietà "value" di questo elemento
        document.getElementById("imgUrl").value = prodotto.imageUrl;
      }
      document.getElementById("price").value = prodotto.price;
    })
    .catch((errore) => {
      console.log(errore);
    });
} else {
}


