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
            `<li class="bg-first card-teddies">
                <a href="product.html?id=${this.id}">
                    <figure class="card-product">
                        <img src="${this.imageUrl}" alt="${this.name}" class="picture-bear">
                        <figcaption>
                            <h2>${this.name}</h2>
                            <p>${this.description}</p>
                            <span class="price">${(Math.round(this.price) / 100).toFixed(2).replace(".",",")} €</span>
                        </figcaption>
                    </figure>
                </a>
            </li>`
        container.innerHTML += toInsert
    }

    addOnproductPage() {
        let contain = document.getElementById("contain-product")

        const insertHTML = 
            `<div class="card-product card-responsive">
                <div class="picture-box">
                    <img src="${this.imageUrl}" alt="${this.name}" class="picture-teddy">
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
                    <div class="contain-color" class="all-colors">
                        <select name="colors" id="colors" required>
                            
                        </select>
                    </div>
                    <span>Quantité :
                        <input type="number" id="quantity" name="quantity" min="1">
                    </span>
                    <span class="price">${(Math.round(this.price) / 100).toFixed(2).replace(".",",")} €</span>
                    <button class="add-btn" id="confirm-box">
                        <span>Ajouter au panier</span>
                    </button>
                </div>
            </div>   `
            contain.innerHTML += insertHTML
            let choice = contain.querySelector("#colors");
            this.colors.forEach (function (colors) {
                let option = document.createElement("option");
                option.value = colors;
                option.textContent = colors;
                choice.appendChild(option);
            })

            let customerChoise = document.querySelector(".add-btn");

            customerChoise.addEventListener('click', () => {

                //Récupération choix couleur et stockage dans variable global this
                this.colorChoice = document.querySelector("#colors");
                this.colorChoice = this.colorChoice.options[this.colorChoice.selectedIndex].value;

                //Récupération quantité et stockage dans variable global this
                this.quantityChoice = parseInt(document.getElementById("quantity").value);
                
                //Appel de la fonction d'ajout au panier si la quantité est suffisante
                if (this.quantityChoice >= 1) {
                    addToBasket(this);
                    setTimeout("messageTeddy()", 400);
                //Sinon renvoi un message d'erreur 
                } else {
                    messageTeddyError()
                }

            }) 
    }

}
