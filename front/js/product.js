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

        addProductToBasket({ 
            
            urlId: urlId, 

            name: response?.data?.name,
            
            imageSrc: response?.data?.imageUrl, 
            
            altxt: response?.data?.altTxt
        });
   });


   // Cette fonction ajoute un produit au panier.

   function addProductToBasket(product){

        document.querySelector("#addToCart").addEventListener("click", ()=>{

            const productColor = document.querySelector("#colors").value;

            const productQuantity = document.querySelector("#quantity").value;

            if(productColor === "" || ["0", ""].includes(productQuantity) === true){

                return alert("Veuillez choisir une couleur de canape et une quantite.");

            }

            const cart = localStorage.getItem("cart");

            product.color = productColor;

            product.quantity = productQuantity;

            // In this case the localStorage is empty
            if(cart === null){

                 const cartArray = [];

                 cartArray.push(product);

                 return localStorage.setItem("cart", JSON.stringify(cartArray))    

            }

            const {name, color, quantity} = product;

            // there the localStorage is not empty

            const productsInfos = JSON.parse(cart);

            // We need to check if the new product name is already inside the localStorage

            const isInCart = productsInfos.some((productCart)=>{

                    return productCart.name === name && productCart.color === color;

            });

           // In this case the product does not have the same name or color than the cart products

           if(isInCart === false){

                productsInfos.push(product);

                return localStorage.setItem("cart", JSON.stringify(productsInfos));

           }

           // In this case the product is already exist inside the cart, we just need to update the product inside the cart

           const updateCart = productsInfos.map((productCart)=>{

                  if(productCart.color === color){

                       productCart.quantity = Number(productCart.quantity) + Number(quantity);

                  }

                  return productCart;

           });

        
           return localStorage.setItem("cart", JSON.stringify(updateCart));

        });

   }


});




