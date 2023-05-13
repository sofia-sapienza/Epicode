//Questo form invierà un nuovo oggetto all'API

// prendo un riferimento al form
const formCreate = document.getElementById('form-create');
formCreate.addEventListener('submit', function(e) {
    e.preventDefault()
    console.log('invio i dati');

    //prendo i riferimenti agli input del form
    let nameInput = document.getElementById('name');
    let descriptionInput = document.getElementById('description');
    let brandInput = document.getElementById('brand');
    let imageUrlInput = document.getElementById('imgUrl');
    let priceInput = document.getElementById('price');
    
    //qui creo l'oggetto base di riferimento che mi servirà per creare i prodotti e do come valore delle proprietà il value degli input
    let newFilm = {
        name: nameInput.value,
        description: descriptionInput.value,
        brand: brandInput.value,
        imageUrl:imageUrlInput.value,
        price: priceInput.value,
    }

    console.log('oggetto da inviare alle API', newFilm)

    //adesso con il metodo POST faccio la request alla mia fetch()
    fetch("https://striveschool-api.herokuapp.com/api/product/", {
        method: 'POST',
        body: JSON.stringify(newFilm),
        headers: {
            "Content-type": "application/json",
            "Authorization":
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlNDZiOTg4Zjc0MDAwMTQyODc4ZDUiLCJpYXQiOjE2ODM5MDAwODksImV4cCI6MTY4NTEwOTY4OX0.pFyhpVCwiKv50NXVd0ez7igAsRm4leGPyQp-Esf0VdY",
        }

    })
    .then((response) => {
        console.log(response)
    })
})
