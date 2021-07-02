//Fonction d'envoi à l'API
function addToApi(toSend) {
    fetch('http://localhost:3000/api/teddies/order', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        //toSend contenant : contact et products
        body: toSend
    })
    .then(response => response.json())
    .then(json => {
        console.log(json);
        sessionStorage.setItem('order', JSON.stringify(json));
        //renvoi vers la page de confirmation
        window.location.replace("./confirm.html");
    })
    .catch(err => {
        messageConfirmError(err)
    })


}



    
    


