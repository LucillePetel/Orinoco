// Page de validation de commande // 

addOnConfirmPage()


function addOnConfirmPage() {

    let totalOrder = (Math.round(sessionStorage.getItem('totalOrder')) / 100).toFixed(2).replace(".",",");

    
    let confirmPage = document.getElementById("congratulation");
    const insertConfirmHTM  = 
        `<div class="confirm">
            <h2>Félicitation </h2>
            <p>Votre commande est validée !</p>
            <p>Commande n°</p>
            <p>Montant total : ${totalOrder}</p>
            <p class="thanks">Merci de votre confiance.</p>
        </div>`
    confirmPage.innerHTML += insertConfirmHTM  

}