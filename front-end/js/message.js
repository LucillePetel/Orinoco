//Message d'ajout au panier
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
                <a href="../index.html" class="button-message">Continuer d'adopter</a>
                <a href="basket.html" class="button-message">Voir mes adoptions</a>
            </div>
        </div> `
    messagePlace.appendChild(messageBox);  
}

//Message quantité insuffisante
function messageTeddyError() {
    const messagePlace = document.getElementById('teddy-message')
    const messageBox = document.createElement('div')
    messageBox.classList.add('message-box')
    messageBox.innerHTML = `
        <div>
            <div>
                <h2>La quantité n'est pas suffisante !</h2>
            </div>
            <div class="link-box">
                <a href="../index.html" class="button-message">réessayer</a>
            </div>
        </div> `
    messagePlace.appendChild(messageBox);    
}

//Message formulaire incorrect 
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

//Message erreur 
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

//Message erreur 
function messageApiError() {
    const messagePlace = document.getElementById('teddy-message')
    const messageBox = document.createElement('div')
    messageBox.classList.add('message-box')
    messageBox.innerHTML = `
        <div>
            <div>
                <h2>Le serveur a rencontré une erreur !</h2>
                <p class="text-error">Nous faisons tout notre possible pour que vous puissiez</br> adopter nos oursons</p>
            </div>
            <div class="link-box">
                <a href="${window.location}" class="button-message">Réessayer</a>
            </div>
        </div> `
    messagePlace.appendChild(messageBox);  
}

