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





  const article = { name: 'Bidule', price: 200 }