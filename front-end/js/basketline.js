function basketLine(product) { 
    let basketPlace = document.getElementById("product-line") 
    let totalPlace = document.getElementById("total-line")
    let totalTab = 0;

    for (let i = 0; i < product.length; i++) {
        
        let totalByLine = product[i].price * product[i].quantity;
        totalTab = totalTab + totalByLine;
        let line = `<tr>
                        <td>${product[i].name} ${product[i].colorChoice}</td>
                        <td>${product[i].quantity} <i class="fas fa-trash"></td>
                        <th>${(Math.round(product[i].price) / 100).toFixed(2).replace(".",",")} €</td>
                        <td>${(Math.round(totalByLine) / 100).toFixed(2).replace(".",",")} €</td>
                    </tr> `
        basketPlace.innerHTML += line 



        let totalLine = `<tr>
                            <td></td>
                            <td></td>
                            <th>Montant total</th>
                            <td>${(Math.round(totalTab) / 100).toFixed(2).replace(".",",")} €</td>
                        </tr>` 
        totalPlace.innerHTML = totalLine 
    }

    sessionStorage.setItem("totalOrder", JSON.stringify(totalTab));
}

