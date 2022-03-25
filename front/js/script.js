
document.addEventListener("DOMContentLoaded", ()=>{

        fetchData('http://localhost:3000/api/products').then((response)=>{

                 if(response.message === "Erreur données"){

                       return alert("Erreur lors de la récupération des données.");

                 }

                 let htmlToDisplay = "";

                 for(kanap of response.data){

                      htmlToDisplay += ` 
                        <a href="./product.html?id=${kanap._id}">
                            <article>
                              <img src= ${kanap.imageUrl} alt= ${kanap.altTxt}>
                              <h3 class="productName">${kanap.name}</h3>
                              <p class="productDescription">${kanap.description}</p>
                            </article>
                        </a> `;     

                    }

                document.querySelector("#items").innerHTML = htmlToDisplay;


        })

});

  