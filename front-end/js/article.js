class Article {

    constructor(colors, id, name, price, description, imageUrl) {
        this.colors = colors
        this.id = id
        this.name = name
        this.price = price
        this.description = description
        this.imageUrl = imageUrl

    }

    addOnIndexPage() {
        let container = document.getElementById("products-list")
        const toInsert = 
            `<li class="bg-first">
                <a href="product.html?id=${this.id}">
                    <figure class="card-product">
                        <img src="${this.imageUrl}" alt="Norbert" class="picture-bear">
                        <figcaption>
                            <h2>${this.name}</h2>
                            <p>${this.description}</p>
                            <span class="price">${this.price}</span>
                        </figcaption>
                    </figure>
                </a>
            </li>`
        container.innerHTML += toInsert
    }

    addOnproductPage() {
        let contain = document.getElementById("contain-product")
        const insertOnProduct = 
            `<div class="card-product card-responsive">
                <div>
                    <img src="${this.imageUrl}" alt="Norbert" class="picture-teddy">
                </div>
                <div class="product-info">
                    <div class="product-name">
                        <h2>${this.name}</h2>
                        <div>
                            <i class="fas fa-paw"></i>
                            <i class="fas fa-paw"></i>
                            <i class="fas fa-paw"></i>
                            <i class="fas fa-paw"></i>
                            <i class="fas fa-paw"></i>
                        </div>
                    </div>
                    <p>${this.description}</p>
                    <div class="contain-color">
                        <select name="colors" id="colors">
                            <option value="">Choisissez une couleur</option>
                            <option value="colors"></option>
                        </select>
                    </div>
                    <span>Quantité :
                        <input type="number" id="quantity" name="quantity" placeholder="1">
                    </span>
                    <span class="price">${this.price}</span>
                    <button>
                        <span>Ajouter au panier</span>
                    </button>
                </div>
            </div>   `
            contain.innerHTML += insertOnProduct        

    }
}
