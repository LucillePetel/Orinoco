
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
        return true;
    } else {
        small.innerHTML = "Adresse Non Valide" 
        small.classList.remove('success')
        small.classList.add('failure')
        return false;
    }
}
    

    // -----------------------Verification téléphone-----------------------

const validPhoneNumber = function(inputPhoneNumber) {

    let phoneRegExp = new RegExp('^[0-9]{10}')

    let smallPhoneNumber = inputPhoneNumber.nextElementSibling

    if (phoneRegExp.test(inputPhoneNumber.value)) {
        smallPhoneNumber.innerHTML = "Téléphone Valide"
        smallPhoneNumber.classList.remove('failure')
        smallPhoneNumber.classList.add('success')
        return true;
    } else {
        smallPhoneNumber.innerHTML = "Téléphone Non Valide"
        smallPhoneNumber.classList.remove('success')
        smallPhoneNumber.classList.add('failure')
        return false;
    }
}

 // -----------------------Verification nom-----------------------

const validName = function(inputName) {

    let nameRegExp = new RegExp('^[A-Za-z]+(((\'|\-|\.)?([A-Za-z])+))?$')

    let smallName = inputName.nextElementSibling

    if (nameRegExp.test(inputName.value)) {
        smallName.innerHTML = "Nom Valide"
        smallName.classList.remove('failure')
        smallName.classList.add('success')
        return true;
    } else {
        smallName.innerHTML = "Nom Invalide"
        smallName.classList.remove('success')
        smallName.classList.add('failure')
        return false;
    }
}

 // -----------------------Verification code postal-----------------------

const validZipCode = function(inputZipCode) {

    let zipCodeRegExp = new RegExp('^[0-9]{5}')

    let smallZipCode = inputZipCode.nextElementSibling

    if (zipCodeRegExp.test(inputZipCode.value)) {
        smallZipCode.innerHTML = "Code postal Valide"
        smallZipCode.classList.remove('failure')
        smallZipCode.classList.add('success')
        return true;
    } else {
        smallZipCode.innerHTML = "Code postal Non Valide"
        smallZipCode.classList.remove('success')
        smallZipCode.classList.add('failure')
        return false;
    }
}

 // -----------------------Verification ville-----------------------

const validCity = function(inputCity) {

    let cityRegExp = new RegExp('^[A-Za-z]+(((\'|\-|\.)?([A-Za-z])+))?$')

    let smallCity = inputCity.nextElementSibling

    if (cityRegExp.test(inputCity.value)) {
        smallCity.innerHTML = "Ville Valide"
        smallCity.classList.remove('failure')
        smallCity.classList.add('success')
        return true;
    } else {
        smallCity.innerHTML = "Ville Invalide"
        smallCity.classList.remove('success')
        smallCity.classList.add('failure')
        return false;
    }
}
