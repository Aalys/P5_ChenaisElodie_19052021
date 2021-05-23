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
    })
    .catch(function(err) {
      // Une erreur est survenue
  });


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


async function showProducts() {
  fetch("http://localhost:3000/api/cameras")
  .then(response => response.json) // récupérer response au format json
  .then(data => {  // utiliser data -> iterer chaque élément de la liste 
    console.log(1111);
    let listOfProducts = "";
    data.forEach(element => listOfProducts += `
    <div class="text-center col-lg-4 col-md-6 mb-4">
    <div class="card h-100">
    <a href="#!"><img class="card-img-top" src=${element.imageURL} alt="..." /></a>
    <div class="card-body">
    <div class="cardTitle">${element.name}</div>
    <div class="priceItem">${element.price}</div>
    <p class="cardText">${element.description}</p>
    </div>
    <div class="card-footer"><button>View</button></div>
    </div>
    </div>
    ` )
    document.querySelector(".rowtwo").innerHTML = listOfProducts;
  })
}

showProducts();