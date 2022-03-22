document.addEventListener("DOMContentLoaded",()=>{

   // Ici tu ecris ton code

   // On commence par recuperer l'id du produit qui est dans l'url de la page

   let urlId = window.location.search;

   urlId = new URLSearchParams(urlId);

   urlId = urlId.get("id");

   fetchData(`http://localhost:3000/api/products/${urlId}`).then((response)=>{

        if(response.message === "Erreur données"){

            return alert("Erreur lors de la récupération des données.");

        }

        // Ici tu affiches les informations du produit dans la page product.html

   });

});