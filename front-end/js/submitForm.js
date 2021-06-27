
function addToApi(toSend) {
    fetch('http://localhost:3000/api/teddies/order', {
        header: {
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(toSend) 
    })
    .then(response => {
        return response.json();
    }) 
    .then( r => {
        window.location.replace("./confirm.html");
    })
    .catch((e) => {
        displayError();
        console.log(e);
    })

}



    
    


