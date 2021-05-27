// const img = document.getElementById(img) 


// const articles = async function() {
  //   try {
    //     let response = await fetch("http://localhost:3000/api/cameras") 
    //     if (response.ok) {
      //       let data = await response.json() // await attendre la résolution de la promesse
//         console.log(data)
//     } else {
  //       console.error('Retour du serveur :', response.status)
  //     }
  //   } catch (e) {  //Capture les erreurs globalement 
  //     console.log(e)
  //   }
  // }
  

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



// ====================== TEST 3 - Liste produits ====================

function createCard(value){
  for (i = 0; i < value.length; i++){
    
    var listOfProducts = document.createElement("div") 
    listOfProducts = document.getElementById("rowtwo");
    listOfProducts.classList.add("my-5");
    
    // Card extérieure 
    
    let newCard = document.createElement("div") ;
    newCard.classList.add("col-lg-4");
    newCard.classList.add("col-md-6");
    newCard.classList.add("mb-4");
    
    listOfProducts.appendChild(newCard);
    
    console.log(newCard);
    
    // Deuxième div design 
    
    let inCard = document.createElement("div");
    inCard.classList.add("card");
    inCard.classList.add("h-100");
    
    newCard.appendChild(inCard);
    // inCard.textContent = value[i].name;
    
    // Element image dans inCard
    
    let addImage = document.createElement("a");
    addImage.classList.add("img");
    
    
    inCard.appendChild(addImage);
    
    // Element img dans addImage
    
    let image = document.createElement("img")
    image.classList.add("card-img-top")
    
    image.src = value[i].imageUrl;
    
    addImage.appendChild(image);
    
    
    // Element description dans inCard
    
    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    
    inCard.appendChild(cardBody);
    
    // Element button dans inCard
    
    let cardBottom = document.createElement("div");
    cardBottom.classList.add("card-footer");
    
    inCard.appendChild(cardBottom);
    
    
    // Element name dans cardBody 
    
    let cardTitle = document.createElement("div");
    cardTitle.classList.add("cardTitle");
    cardTitle.classList.add("text-center");
    
    cardTitle.innerText = value[i].name;
    
    cardBody.appendChild(cardTitle);
    
    // Element price dans cardBody
    
    let cardPrice = document.createElement("div");
    cardPrice.classList.add("priceItem");
    cardPrice.classList.add("my-4");
    
    cardPrice.innerText = value[i].price /100 + " €";
    cardBody.appendChild(cardPrice);
    
    // Element description dans cardBody
    
    let cardText = document.createElement("div");
    cardText.classList.add("cardtext");
    
    cardText.innerText = value[i].description;
    
    cardBody.appendChild(cardText);
    
    
  }
}

    