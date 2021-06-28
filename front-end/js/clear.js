function deleteBasket() {
    let clearProduct = document.getElementById("clear-line")

    clearProduct.addEventListener('click', function () {
        sessionStorage.removeItem('basket');
        sessionStorage.removeItem('totalOrder');
    
    })

}