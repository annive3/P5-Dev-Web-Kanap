document.addEventListener("DOMContentLoaded",()=>{

   // Ici tu ecris ton code

   // On commence par recuperer l'id du produit qui est dans l'url de la page

   let urlId = window.location.search;

   urlId = new URLSearchParams(urlId);

   urlId = urlId.get("id");

   console.log(urlId);

   fetchData(`http://localhost:3000/api/products/${urlId}`).then((response)=>{

        if(response.message === "Erreur données"){

            return alert("Erreur lors de la récupération des données.");

        }

            console.log(response.message);

        // Ici tu affiches les informations du produit dans la page product.html

        let productsDescriptionHtmlToDisplay = `<img src="${imageUrl}" alt="${altTxt}"> `;

        document.querySelector("#item__img").innerHTML = productsDescriptionHtmlToDisplay;
           console.log(response.data);
   });

});