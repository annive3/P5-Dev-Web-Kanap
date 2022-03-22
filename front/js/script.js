fetch('http://localhost:3000/api/products')
    .then(function(response){
        if(response.ok === true){
             return response.json();
        }
    })
    .then(function(values){
        let affichage = '';
        for (let items of values) {
            affichage += ` <a href="./product.html?${items._id}">
            <article>
              <img src= ${items.imageUrl} alt= ${items.altTxt}>
              <h3 class="productName">${items.name}</h3>
              <p class="productDescription">${items.description}</p>
            </article>
          </a> `;
          
        }  
        document.querySelector("#items").innerHTML = affichage;
        
    })
    .catch(function(err){
        // Une erreur est survenue
        console.log(err)
    });

    


