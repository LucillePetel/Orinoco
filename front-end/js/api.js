class API {
    
    constructor() {
        this.url = "http://localhost:3000/api/teddies";
    }

    //Appel de l'API pour la page index, récupération de tous les produits
    getAllArticles() {
        fetch(this.url)
            .then(response => response.json())
            .then(data => {
                for(let i = 0; i < data.length; i++) {
                    let newArticle = new Article(data[i].colors, data[i]._id, data[i].name, data[i].price, data[i].description, data[i].imageUrl)  
                    newArticle.addOnIndexPage("product-list")
                }
            }) 
            .catch(e => {
                messageApiError(e)
            })
    }
    

    //Appel de l'API pour les pages product
    getArticleById() {
        let params = new URLSearchParams(document.location.search.substring(1));
       //Affichage du produit suivant l'id
        if (params.get("id")) {
        fetch(this.url + "/" + params.get("id"))
            .then(response => response.json())
            .then(data => {
                let newArticle = new Article(data.colors, data._id, data.name, data.price, data.description, data.imageUrl)
                newArticle.addOnproductPage("contain-product")      
            })
            .catch(e => {
                messageApiError(e)
            })
            
        } 
        
    }

}











