const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');
console.log(id);


// =============== formulaire =====================

const getCameras = async function(){
    let response = await fetch('http://localhost:3000/api/cameras/' + id);
    if (response.ok) {
        let value = await response.json();
        console.log(value);

  
    var camerasDivInfo = document.createElement("div");    
    camerasDivInfo = document.getElementById("container_article");  // relié à ma div de la page produit
    camerasDivInfo.classList.add("py-5");

        // div extérieure 

        let cameraArticle = document.createElement("div");
        cameraArticle.classList.add("article_camera","container", "px-4", "px-lg-5","card");

        camerasDivInfo.appendChild(cameraArticle);

        // div row 

        let cameraRow = document.createElement("div");
        cameraRow.classList.add("row", "gx-4", "gx-lg-5", "align-items-center");

        cameraArticle.appendChild(cameraRow);

        // Element photo dans cameraRow

        let cameraPhoto = document.createElement("div");
        cameraPhoto.classList.add("col-md-6");

        cameraRow.appendChild(cameraPhoto);

            // Element img dans cameraPhoto

            let cameraImg = document.createElement("img");
            cameraImg.classList.add("cameraImg", "card-img-top", "mb-5", "mb-md-0");

            cameraImg.src = value.imageUrl;
            
            cameraPhoto.appendChild(cameraImg);

        // Element contenant les infos 

        let cameraCard = document.createElement("div");
        cameraCard.classList.add("col-md-6");

        cameraRow.appendChild(cameraCard);

            // Title dans CameraCard

            let cameraTitle = document.createElement("h1");
            cameraTitle.classList.add("display-5", "fw-bolder");

            cameraTitle.innerText = value.name;

            cameraCard.appendChild(cameraTitle);
            
            // cameraDivPrice dans CameraCard 
            
            let cameraDivPrice = document.createElement("div");
            cameraDivPrice.classList.add("fs-5", "mb-5");
            
            cameraCard.appendChild(cameraDivPrice);
            
                // cameraPrice dans cameraDivPrice pour afficher prix
                
                let cameraPrice = document.createElement("span");
                cameraPrice.classList.add("camera_price");
                
                cameraPrice.innerText = value.price /100 + "€";
                
                cameraDivPrice.appendChild(cameraPrice);
            
            
            // cameraText dans cameraCard 

            let cameraText = document.createElement("p");
            cameraText.classList.add("lead", "text-justify");

            cameraText.innerText = value.description;

            cameraCard.appendChild(cameraText);
            
            // Création div dans CameraCard pour aligner option et boutton 

            let divOption = document.createElement("div");
            divOption.classList.add("d-flex");

            cameraCard.appendChild(divOption);

            // Choix option dans divOption
            
            let  formDiv = document.createElement('div');
            formDiv.className = 'lenses_choice';

            divOption.appendChild(formDiv);

                let label = document.createElement('label');
                label.textContent = "Choisissez la lentille de votre objectif : ";
                label.setAttribute('for', "Choix de lentilles de " + value.name);

                formDiv.appendChild(label);

                // Selection du choix de lentilles

                let select = document.createElement('select');
                select.classList.add("text-center");
                select.setAttribute('name', "Choix de lentilles de " + value.name);
                select.setAttribute('id', "select_1 ");
                
                formDiv.appendChild(select);

                // Btn du panier dans formDiv
                
                let addCam = document.createElement("button");
                addCam.classList.add("btn_envoyer", "btnCard","btn", "flex-shrink-0", "my-4");

                addCam.type = 'submit';
                addCam.name = 'add';
                addCam.id = 'submit';

                addCam.innerText = "Ajouter au panier";

                divOption.appendChild(addCam);


        // récupération des données dans lenses

        let lenses = value.lenses;

        // boucle afin d'afficher dans le select lenses en fonction du nombre d'entrées dans le tableau 

        for (i = 0; i < lenses.length; i++) {   
            let selectOption = document.createElement('option');
            selectOption.textContent = lenses[i];
            selectOption.setAttribute("value", lenses[i]);

            select.appendChild(selectOption);
        }


        // addEventListener = écouter le bouton & envoyer le panier

        addCam.addEventListener("click", function(e) {
            e.preventDefault();
           
            // const idForm = document.querySelector("#option_produit");
            
            // const envoyerPanier = document.querySelector("btn_envoyer");
            
            //   // Mettre le choix dans une variable
            //   const choixForm = idForm.value;
            //   console.log(choixForm);
       
              // Récupération valeurs du formulaire

            let optionProduit = {
                camName : value.name,
                camId : value._id,
                camDesc : value.description,
                camPrice : value.price / 100,
                camLenses: select.value,
                quantité : 1,
                };

        console.log(optionProduit);

        // =============  localstorage ===================   
        // Que des chaines de caractère dans le localstorage -> json -> json.stringify() pour convertir js vers json
        // Json.parse pour convertir ceux qui sont dans le localstorage en JS 
                
        // Déclaration variable pour mettre keys et values qui sont dans le localstorage, voir si il y a quelque chose
        
        let produitInLocalStorage = JSON.parse(localStorage.getItem("newProduct"));
        console.log(produitInLocalStorage);
        
        let camLenses = select.value;
        // Si il y a déjà des produits dans le localstorage
        if(produitInLocalStorage){     // vérifie que la clé n'existe pas déjà 
          produitInLocalStorage.push(optionProduit);
          localStorage.setItem("newProduct", JSON.stringify(produitInLocalStorage));
          
          console.log(produitInLocalStorage);

            if (window.confirm(select.name + " " + camLenses + ' a bien été ajouté. Souhaitez vous aller à votre panier ?')) { 
                window.location.href = "panier.html";
            } else {
                window.location.href = "../index.html";
        }
         }else {
         // Si il n'y a pas de produits dans le localstorage 
          produitInLocalStorage = [];
          produitInLocalStorage.push(optionProduit);
          localStorage.setItem("newProduct", JSON.stringify(produitInLocalStorage));
      
          console.log(produitInLocalStorage);

            if (window.confirm(select.name + " " + camLenses + ' a bien été ajouté. Souhaitez vous aller à votre panier ?')) { 
                window.location.href = "panier.html";
            } else {
                window.location.href = "../index.html";
            }
         }
        });
        } else {
            console.error('Retour du serveur : ', response.status);
            alert('Erreur rencontrée : ' + response.status);
        } 
};
// Appel de la fonction
getCameras();

