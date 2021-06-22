   // récupère localstorage de la page produit.js
   
   let produitInLocalStorage = JSON.parse(localStorage.getItem("newProduct"));
    console.log(produitInLocalStorage);



    // =======================================================
    // =============== Calcul du total du panier ============= 
    // =======================================================

   // déclaration de la variable pour mettre les prix présents dans le panier

   let prixTotalCalcul = [];

   // aller chercher les prix dans le panier

   for (let m = 0; m < produitInLocalStorage.length; m++){
       let prixProduitDansPanier = produitInLocalStorage[m].camPrice;

       // mettre les prix du panier dans la variable prixTotalCalcul

       prixTotalCalcul.push(prixProduitDansPanier);    // ajouter un nouvel élément au tableau 


       console.log("Boucle prix panier:" + prixTotalCalcul);
   }

   // additionner les prix dans la variable prixTotalCalcul avec la méthode reduce() => applique une fonction qui est un "accumulateur"
   // et qui traite chaque valeur d'une liste afin de réduire à une seule valeur. 

   const reducer = (accumulator, currentValue) => accumulator + currentValue;
   const prixTotal = prixTotalCalcul.reduce(reducer);

   console.log("Prix total:" + prixTotal);





    // =======================================================  
    // ======== Formulaire + expression régulière ============
    // =======================================================

    
    let panierCard = document.createElement("div");
    panierCard = document.getElementById("container_panier")
    panierCard.classList.add("my-5", "container");
    console.log(panierCard);



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
    lastName.name = "Nom"
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
    mail.name = "Adresse mail"
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
        // let panier = async function(){
        //     let response = await fetch('http://localhost:3000/api/cameras/' + id);
        //     if (response.ok) {
        //         let value = await response.json();
    }else{
        for(i = 0; i < produitInLocalStorage.length; i++) {
            console.log("nombre de produits:" + produitInLocalStorage.length);


            // ==== Formulaire ====
                

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


                                        // // Div image dans Li

                                        // let panierLiImg = document.createElement("div");
                                        // panierLiImg.classList.add("cart_item_image");

                                        // panierLi.appendChild(panierLiImg);

                                        //     // img dans div panierLiImg

                                        //     let LiImg = document.createElement("img");
                                        //     LiImg.src = produitInLocalStorage[i].imageUrl;

                                        //     panierLiImg.appendChild(LiImg);

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
                        // cartTotal.id = i++;

                        panierListContainer.appendChild(cartTotal);

                                // div cartTotalTitle dans cartTotal 

                                let cartTotalPrice = document.createElement("div");
                                cartTotalPrice.classList.add("order_total_title", "text-right");

                                cartTotalPrice.innerText = "Prix: " + produitInLocalStorage[i].camPrice + " €";

                                cartTotal.appendChild(cartTotalPrice);

                                // création bouton suppression d'un article
                                let btnDeleteCam = document.createElement('button');
                                btnDeleteCam.classList.add("delete_btn");
                                btnDeleteCam.title = 'Supprimer cet article ?';

                                cartTotal.appendChild(btnDeleteCam);
                                
                                let iconButton = document.createElement('i');
                                iconButton.classList.add("icon_button_delete","fas", "fa-trash-alt")    

                                btnDeleteCam.appendChild(iconButton);

                                let btnDelete = document.getElementsByClassName("delete_btn");
                                for (let i = 0 ; i < btnDelete.length; i++) { 
                                    btnDelete[i].addEventListener('click' , function (e) { 
                                        e.preventDefault();
                                        let id = this.closest(".order_total").id;  // appel 
                            
                                        // Suppression de l'article du localStorage
                                        produitInLocalStorage.splice(id, 1);  // splice modifie le tableau en retirant.ajoutant des éléments
                            
                                        // Enregistrer new localStorage
                                        localStorage.setItem("newProduct", JSON.stringify(produitInLocalStorage));
                                        JSON.parse(localStorage.getItem("newProduct"));
                            
                                        alert("Cet article a bien été supprimé !");
                                        window.location.href = "panier.html";   


                                // === Méthode Filter ON ==

                                // let btnDelete = document.getElementsByClassName("delete_btn");
                                // for (let i= 0; i < btnDeleteCam)
                                    }); 
      
        
    };
}}
                            
                         
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
                
                cartReset.addEventListener("click", function (e) {
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

    let btnCommander = document.getElementsByClassName("cart_button");
    console.log(btnCommander);
    
    // addeventlistener btnCommander

    btnCommander[0].addEventListener("click", function(e) {   
    // if(validation(firstName.value) && validation(lastName.value) && validationAddresse(address.value) && validation(city.value) && validationMail(mail.value)){
    // si valide
    e.preventDefault();

    // Récupérer les données du formulaire 
        console.log(document.getElementsByClassName("firstName").value);
    let formulaireValues = {
        firstName: document.getElementsByClassName("firstName").value,
        lastName: document.getElementsByClassName("lastName").value,
        adress: document.getElementsByClassName("address").value,
        city: document.getElementsByClassName("city").value,
        mail: document.getElementsByClassName("mail").value,
    }
    console.log("Formulaire :");
    console.log(formulaireValues);

    // Mettre formulaireValues dans le localstorage 

    localStorage.setItem("formulaireValues", JSON.stringify(formulaireValues));  

    // On ne peut pas mettre simplement formulaireValues car c'est un objet et non une chaine de caractères.
    // donc il faut convertir

    // ============ Test 1 ================ // 
    
    // // Récupérer les données du formulaire pour les mettre dans le localstorage

    // localStorage.setItem("firstName", document.querySelector(".firstName").value);
    // localStorage.setItem("lastName", document.querySelector(".lastName").value);
    // localStorage.setItem("address", document.querySelector(".address").value);
    // localStorage.setItem("city", document.querySelector(".city").value);
    // localStorage.setItem("mail", document.querySelector(".mail").value);
        
    // console.log("Prénom:" + document.querySelector(".firstName").value);

    // // // Récupérer le prixTotal pour le mettre dans le localstorage 

    // // localStorage.setItem("prixTotal", prixTotal);   
    // // let localStoragePrice = localStorage.getItem("prixTotal");
        
    // // création objet contact pour recueillir les info contact //
    // let formulaire = {
    //     firstName: localStorage.getItem("firstName"),
    //     lastName: localStorage.getItem("lastName"),
    //     adress: localStorage.getItem("adress"),
    //     city: localStorage.getItem("city"),
    //     mail: localStorage.getItem("mail"),
    // }
    // console.log("Formulaire: ");
    // console.log(formulaire);


// =========== Fin TEST 1 ==========================


    // Créer objet pour mettre les values formulaire + produit du panier à envoyer au serveur

    let aEnvoyer = {
        produitInLocalStorage,
        formulaireValues, 
    }
    console.log("A envoyer :");
    console.log(aEnvoyer);

    // Récupérer l'id de commande renvoyée par l'API et stockage dans le localStorage
    function getOrderValidationId(aEnvoyer) {
        let orderId = responseId.orderId;
        console.log(orderId);
        localStorage.setItem("orderValidationId", orderId);
    }

    // aEnvoyer vers le serveur  avec la méthode  fetch POST

    // let envoie = fetch("http://localhost:3000/api/cameras/order", {
    //     method: "POST",
    //     body: JSON.stringify(aEnvoyer),
    //     headers: {
    //         "Content-Type": "application/json",
    //     }

    // });

    // // Pour voir le résultat dans la console

    // envoie.then(async (response) => {
    //     try {
    //         console.log("response : ");
    //         console.log(response);

    //         let contenu = await response.json();
    //         console.log(contenu);
    //     }catch(e){
    //         console.log(e);    
    //     }

    // })


    
    
    async function postForm(dataToSend){
        try{ 
           let response = fetch("http://localhost:3000/api/cameras/order", {
                   method: "POST",
                   body: JSON.stringify(dataToSend),
                   headers: {
                       "Content-Type": "application/json",
                   }
               });
            if(response.ok){
            let responseId = await response.json();
                console.log(dataToSend.orderId);
                getOrderValidationId(responseId);
                window.location = "validation.html";
                localStorage.removeItem("newProduct");
            }else {
                console.error('Retour du serveur : ', response.status);
            }
        } catch (e) {
            alert("Erreur : " + error);
            console.log(e);
       } 
       postForm(dataToSend);
    };
});
    



// ==================== Mettre le contenu du localstorage dans le formulaire ====================
// Pouvoir changer de page sans effacer le localstorage et donc retrouver ses info 

// Prendre key localstorage et la mettre dans une variable 

let dataLocalStorage = localStorage.getItem("formulaireValues");

let dataLocalStorageObjet = JSON.parse(dataLocalStorage);

// Mettre les values du localstorage dans les champs du formulaire

document.querySelector(".firstName").setAttribute("value", dataLocalStorageObjet.firstName);
document.querySelector(".lastName").setAttribute("value", dataLocalStorageObjet.lastName);
document.querySelector(".address").setAttribute("value", dataLocalStorageObjet.address);
document.querySelector(".city").setAttribute("value", dataLocalStorageObjet.city);
document.querySelector(".mail").setAttribute("value", dataLocalStorageObjet.mail);

console.log("dataLocalStorageObjet: ");
console.log(dataLocalStorageObjet);

