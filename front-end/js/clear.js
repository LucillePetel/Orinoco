//fonction vider le panier
function deleteBasket() {

    let clearAllProduct = document.getElementById("clear-basket")

    //Ecoute du click
    clearAllProduct.addEventListener('click', function () {
        //Suppression de basket et totalOrder dans sessionStorage
        sessionStorage.removeItem('basket');
        sessionStorage.removeItem('totalOrder'); 
        //Rafraichir la page 
        window.location.reload();
    })

}



