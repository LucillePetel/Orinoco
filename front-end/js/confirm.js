// Page de validation de commande // 

addOnConfirmPage()


function addOnConfirmPage() {

    //Variable de mise en forme du prix total
    let totalOrder = (Math.round(sessionStorage.getItem('totalOrder')) / 100).toFixed(2).replace(".",",");
    //Variable permettant de récuperer les infos de order
    let order = JSON.parse(sessionStorage.getItem('order'));

    let confirmPage = document.getElementById("congratulation");
    
    //Constante contenant le code HTML et insertion dans confirm
    const insertConfirmHTML  = 
        `<div class="confirm">
            <h2>Félicitation ${order.contact.firstName + " " + order.contact.lastName}</h2>
            <p>Votre commande est validée !</p>
            <p>Commande n°${order.orderId}</p>
            <p>Montant total : ${totalOrder}</p>
            <p class="thanks">Merci de votre confiance.</p>
        </div>`
    confirmPage.innerHTML += insertConfirmHTML  

    //Suppression de totalOrder dans sessionStorage
    sessionStorage.clear()
}