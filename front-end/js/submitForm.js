
function addToApi(toSend) {
    fetch('http://localhost:3000/api/teddies/order', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: toSend
    })
    .then(response => response.json())
    .then(json => {
        console.log(json)
        sessionStorage.setItem('order', JSON.stringify(json));
        sessionStorage.removeItem('basket');
        window.location.replace("./confirm.html");
    });
}



    
    


