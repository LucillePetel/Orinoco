// Page de validation de commande // 

addOnConfirmPage()


function addOnConfirmPage() {

    let totalOrder = (Math.round(sessionStorage.getItem('totalOrder')) / 100).toFixed(2).replace(".",",");
    let order = JSON.parse(sessionStorage.getItem('order'));

    let confirmPage = document.getElementById("congratulation");
    console.log(order.contact.firstName)
    const insertConfirmHTM  = 
        `<div class="confirm">
            <h2>Félicitation ${order.contact.firstName + " " + order.contact.lastName}</h2>
            <p>Votre commande est validée !</p>
            <p>Commande n°${order.orderId}</p>
            <p>Montant total : ${totalOrder}</p>
            <p class="thanks">Merci de votre confiance.</p>
        </div>`
    confirmPage.innerHTML += insertConfirmHTM  

    sessionStorage.removeItem('totalOrder');
}