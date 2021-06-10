 let produitInLocalStorage = JSON.parse(localStorage.getItem("newProduct"));
console.log(produitInLocalStorage);


function Cart(produitInLocalStorage) {
    for(i = 0; i < produitInLocalStorage.length; i++) {


    }
    
}
// let panier = async function(){
//     let response = await fetch('http://localhost:3000/api/cameras/' + id);
//     if (response.ok) {
//         let value = await response.json();
//         console.log(value);

//     let panierCard = document.createElement("div");
//     panierCard = document.getElementById("container_panier")
//     panierCard.classList.add("py-5");
//     console.log(panierCard);

//          // div extérieure 

//          let panierList = document.createElement("div");
//          panierList.classList.add("panier_liste","container", "mb-4", "card");
 
//          panierCard.appendChild(panierList);

//             // div row design das PaierList

//             let panierListRow = document.createElement("div");
//             panierListRow.classList.add("row");

//             panierList.appendChild(panierListRow);

//                 // div design col dans row 

//                 let panierListCol = document.createElement("div");
//                 panierListCol.classList.add("col-lg-10", "offset-lg-1");

//                 panierListRow.appendChild(panierListCol);

//                     // div panierListCol

//                     let panierListContainer = document.createElement("div");
//                     panierListContainer.classList.add("card_container");

//                     panierListCol.appendChild(panierListContainer);

//                         // div panierListContainer

//                         let panierItems = document.createElement("div");
//                         panierItems.classList.add("cart_items");

//                         panierListContainer.appendChild(panierItems);

//                             // ul dans panierItems

//                             let panierUl = document.createElement("ul");
//                             panierUl.classList.add("cart_list");
                            
//                             panierItems.appendChild(panierUl);

//                                 // li dans panierUl

//                                 let panierLi = document.createElement("li");
//                                 panierLi.classList.add("cart_item", "clearfix");

//                                 panierUl.appendChild(panierLi);


//                                     // Div image dans Li

//                                     let panierLiImg = document.createElement("div");
//                                     panierLiImg.classList.add("cart_item_image");

//                                     panierLi.appendChild(panierLiImg);

//                                         // img dans div panierLiImg

//                                         let LiImg = document.createElement("img");
//                                         LiImg.src = produitInLocalStorage[i].imageUrl;

//                                         panierLiImg.appendChild(LiImg);
                                    

            

//     }
// }