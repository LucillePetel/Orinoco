function messageTeddy() {
    const messagePlace = document.getElementById('teddy-message')
    const messageBox = document.createElement('div')
    messageBox.classList.add('message-box')
    messageBox.innerHTML = `
        <div>
            <div>
                <h2>Votre ourson est prêt à être adopté</h2>
            </div>
            <div class="link-box">
                <a href="index.html" class="button-message">Continuer d'adopter</a>
                <a href="basket.html" class="button-message">Voir mes adoption</a>
            </div>
        </div> `
    messagePlace.appendChild(messageBox);  
}


function messageForm() {
    const messagePlace = document.getElementById('teddy-message')
    const messageBox = document.createElement('div')
    messageBox.classList.add('message-box')
    messageBox.innerHTML = `
        <div>
            <div>
                <h2>Certaines de vos informations ne sont pas correctes</h2>
            </div>
            <div class="link-box">
                <a href="basket.html" class="button-message">Verifier mes informations</a>
            </div>
        </div> `
    messagePlace.appendChild(messageBox);  
}


function messageConfirmError() {
    const messagePlace = document.getElementById('teddy-message')
    const messageBox = document.createElement('div')
    messageBox.classList.add('message-box')
    messageBox.innerHTML = `
        <div>
            <div>
                <h2>Le serveur a rencontré une erreur !</h2>
                <p class="text-error">Nous faisons tout notre possible pour que vous puissiez terminer</br> votre adoption dans les meilleurs délais</p>
            </div>
            <div class="link-box">
                <a href="basket.html" class="button-message">Réessayer !</a>
            </div>
        </div> `
    messagePlace.appendChild(messageBox);  
}
