// Page panier // 
    

//fonction affichage panier
function addOnBasketPage() {
    let basketPage = document.getElementById("contain-basket");
    const insertBasketHTML = 
        `<section class="bg-first basket-style">
            <h2 class="basket-title">Votre panier</h2>
            <table>
                <thead>
                    <tr>
                        <th>Produit</th>                    
                        <th>Qté</th> 
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

        <section class="bg-first contain-product basket-style">
            <h2 class="basket-title">Vos renseignements</h2>
            <form method="POST" class="personal-info" id="customer-form">
                <div>
                    <label>Nom</label> <br />
                    <input type="text" id="firstname" name="firstname" value="Aurelien">
                    <small></small>
                </div>
                <div>
                    <label>Prenom</label><br />
                    <input type="text" id="lastname" name="lastname" value="Froment">
                    <small></small>
                </div>
                <div>
                    <label>Adresse mail</label> <br />
                    <input type="email" id="email" name="email" value="froment.a@gmail.com">
                    <small></small>
                </div>
                <div>
                    <label>Téléphone</label><br />
                    <input type="tel" id="phonenumber" name="phonenumber" value="0622772972">
                    <small></small>
                </div>
                <div>
                    <label>Adresse</label><br />
                    <input type="text" id="adress" name="adress" value="744 rue de pas loin de chez moi">
                    <small></small>
                </div>
                <div>
                    <label>Code postal</label><br />
                    <input type="text" id="zipcode" name="zipcode" value="60800">
                    <small></small>
                </div>
                <div>
                    <label>Ville</label><br />
                    <input type="text" id="city" name="city" value="Compiegne">
                    <small></small>
                </div>
                <div>
                    <input type="submit" value="Valider ma commande" class="validate">
                </div>

            </form> 

        </section> `

    basketPage.innerHTML += insertBasketHTML  

    //Stock la sessionStorage en basket 

    let basket = JSON.parse(sessionStorage.getItem('basket')); 
    
    //appel de la fonction basketLine
    basketLine(basket)
    deleteBasket()






    let form = document.querySelector('#customer-form');

    //Nom
    form.firstname.addEventListener('change', function() {
        validName(this)
    });
    //Prenom
    form.lastname.addEventListener('change', function() {
        validName(this)
    });
    //Code postal
    form.zipcode.addEventListener('change', function() {
        validZipCode(this)
    });
    //Email
    form.email.addEventListener('change', function(){
        validEmail(this)
    });
    //Téléphone 
    form.phonenumber.addEventListener('change', function(){
        validPhoneNumber(this)
    });

    form.city.addEventListener('change', function(){
        validCity(this)
    });

 
    form.addEventListener('submit', function(e){
        e.preventDefault();


  
        const contact = {
            firstName: form.firstname.value,
            lastName: form.lastname.value,
            address: form.adress.value,
            city: form.city.value,
            email: form.email.value,
        }

        let products = []

        let i = 0;
        basket.forEach(panier => {
            products[i] = panier.id;
            i++;
        });

        const toSend = JSON.stringify({contact, products})
        //Condition pour l'envoi du formulaire 
        if (validName(form.firstname) && validName(form.lastname) && validZipCode(form.zipcode) && validEmail(form.email) && validPhoneNumber(form.phonenumber) && validCity(form.city)) {
            addToApi(toSend)
        } 
        else {
            messageForm()
        }

    });

}

//fonction d'affichage panier vide
function addOnBasketPageNull() {
    let basketPage = document.getElementById("contain-basket");
    const insertBasketHTML = 
        `<section class="bg-first message-box">
            <h2>Votre panier est vide</h2>
            <p>Vous n'avez pas encore choisi l'ourson fait pour vous ?</p>
            <img src="img/teddy.png" alt="teddy" id="bear">
            <div class="link-box">
                <a href="../index.html" class="button-message">Cherchez le ici</a>
            </div>
        </section> `

    basketPage.innerHTML += insertBasketHTML  


}

//Appel de addOnBasketPageNull si le panier est vide
if (sessionStorage.getItem('basket') === null) {
    addOnBasketPageNull()
//Sinon appel de addOnBasketPage  
} 
else {
    addOnBasketPage()
}



