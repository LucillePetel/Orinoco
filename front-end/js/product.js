// Page produit // 

let myApi = new API(); 
myApi.getArticleById();

//fonction d'ajout au panier
function addToBasket(item) {

    let itemCart = []
    //Stockage dans saveItemCart les information du produit + personnalisation
    let saveItemCart = {
        id: item.id,
        imageUrl: item.imageUrl,
        name: item.name,
        price: item.price,
        quantity: item.quantityChoice,
        colorChoice: item.colorChoice
    }
    //Enregistrement dans la sessionStorage pour la construction du panier

    
    let newItem = true

    //Si la session est vierge
    if (sessionStorage.getItem('basket') === null) {
        //Enregistrer les infos essentielle du produit à ajouter dans ITEMCART
        itemCart.push(saveItemCart);
        //Envoie des infos dans la session pour le panier
        sessionStorage.setItem('basket', JSON.stringify(itemCart));
    //Sinon le panier existe déjà 
    } else {
        //Stock dans itemCart le contenu de la session
        itemCart = JSON.parse(sessionStorage.getItem('basket'));
        //Verifie la presence d'un produit identique et si oui ajoute la quantité
        itemCart.forEach(product => {
            if (item.id === product.id && item.colorChoice === product.colorChoice) {
            product.quantity = product.quantity + item.quantityChoice;
            newItem = false;
            }
        });

    //Si c'est un nouvel item, ajoute à itemCart
    if (newItem) itemCart.push(saveItemCart);

    // Met à jour la session par rapport au infos de itemCart
    sessionStorage.setItem('basket', JSON.stringify(itemCart));
    } 

}

//Appel de la fonction d'affichage de l'alerte
