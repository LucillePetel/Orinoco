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
                <a href="produit.html?${this.id}">
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
        

    }
}
