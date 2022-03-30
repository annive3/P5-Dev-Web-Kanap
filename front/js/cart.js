document.addEventListener("DOMContentLoaded", ()=> {

    
   
    function saveBasket(basket) {
        localStorage.setItem("basket", JSON.stringify(basket));
    }
    
    function getBasket() {
        let basket = localStorage.getItem("basket");
        if (basket === null) {
            return [];
        } else {
            return JSON.parse(basket);
        }
      
    }
    
    function addBasket(product) {
        let basket = getBasket();
        let foundproduct = basket.find(p => p.id == product.id);
        if(foundproduct != undefined) {
            foundproduct.quantity++;
        }else{
            product.quantity = 1;
            basket.push(product);
            console.log(basket);
        }
        saveBasket(basket);
    }
    

    // const local = JSON.parse(localStorage.getItem("cart"));
    // if (local != null) {

        
    // document.querySelector(".cart__item__content__description p").textContent = `${local.colors}`
    // document.querySelector(".cart__item__content__settings__quantity input").innerHTML =  '<input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="3"></input>'
    // }


    // let placeToDisplayCart = "";
    
    // document.querySelector("#cart__items").innerHTML = placeToDisplayCart;
    
    // console.log(placeToDisplayCart);


    // document.querySelector(".cart__item__img").innerHTML = `<img src=${response?.data?.imageUrl} alt=${response?.data?.altTxt} />`;
       
    document.querySelector(".cart__item__content__description h2").textContent = localStorage.product;

    document.querySelector(".cart__item__content__settings__quantity p").textContent = localStorage.quantity;

    // document.querySelector("#description").textContent = response?.data?.description;

    document.querySelector(".cart__item__content__description h2 p").textContent = localstorage.color;

        
       



});