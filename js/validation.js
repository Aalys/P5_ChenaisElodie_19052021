const contact = JSON.parse(localStorage.getItem("Contact"));
const orderId = JSON.parse(localStorage.getItem("orderId"));
const total = JSON.parse(localStorage.getItem("PrixTotal"));
console.log( `Merci ${contact.firstName} ! Voici votre numéro de commande : ${orderId}, pour un montant total de : ${total} €. `);
localStorage.clear();



// ==================== Page ========================= //


let validationContainer = document.createElement("div");
validationContainer = document.getElementById("validate_confirmation");
validationContainer.classList.add("py-5", "container");

    let validationCard = document.createElement("div");
    validationCard.classList.add("container", "px-4", "px-lg-5","card");

    validationContainer.appendChild(validationCard);

             // div row 

             let validateRow = document.createElement("div");
             validateRow.classList.add("row", "gx-4", "gx-lg-5", "justify-content-center");
     
             validationCard.appendChild(validateRow);

                //  h1

                let validateTitle = document.createElement("h1");
                validateTitle.classList.add("display-5", "fw-bolder");

                validateTitle.innerText = "Merci pour votre achat ! :)";

                validateRow.appendChild(validateTitle);

                // text

                let validateText = document.createElement("div");
                validateText.classList.add("my-4", "des");

                validateText.innerText = "Merci " + contact.firstName + " ! Voici votre numéro de commande : " + orderId + ", pour un montant total de :" + total + "€. Vous recevrez dans quelques instants un mail de confirmation."

                validateRow.appendChild(validateText);
            