function basketLine(product) { 
    let basketPlace = document.getElementById("product-line") 
    let totalPlace = document.getElementById("total-line")
    let totalTab = 0;

    //Boucle d'ajout au panier
    for (let i = 0; i < product.length; i++) {
        
        let totalByLine = product[i].price * product[i].quantity;
        totalTab = totalTab + totalByLine;
        //Insertion des lignes de produit ajouté au panier
        let line = `<tr>
                        <td>${product[i].name} ${product[i].colorChoice}</td>
                        <td>${product[i].quantity}</td>
                        <th>${(Math.round(product[i].price) / 100).toFixed(2).replace(".",",")} €</td>
                        <td>${(Math.round(totalByLine) / 100).toFixed(2).replace(".",",")} €</td>
                    </tr> `
        basketPlace.innerHTML += line 


        //Insertion ligne contenant le bouton suppression du panier et prix total 
        let totalLine = `<tr>
                            <td>Vider votre panier <button id="clear-basket"><i class="fas fa-trash" ></button></td>
                            <td></td>
                            <th>Montant total</th>
                            <td>${(Math.round(totalTab) / 100).toFixed(2).replace(".",",")} €</td>
                        </tr>` 
        totalPlace.innerHTML = totalLine 
    }

    sessionStorage.setItem("totalOrder", JSON.stringify(totalTab));

}

  