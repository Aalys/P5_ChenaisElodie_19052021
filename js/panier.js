// récupère localstorage de la page produit.js

let produitInLocalStorage = JSON.parse(localStorage.getItem("newProduct"));
console.log(produitInLocalStorage);


// =======================================================
// =============== Calcul du total du panier ============= 
// =======================================================

// déclaration de la variable pour mettre les prix présents dans le panier

let prixTotalCalcul = [];
let prixTotal=0;

// aller chercher les prix dans le panier
if (produitInLocalStorage ) {
    for (let m = 0; m < produitInLocalStorage.length; m++){
    let prixProduitDansPanier = produitInLocalStorage[m].camPrice;

    // mettre les prix du panier dans la variable prixTotalCalcul

    prixTotalCalcul.push(prixProduitDansPanier);    // ajouter un nouvel élément au tableau pour faire calcul


    console.log("Boucle prix panier:" + prixTotalCalcul);
    

// additionner les prix dans la variable prixTotalCalcul avec la méthode reduce() => applique une fonction qui est un "accumulateur"
// et qui traite chaque valeur d'une liste afin de réduire à une seule valeur. 

let reducer = (accumulator, currentValue) => accumulator + currentValue;
prixTotal = prixTotalCalcul.reduce(reducer);

console.log("Prix total:" + prixTotal);
    }
}else{
    prixTotal = 0; 
};





// =======================================================  
// ======== Formulaire + expression régulière ============
// =======================================================

let panierCard = document.createElement("div");
panierCard = document.getElementById("container_panier");
panierCard.classList.add("my-5", "container");


     //création du formulaire de commande
let form = document.createElement("form");
form.classList.add("contact_form", "container", "card");

panierCard.appendChild(form);

    let camH4 = document.createElement('h4');
    camH4.innerText = "Pour valider votre commande, merci de remplir ce formulaire : ";

    form.appendChild(camH4);

// création fonction de validité prénom, nom, ville
function validation(value) {
    return /^[A-Z-a-z\s]{3,40}$/.test(value);     // vérifie de A à Z + vérifie le nombre de caractères {}  // \s = whitespace // /^ début  // $/ fin 
};

// création fonction de validité adresse
function validationAddresse(value) {
    return /^[A-Z-a-z-0-9\s]{5,80}$/.test(value);
};

// création fonction de validité mail
function validationMail(value){
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);  // \w = wordcharacter = A word character is a character from a-z, A-Z, 0-9, including the _ (underscore) character.
};

// ajout formulaire "prénom"
let divFirstName = document.createElement("div");
divFirstName.classList.add("div_name", "my-1");

form.appendChild(divFirstName);

let labelFirstName = document.createElement("label");
labelFirstName.setAttribute('for', 'prénom');
labelFirstName.innerText = "Votre prénom : ";

divFirstName.appendChild(labelFirstName);

let firstName = document.createElement("input");
firstName.classList.add("input_order", "firstName");
firstName.setAttribute('type', 'text');
firstName.name = "Prénom";
firstName.required = true;

divFirstName.appendChild(firstName);

// Vérification de la validité du prénom
firstName.addEventListener("change", function (e) {
    if (validation(firstName.value)) {
    } else {
        alert( "Les chiffres et les symboles ne sont pas autorisés.")
        e.preventDefault()    // stopper comportement par défaut 
    }
});

// ajout formulaire "nom"
let divLastName = document.createElement("div");
divLastName.classList.add("div_name", "my-1");

form.appendChild(divLastName);

let labelLastName = document.createElement("label");
labelLastName.setAttribute('for', 'nom');
labelLastName.innerText = "Votre nom : ";

divLastName.appendChild(labelLastName);

let lastName = document.createElement("input");
lastName.classList.add("input_order", "lastName");      
lastName.setAttribute('type', 'text');
// lastName.name = "Nom";
lastName.required = true;

divLastName.appendChild(lastName);

// Vérification de la validité du nom
lastName.addEventListener("change", function (e) {
    if (validation(lastName.value)) {
    } else {
        alert("Les chiffres et symboles ne sont pas autorisés.")
        e.preventDefault()
    }
});

// ajout formulaire "adresse"
let divAddress = document.createElement("div");
divAddress.classList.add("div_name", "my-1");

form.appendChild(divAddress);

let labelAdress = document.createElement("label");
labelAdress.setAttribute('for', 'adresse');
labelAdress.innerText = "Votre adresse : ";

divAddress.appendChild(labelAdress);

let address = document.createElement("textarea");
address.classList.add("input_order", "address");
address.setAttribute('type', 'text');
address.name = "Adresse";
address.required = true;

divAddress.appendChild(address);

// Vérification de la validité de l'adresse
address.addEventListener("change", function (e) {
    if (validationAddresse(address.value)){
    } else {
        e.preventDefault()
        alert("Les symboles ne sont pas autorisés ou adresse trop courte. ");
    }
});

// ajout formulaire "ville"
let divCity = document.createElement("div");
divCity.classList.add("div_name", "my-1");

form.appendChild(divCity);

let labelCity = document.createElement("label");
labelCity.setAttribute('for', 'ville');

labelCity.innerText= "Votre ville : ";

divCity.appendChild(labelCity);

let city = document.createElement("input");
city.classList.add("input_order", "city");
city.setAttribute('type', 'text');
city.name = "Ville";
city.required = true;

divCity.appendChild(city);

// Vérification de la validité de la ville
city.addEventListener("change", function (e) {
    if (validation(city.value)) {
    } else {
        alert("Les chiffres et les symboles ne sont pas autorisés.")
        e.preventDefault()
    }
});

// ajout formulaire "mail"

let divMail = document.createElement("div");
divMail.className = 'div_name';

form.appendChild(divMail);

let labelMail = document.createElement("label");
labelMail.setAttribute('for', 'email');
labelMail.innerText = "Votre adresse mail : ";

divMail.appendChild(labelMail);

let mail = document.createElement("input");
mail.classList.add("input_order", "mail");
mail.setAttribute('type', 'email');
mail.name = "Adresse mail";
mail.required = true;

divMail.appendChild(mail);

// Vérification de la validité du mail
mail.addEventListener("change", function (e) {
    if (validationMail(mail.value)){
    } else {
        e.preventDefault()
        alert("Veuillez saisir une adresse mail valide (exemple : prenom.nom@mail.com).");
    }
});





// ======================================================
// =======   Afficher les produits dans le panier ======= 
// ======================================================


// Si le panier est vide
if(produitInLocalStorage == null || produitInLocalStorage.length === 0){
    // si le panier est vide 
    let noCart = document.createElement("p");
    noCart.classList.add("container","mb-4", "card");

    panierCard.appendChild(noCart);
    
    noCart.textContent = "Votre panier est vide !";
}else{
    for(i = 0; i < produitInLocalStorage.length; i++) {
        console.log("nombre de produits:" + produitInLocalStorage.length);
            

        // div extérieure 

        let panierList = document.createElement("div");
        panierList.classList.add("panier_liste","container", "mb-4", "card");

        panierCard.appendChild(panierList);

        

            // div row design das PaierList

            let panierListRow = document.createElement("div");
            panierListRow.classList.add("row");

            panierList.appendChild(panierListRow);
            

                // div design col dans row 

                let panierListCol = document.createElement("div");
                panierListCol.classList.add("col-lg-10", "offset-lg-1");

                panierListRow.appendChild(panierListCol);

                    // div panierListCol

                    let panierListContainer = document.createElement("div");
                    panierListContainer.classList.add("card_container");

                    panierListCol.appendChild(panierListContainer);

                        // div panierListContainer

                        let panierItems = document.createElement("div");
                        panierItems.classList.add("cart_items");

                        panierListContainer.appendChild(panierItems);

                            // ul dans panierItems

                            let panierUl = document.createElement("ul");
                            panierUl.classList.add("cart_list");
                            
                            panierItems.appendChild(panierUl);

                                // li dans panierUl

                                let panierLi = document.createElement("li");
                                panierLi.classList.add("cart_item", "clearfix", "list-unstyled");

                                panierUl.appendChild(panierLi);


                                    // Div image dans Li

                                    let panierLiImg = document.createElement("div");
                                    panierLiImg.classList.add("cart_item_image");

                                    panierLi.appendChild(panierLiImg);

                                        // img dans div panierLiImg

                                        let LiImg = document.createElement("img");
                                        LiImg.classList.add("img-thumbnail", "w-25", "my-4");
                                        LiImg.src = produitInLocalStorage[i].camPhoto;

                                        panierLiImg.appendChild(LiImg);

                                    // div mise en page card dans panierLi

                                    let panierItemsInfo = document.createElement("div");
                                    panierItemsInfo.classList.add("cart_item_info", "d-flex", "flex-column", "justify-content-between");

                                    panierLi.appendChild(panierItemsInfo);

                                        // div mise en page contenant name et desc dans panierItemsInfo

                                        let panierItemsName = document.createElement("div");
                                        panierItemsName.classList.add("cart_item_name", "card_info_col");

                                        panierItemsInfo.appendChild(panierItemsName);

                                            // div cartName dans panierItemsName

                                            let cartName = document.createElement("div");
                                            cartName.classList.add("cart_item_title", "font-weight-bold","text-uppercase","my-4");

                                            cartName.innerText = produitInLocalStorage[i].camName;

                                            panierItemsName.appendChild(cartName);

                                            // Div cartDesc dans panierItemsName

                                            // let cartDesc = document.createElement("div");
                                            // cartDesc.classList.add("cart_item_text","my-4");

                                            // cartDesc.innerText = produitInLocalStorage[i].camDesc;

                                            // panierItemsName.appendChild(cartDesc);
                                        
                                        // div cartOption dans panierItemsInfo

                                        let cartOption = document.createElement("div");
                                        cartOption.classList.add("cart_info_col");

                                        panierItemsInfo.appendChild(cartOption);

                                            // div itemOption dans cartOption

                                            let itemOption = document.createElement("div");
                                            itemOption.classList.add("cart_item_title");

                                            itemOption.innerText = "Votre choix de lentille: " + produitInLocalStorage[i].camLenses;

                                            cartOption.appendChild(itemOption);

                    // div cartTotal dans panierListContainer

                    let cartTotal = document.createElement("div");
                    cartTotal.classList.add("order_total");

                    panierListContainer.appendChild(cartTotal);

                            // div cartTotalTitle dans cartTotal 

                            let cartTotalPrice = document.createElement("div");
                            cartTotalPrice.classList.add("order_total_title", "text-right");

                            cartTotalPrice.innerText = "Prix: " + produitInLocalStorage[i].camPrice + " €";

                            cartTotal.appendChild(cartTotalPrice);

                            
                        //     // création bouton suppression d'un article
                        //     var btnDeleteCam = document.createElement('button');
                        //     btnDeleteCam.classList.add("delete_btn");
                        //     btnDeleteCam.title = 'Supprimer cet article ?';
                            
                        //     cartTotal.appendChild(btnDeleteCam);
                            
                            
                        //     let iconButton = document.createElement('i');
                        //     iconButton.classList.add("icon_button_delete","fas", "fa-trash-alt")    
                            
                        //     btnDeleteCam.appendChild(iconButton);
                        //     // Input invisible pour récupérer id pour delete

                        //     let inputBtnDelete = document.createElement("input");
                        //     inputBtnDelete.setAttribute("type", "hidden");
                        //     inputBtnDelete.value = produitInLocalStorage[i].camId;

                            
                        //     btnDeleteCam.appendChild(inputBtnDelete);
                            

                        //     console.log(btnDeleteCam.children);

                            
                        // }
    
                        // // button suppression 
                    
                        //     btnDeleteCam.addEventListener('click' , function (e) { 
                        //         e.preventDefault();
                        //             let id = btnDeleteCam.children[1].value;
                        //             // console.log(btnDeleteCam.children[1].value);
                        //             for (i = 0; i < produitInLocalStorage.length; i++){
                        //                 if (produitInLocalStorage[i].camId = id){
                    
                        //                     // Suppression de l'article du localStorage
                        //                     produitInLocalStorage.splice(id, 1);  // splice modifie le tableau en retirant.ajoutant des éléments
                                            
                        //                     // // Enregistrer new localStorage
                        //                     localStorage.setItem("newProduct", JSON.stringify(produitInLocalStorage));
                        //                     JSON.parse(localStorage.getItem("newProduct"));
                                                
                        //                     // };
                        //                     alert("Cet article a bien été supprimé !");
                        //                     window.location.href = "panier.html";   
                        //                 }
                        //             };
                    
                                };
} 
                     
            // ======  affichage prix total ======= //

                        let totalAmount = document.createElement("div");
                        totalAmount.classList.add("my-5", "container", "card");
                        
                        totalAmount.innerHTML = "Montant total à régler: " + prixTotal + "€";
                        
                        panierCard.appendChild(totalAmount);
                                          
                        
            // ======= Button bas de page ======== //
            
            let cartReset = document.createElement("button")
            cartReset.classList.add("card_btn_reset", "btn", "btnCard", );
            
            cartReset.innerText = "Vider le panier";
            
            panierCard.appendChild(cartReset);
            
            cartReset.addEventListener("click", function(e) {
            e.preventDefault();
            localStorage.removeItem("newProduct");
            alert("Votre panier a bien été vidé !");
            window.location.href = "panier.html";
            });
        
        
        let cartBtn = document.createElement("button");
        cartBtn.classList.add("cart_button", "btn", "btnCard", "float-right");
        
        cartBtn.type = 'submit';
        cartBtn.name = 'add';
        cartBtn.id = 'submit';

        cartBtn.innerText = "Commander";

        panierCard.appendChild(cartBtn);

 

// ====================================================================================
// ============================== Coté serveur ========================================      
// ====================================================================================  

// ========= faire marcher le bouton commander ======== 

// sélection du bouton 

let btnCommander = document.querySelector(".cart_button");

// addeventlistener btnCommander

btnCommander.addEventListener("click", function(e) {   
    if(validation(firstName.value) && validation(lastName.value) && validationAddresse(address.value) && validation(city.value) && validationMail(mail.value)){
    // si valide
    e.preventDefault();

    // Récupérer les données du formulaire 
    if(produitInLocalStorage === null || produitInLocalStorage.length === 0){
        alert("Vous ne pouvez pas commander avec un panier vide !");
    }else{
    let contact = {
        firstName: document.querySelector(".firstName").value,
        lastName: document.querySelector(".lastName").value,
        address: document.querySelector(".address").value,
        city: document.querySelector(".city").value,
        email: document.querySelector(".mail").value,
    }
    console.log("Formulaire :");
    console.log(contact);

    // Mettre formulaireValues dans le localstorage 

    localStorage.setItem("formulaireValues", JSON.stringify(contact));  

    // On ne peut pas mettre simplement formulaireValues car c'est un objet et non une chaine de caractères.
    // donc il faut convertir

    // création tableau produits 

    let products = [];

    for (let i = 0; i < produitInLocalStorage.length; i++) {
        let produits = produitInLocalStorage[i].camId;
        products.push(produits);
    }
    
    localStorage.setItem("listProducts", JSON.stringify(products));
    
    console.log(products);
    
    // Fichier product est un tableau, setItem -> envoyer tableau en format tableau dans le localstorage


    // Créer objet pour mettre les values formulaire + produit du panier à envoyer au serveur

    var aEnvoyer = JSON.stringify({
        contact, 
        products
    })   
    console.log("A envoyer :");
    console.log(aEnvoyer);
    
                                        
    postForm(aEnvoyer);

    }
    function postForm(aEnvoyer){
        //alert (aEnvoyer);
        fetch("http://localhost:3000/api/cameras/order", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8'
                },
                body: aEnvoyer
            })
            
            .then(function(reponse){
                return reponse.json()
            }) 
            .then(function(reponse){
                
                localStorage.setItem("PrixTotal", JSON.stringify(prixTotal))
                localStorage.setItem("Contact", JSON.stringify(reponse.contact))
                localStorage.setItem("orderId", JSON.stringify(reponse.orderId))
                window.location.href = "validation.html";
            })
        };
    }else{
        alert("Formulaire incorrect");
    }    
});
    

// Création affichage nombre d'article à côté du bouton panier 

if (produitInLocalStorage){
    for (p = 0; p < produitInLocalStorage.length; p++){

        let numArticleCart = produitInLocalStorage.length;

        let numberCart = document.createElement("div");
        numberCart = document.getElementById("number_cart");
        numberCart.classList.add("border", "rounded-circle");

        numberCart.innerText = numArticleCart; 
    }
}else{
        numArticleCart = 0;
};




// ==================== Mettre le contenu du localstorage dans le formulaire ====================
// Pouvoir changer de page sans effacer le localstorage et donc retrouver ses info 

// Prendre key localstorage et la mettre dans une variable 

// let dataLocalStorage = localStorage.getItem("formulaireValues");

// let dataLocalStorageObjet = JSON.parse(dataLocalStorage);

// // Mettre les values du localstorage dans les champs du formulaire

// document.querySelector(".firstName").setAttribute("value", dataLocalStorageObjet.firstName);
// document.querySelector(".lastName").setAttribute("value", dataLocalStorageObjet.lastName);
// document.querySelector(".address").setAttribute("value", dataLocalStorageObjet.address);
// document.querySelector(".city").setAttribute("value", dataLocalStorageObjet.city);
// document.querySelector(".mail").setAttribute("value", dataLocalStorageObjet.mail);

// console.log("dataLocalStorageObjet: ");
// console.log(dataLocalStorageObjet);