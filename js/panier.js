   // récpère localstorage de la page produit.js
   
   let produitInLocalStorage = JSON.parse(localStorage.getItem("newProduct"));
    console.log(produitInLocalStorage);
    
   // ======== Formulaire + expression régulière ========== //

    
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

    // création fonctions de validité prénom, nom, ville
    function validation(value) {
        return /^[A-Z-a-z\s]{3,40}$/.test(value);
    };

    // création fonctions de validité adresse
    function validationAddresse(value) {
        return /^[A-Z-a-z-0-9\s]{5,80}$/.test(value)
    };

    // création fonctions de validité mail
    function validationMail(value){
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)
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
    firstName.classList.add("input_order");
    firstName.setAttribute('type', 'text');
    firstName.name = "Prénom"
    firstName.required = true;

    divFirstName.appendChild(firstName);

    // Vérification de la validité du prénom
    firstName.addEventListener("change", function (event) {
        if (validation(firstName.value)) {
        } else {
            alert( "Aucun chiffre ou symbole n'est autorisé.")
            event.preventDefault()
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
    lastName.classList.add("input_order");      
    lastName.setAttribute('type', 'text');
    lastName.name = "Nom"
    lastName.required = true;

    divLastName.appendChild(lastName);

    // Vérification de la validité du nom
    lastName.addEventListener("change", function (event) {
        if (validation(lastName.value)) {
        } else {
            alert("Aucun chiffre ou symbole n'est autorisé.")
            event.preventDefault()
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
    address.classList.add("input_order");
    address.setAttribute('type', 'text');
    address.name = "Adresse";
    address.required = true;

    divAddress.appendChild(address);

    // Vérification de la validité de l'adresse
    address.addEventListener("change", function (event) {
        if (validationAddresse(address.value)){
        } else {
            event.preventDefault()
            alert("Aucun symbole n'est autorisé.");
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
    city.classList.add("input_order");
    city.setAttribute('type', 'text');
    city.name = "Ville";
    city.required = true;

    divCity.appendChild(city);

    // Vérification de la validité de la ville
    city.addEventListener("change", function (event) {
        if (validation(city.value)) {
        } else {
            alert("Aucun chiffre ou symbole n'est autorisé.")
            event.preventDefault()
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
    mail.classList.add("input_order");
    mail.setAttribute('type', 'email');
    mail.name = "Adresse mail"
    mail.required = true;

    divMail.appendChild(mail);

    // Vérification de la validité du mail
    mail.addEventListener("change", function (event) {
        if (validationMail(mail.value)){
        } else {
            event.preventDefault()
            alert("Veuillez saisir une adresse mail valide (exemple : prenom.nom@mail.com).");
        }
    });


    // ======================================================
    // =======   Afficher les produits dans le panier ======= // 
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
                                for (let i = 0 ; i < btnDelete.length; i++) { // boucle pour ne pas prendre le 1er de la liste
                                    btnDelete[i].addEventListener('click' , function (e) { 
                                        event.preventDefault();
                                        let id = this.closest(".order_total").camId;
                            
                                        // Suppression de l'article du localStorage
                                        produitInLocalStorage.splice(id, 1);
                            
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
}
                            
                         



                            let totalAmount = document.createElement("div");
                            totalAmount.classList.add("my-5", "container", "card");
                            
                            totalAmount.innerText = "Montant total à régler: " + "€";
                            
                            panierCard.appendChild(totalAmount);
                    
                            
                            
                // ======= Button ======== //
                
                let cartReset = document.createElement("button")
                cartReset.classList.add("card_btn_reset", "btn", "btnCard", );
                
                cartReset.innerText = "Vider le panier";
                
                panierCard.appendChild(cartReset);
                
                cartReset.addEventListener("click", function (event) {
                event.preventDefault();
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

            // envoie des données du panier et du formulaire au serveur si valide

            // submit.addEventListener("click", function (event) {
            //     if(validation(firstName.value) && validation(lastName.value) && validationAddresse(address.value) && validation(city.value) && validationMail(mail.value)){
            //         event.preventDefault();

            // // envoie du prix total au localStorage
            // localStorage.setItem('totalPrice', totalPrice);
            // const storagePrice = localStorage.getItem('totalPrice');
            // console.log(storagePrice);
            //     })
            
    

    // validation des données et envoie au serveur method POST

    let envoie = async function (data){
        try {
            let response = await fetch("http://localhost:3000/api/cameras/order", {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if(response.ok) {
                let value = await response.json();
                console.log(value.orderId);
                localStorage.setItem("responseOrder", value.orderId);
                window.location = "confirmation.html";
                localStorage.removeItem("newProduct");

            } else {
                event.preventDefault();
                console.error('Retour du serveur : ', response.status);
                alert('Erreur rencontrée : ' + response.status);
            } 
        } catch (error) {
            alert("Erreur : " + error);
        } 
    };
    // post(send);
}
