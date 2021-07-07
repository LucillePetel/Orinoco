//Vider le panier
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

//Suppression d'un article
function deleteLine() {

    let basket = JSON.parse(sessionStorage.getItem('basket')); 
    const deleteLine = document.getElementsByClassName('delete-line')
    for (let i = 0; i < deleteLine.length; i++) {

        deleteLine[i].addEventListener('click', function (e) {
            e.preventDefault()
            //récupère le tr parent de "delete-line"
            const deleteTeddy = this.closest('.delete-line')

                //supprime l'article du sessionStorage
                basket.splice(deleteTeddy, 1)
                //réécrit le sessionStorage
                sessionStorage.setItem('basket', JSON.stringify(basket))
                JSON.parse(sessionStorage.getItem('basket'))
                //Vide le sessionStorage s'il n'y a plus d'article
                if (deleteLine.length === 1) { sessionStorage.removeItem("basket") }
                //on recharge la page
                window.location.reload();
        })
    }


}
