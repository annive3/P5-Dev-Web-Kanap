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

        document.querySelector(".item__img").innerHTML = `<img src=${response?.data?.imageUrl} alt=${response?.data?.altTxt} />`;
       
        document.querySelector("#title").textContent = response?.data?.name;

        document.querySelector("#price").textContent = response?.data?.price;

        document.querySelector("#description").textContent = response?.data?.description;

        const colors = response?.data?.colors;

        let colorsHTML;

        for(color of colors){

              colorsHTML += `
              
                  <option value=${color}>${color}</option>;
              
              `;

        }

        document.querySelector("#colors").insertAdjacentHTML("beforeend", colorsHTML);
   });



   
// // *************************

// const local = JSON.parse(localStorage.getItem("cart"));
// if (local != null) {

//     console.log(local);
// }

// addToCart.onclick = () => {
// let cart = {
//     quantity: quantity.value,
//     colors: colors.value
// };
// localStorage.setItem("cart", JSON.stringify(cart))

// }



});




