
  // ====== Récupérer les produits depuis l'API ===== 
  
fetch("http://localhost:3000/api/cameras")
    .then(function(res) {
      if (res.ok) {
        return res.json();
      }
    })
    .then(function(value) {
      console.log(value);
      createCard(value);
    }
    )
    .catch(function(err) {
      // Une erreur est survenue
  });


// ================= TEST 1 - liste produits =================


// let product = {
//   lenses :["35mm 1.4","50mm 1.6"],
//   _id:"5be1ed3f1c9d44000030b061",
//   name:"Zurss 50S",
//   price:49900,
//   description :"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   imageUrl:"http://localhost:3000/images/vcam_1.jpg"
// }

// let product1 = {
//   lenses:["50mm 1.8","60mm 2.8","24-60mm 2.8/4.5"],
//   _id:"5be1ef211c9d44000030b062",
//   name:"Hirsch 400DTS",
//   description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   price:309900,
//   imageUrl:"http://localhost:3000/images/vcam_2.jpg"
// }

// function Products(imageUrl, name, _id, description, price) {
//   this.imageURL = imageUrl,
//   this.name = name,
//   this._id = _id, 
//   this.description = description,
//   this.price = price
// }

// const product1 = new Products('http://localhost:3000/images/vcam_1.jpg', 'Zurss 50S', '5be1ed3f1c9d44000030b061', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', '49900')
// const product2 = new Products('http://localhost:3000/images/vcam_2.jpg', 'Hirsch 400DTS', '5be1ef211c9d44000030b062', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', '309900')

// let products = [];
// products.push(product1, product2);
// function loadProducts(callback) {
//   fetch("http://localhost:3000/api/cameras")
//     .then((response) => response.json())
//     .then(callback);
// }


// ================ TEST 2 - liste produits ===============================

// function createCardProduct(product) {
//   const productsElement = document.getElementById("rowtwo");

//   const newId = document.createElement("a");
//   newId.classList.add("btn");

// function showProducts() {
//   fetch("http://localhost:3000/api/cameras")
//   .then(response => response.json) // récupérer response au format json
//   .then(data => {  // utiliser data -> iterer chaque élément de la liste 
//     console.log(1111);
//     let listOfProducts = "";
//     data.forEach(element => listOfProducts += `
  //     <div class="text-center col-lg-4 col-md-6 mb-4">
  //     <div class="card h-100">
  //     <a href="#!"><img class="card-img-top" src=${element.imageURL} alt="..." /></a>
  //     <div class="card-body">
  //     <div class="cardTitle">${element.name}</div>
  //     <div class="priceItem">${element.price}</div>
  //     <p class="cardText">${element.description}</p>
  //     </div>
  //     <div class="card-footer"><button>View</button></div>
  //     </div>
  //     </div>
//     ` )
//     document.querySelector(".rowtwo").innerHTML = listOfProducts;
//   })
// }

// showProducts();}



// ====================== Liste produits ====================


function createCard(value){
<<<<<<< HEAD:code.js
  for (i = 0; i < value.length; i++){ // valeur initiale, condition, incrémentation 
=======
  for (i = 0; i < value.length; i++){    //for ([initialisation]; [condition]; [expression_finale])
>>>>>>> dd864af727d2f4c83e968f1d17db5f3301e5db93:js/code.js
    
    let id = value[i]._id;

    var listOfProducts = document.createElement("div"); 
    listOfProducts = document.getElementById("rowtwo");
    listOfProducts.classList.add("my-5");
    
    // Card extérieure 
    
    let newCard = document.createElement("div");
    newCard.classList.add("newCard","col-lg-4", "col-md-6", "mb-4",);

    listOfProducts.appendChild(newCard);
    
    console.log(newCard);

    // // Bloc id cachée

    // let idCard = document.createElement("input");

    // idCard.setAttribute("type", "hidden");
    // idCard.classList.add("idCard");

    // idCard.value = id;

    // newCard.appendChild(idCard);
    // console.log(idCard);
    
    // Deuxième div design 
    
    let inCard = document.createElement("div");
    inCard.classList.add("card","h-100");
    
    newCard.appendChild(inCard);
    
    // Element image dans inCard
    
    let addImage = document.createElement("a");
    addImage.classList.add("img");
    
    
    inCard.appendChild(addImage);
    
    // Element img dans addImage
    
    let image = document.createElement("img")
    image.classList.add("card-img-top");
    
    image.src = value[i].imageUrl;
    
    addImage.appendChild(image);
    
    
    // Element description dans inCard
    
    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    
    inCard.appendChild(cardBody);
    
    // Element button dans inCard
    
    let cardBottom = document.createElement("div");
    cardBottom.classList.add("card-footer", "d-flex", "justify-content-center");
    
    inCard.appendChild(cardBottom);

      // lien button dans cardBottom
      
      let linkBtnCard = document.createElement("a");
      cardBottom.classList.add("linkBtnCard");
      
      linkBtnCard.href = `../pages/produit.html?id=${id}`;

      cardBottom.appendChild(linkBtnCard);

        // Button dans linkbtnCard dans cardBottom

        let btnCard = document.createElement("button");
        btnCard.classList.add("btnCard","btn");

        btnCard.innerText = "Plus de détails";

        linkBtnCard.appendChild(btnCard);
    
    // Element name dans cardBody 
    
    let cardTitle = document.createElement("div");
    cardTitle.classList.add("cardTitle","text-center");
    
    cardTitle.innerText = value[i].name;
    
    cardBody.appendChild(cardTitle);
    
    // Element description dans cardBody
    
    let cardText = document.createElement("div");
    cardText.classList.add("cardtext", "my-4");
    
    cardText.innerText = value[i].description;
    
    cardBody.appendChild(cardText);
<<<<<<< HEAD:code.js
  }
}

// ================  Formulaire page panier =========== 


function afficheForm(){
 
 
  var form = document.createElement(form);
      form.method="post";
      form.action="index.asp?function=COUPONCODE";
      form.name="couponcode";

  var divParent = document.getElementById("divParent");
  divParent.appendChild(form)
}
    
=======
    // Element price dans cardBody
    
    let cardPrice = document.createElement("div");
    cardPrice.classList.add("priceItem");
    
    cardPrice.innerText = value[i].price /100 + " €";

    cardBody.appendChild(cardPrice);


    // btnCard.addEventListener('click', function(){
    //   var urlProduit = window.location
    // });
  }
}

>>>>>>> dd864af727d2f4c83e968f1d17db5f3301e5db93:js/code.js
