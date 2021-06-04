// // =============== formulaire =====================

// const getCameras = async function(){
//     let response = await fetch('http://localhost:3000/api/cameras/:_id');
  

//   const form = document.createElement('form');
//   camerasDivInfo.appendChild(form);

//   const formDiv = document.createElement('div');
//   form.appendChild(formDiv);
//   formDiv.className = 'lenses_choice';

//   const label = document.createElement('label');
//   formDiv.appendChild(label);
//   label.textContent = "Choisissez la lentille de votre objectif : ";
//   label.setAttribute('for', "Choix de lentilles de " + value.name);

//   const select = document.createElement('select');
//   formDiv.appendChild(select);
//   select.setAttribute('name', "Choix de lentilles de " + value.name);
//   select.setAttribute('id', "select_1 ");

//   const lenses = value.lenses;

//     for (i = 0; i < lenses.length; i++) {
//         const selectOption = document.createElement('option');
//         select.appendChild(selectOption);
//         selectOption.textContent = lenses[i];
//         selectOption.setAttribute("value", lenses[i]);
//     }
// };
// // Appel de la fonction
// getCameras();

// const idForm = document.querySelector("#option_produit");

// const envoyerPanier = document.querySelector("btn_envoyer");

// // addEventListener = écouter le bouton & envoyer le panier
//      envoyerPanier.addEventListener("click", function(e) => {
//      e.preventDefault()

//   // Mettre le choix dans une variable
//   const choixForm = idForm.value;
//   console.log(choixForm);

//   // Récupération valeurs du formulaire

//   let optionProduit = {
//     name = value.name,
//     id = value._id,
//     desc = value.description,
//     price = value.price / 100,
//     option_produit = choixForm,
//     quantité : 1,
//     }

//   console.log(optionProduit);
// });

//   =============  localstorage ===================   
//   Que des chaines de caractère dans le localstorage -> json -> json.stringify() pour convertir js vers json
//   Json.parse pour convertir ceux qui sont dans le localstorage en JS


//   Déclaration variable pour mettre keys et values qui sont dans le localstorage, voir si il y a quelque chose
  
//   let produitInLocalStorage = JSON.parse(localStorage.getItem("produits"));
//   console.log(produitInLocalStorage);
  
  
//   // Si il y a déjà des produits dans le localstorage
//   if(produitInLocalStorage){     // vérifie que la clé n'existe pas déjà 
//     produitInLocalStorage.push(optionProduit)
//     localStorage.setItem("produit", JSON.stringify(produitInLocalStorage));
    
//     console.log(produitInLocalStorage);
//    }else {
//    // Si il n'y a pas de produits dans le localstorage 
//     produitInLocalStorage = [];
//     produitInLocalStorage.push(optionProduit);
//     localStorage.setItem("produit", JSON.stringify(produitInLocalStorage));

//     console.log(produitInLocalStorage);
//   }
  
