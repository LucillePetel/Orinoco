// Page produit // 

let myApi = new API(); 
myApi.getArticleById();

//fonction d'ajout au panier
function addToBasket(item) {

    let itemCart = []

    //Stockage dans saveItemCart les information du produit + personnalisation
    let saveItemCart = {
        _id: item.id,
        imageUrl: item.imageUrl,
        name: item.name,
        price: item.price,
        quantity: item.quantityChoice,
        colorChoice: item.colorChoice
    }
    console.log(saveItemCart)

    //Enregistrement dans la sessionStorage pour la construction du panier


}