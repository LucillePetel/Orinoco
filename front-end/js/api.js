
class API {
    
    constructor() {
        this.url = "http://localhost:3000/api/teddies";
    }

    getAllArticles() {
        fetch(this.url)
        .then(response => response.json())
        .then(data => {
            for(let i = 0; i < data.length; i++) {
                let newArticle = new Article(data[i].colors, data[i]._id, data[i].name, data[i].price, data[i].description, data[i].imageUrl)  
                newArticle.addOnIndexPage("product-list")
                console.log(newArticle)
            }
        }) 
        
    }

    getArticleById() {
        fetch(this.url + "/" + _id)
        .then(response => response.json())
            .then(data => {
                for(let i = 0; i < data.length; i++) {
                    let newArticle = new Article(data[i].colors, data[i]._id, data[i].name, data[i].price, data[i].description, data[i].imageUrl)
                    newArticle.addOnProcuctPage("product")
                }
            })
    }
}





