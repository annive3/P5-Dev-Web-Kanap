function fetchData(endPoint, dataToSend = null){

      return new Promise((resolve, reject)=>{
 
            fetch(endPoint).then((response)=>{

                return response.json();

            }).then((values)=>{

                 return resolve(

                     {

                        message: "Données recuperées",

                        data: values

                     }

                 );

            }).catch((error)=>{

                return resolve(

                    {

                       message: "Erreur données",


                    }

                );

            });

      });

}