// Page panier // 
    

//Appel de la fonction affichage panier
addOnBasketPage()

function addOnBasketPage() {
    let basketPage = document.getElementById("contain-basket");
    const insertBasketHTML = 
        `<section class="bg-first">
            <h2>Votre panier</h2>
            <table>
                <thead>
                    <tr>
                        <th>Produit</th>
                        <th>Couleur</th>
                        <th>Quantité</th>
                        <th></th>
                        <th>Prix</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody id="product-line">
                    
                </tbody>
                <tfoot id="total-line">
                    
                </tfoot>
            </table>
        </section>

        <section class="bg-first contain-product">
            <h2>Vos renseignements</h2>
            <form class="personal-info" id="customer-form">
                <div>
                    <label>Nom</label> <br />
                    <input type="text" id="firstname" name="firstname">
                </div>
                <div>
                    <label>Prenom</label><br />
                    <input type="text" id="lastname" name="lastname">
                </div>
                <div>
                    <label>Adresse mail</label> <br />
                    <input type="email" id="email" name="email">
                    <small></small>
                </div>
                <div>
                    <label>Téléphone</label><br />
                    <input type="tel" id="phonenumber" name="phonenumber">
                    <small></small>
                </div>
                <div>
                    <label>Adresse</label><br />
                    <input type="text" id="adress" name="adress">
                </div>
                <div>
                    <label>Code postal</label><br />
                    <input type="text" id="zipcode" name="zipcode">
                </div>
                <div>
                    <label>Ville</label><br />
                    <input type="text" id="place" name="place">
                </div>
            </form>

        </section>
        
        <section class="bg-first contain-product validate">
            <button class="valid" type="submit" >
                <span>Valider ma commande</span>
            </button>
        </section>`

    basketPage.innerHTML += insertBasketHTML  

    //Stock la sessionStorage en basket 

    let basket = JSON.parse(sessionStorage.getItem('basket')); 
    
    
    basketLine(basket)

    function basketLine(product) { 
        let basketPlace = document.getElementById("product-line") 
        let totalPlace = document.getElementById("total-line")
        let totalTab = 0;

        for (let i = 0; i < product.length; i++) {
            
            let totalByLine = product[i].price * product[i].quantity;
            totalTab = totalTab + totalByLine;
            let line = `<tr>
                            <td>${product[i].name}</td>
                            <td>${product[i].colorChoice}</td>
                            <td>${product[i].quantity}</td>
                            <td><i class="fas fa-trash"></i></td>
                            <th>${(Math.round(product[i].price) / 100).toFixed(2).replace(".",",")} €</td>
                            <td>${(Math.round(totalByLine) / 100).toFixed(2).replace(".",",")} €</td>
                        </tr> `
            basketPlace.innerHTML += line 


    
            let totalLine = `<tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <th>Montant total</th>
                                <td>${(Math.round(totalTab) / 100).toFixed(2).replace(".",",")} €</td>
                            </tr>` 
            totalPlace.innerHTML = totalLine 
        }
    }


    let form = document.querySelector('#customer-form');

    form.email.addEventListener('change', function(){
        validEmail(this)
    });

    // -----------------------Verification Email-----------------------
    const validEmail = function (inputEmail) {
        let emailRegExp = new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g'); 


        //récuperation balise small
        let small = inputEmail.nextElementSibling 
        
        //Test expression regulière 
        if (emailRegExp.test(inputEmail.value)) {
            small.innerHTML = "Adresse Valide"
            small.classList.remove('failure')
            small.classList.add('success')
        } else {
            small.innerHTML = "Adresse Non Valide"
            small.classList.remove('success')
            small.classList.add('failure')
        }
    }

    // -----------------------Verification téléphone-----------------------

    form.phonenumber.addEventListener('change', function(){
        validPhoneNumber(this)
    });

    const validPhoneNumber = function(inputPhoneNumber) {

        let phoneRegExp = new RegExp('^[0-9]{10}')

        let smallPhoneNumber = inputPhoneNumber.nextElementSibling

        if (phoneRegExp.test(inputPhoneNumber.value)) {
            smallPhoneNumber.innerHTML = "Téléphone Valide"
            smallPhoneNumber.classList.remove('failure')
            smallPhoneNumber.classList.add('success')
        } else {
            smallPhoneNumber.innerHTML = "Téléphone Non Valide"
            smallPhoneNumber.classList.remove('success')
            smallPhoneNumber.classList.add('failure')
        }
    }

  


    
}

