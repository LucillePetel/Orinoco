function deleteBasket() {
    let clearAllProduct = document.getElementById("clear-basket")


    clearAllProduct.addEventListener('click', function () {
        sessionStorage.removeItem('basket');
        sessionStorage.removeItem('totalOrder'); 

        window.location.reload();
    })

}