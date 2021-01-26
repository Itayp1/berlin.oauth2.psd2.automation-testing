var axios = require('axios');


var config = {
  method: 'get',
  url: 'https://api.eu-gb.apiconnect.appdomain.cloud/peretzitaygmailcom1606596667215-dev/itayp-test/oauth2-test/oauth2/authorize?response_type=code&scope=info&redirect_uri=https://localhost:3000&client_id=b2b9ad8a-c8da-471e-94fc-83699a0792e2&state=xyzABC123',
 
  maxRedirects:0
};



var config2 = {
    method: 'get',
    url: 'https://api.eu-gb.apiconnect.appdomain.cloud/peretzitaygmailcom1606596667215-dev/itayp-test/oauth2-test/oauth2/authorize?response_type=code&scope=info&redirect_uri=https://localhost:3000&client_id=b2b9ad8a-c8da-471e-94fc-83699a0792e2&state=xyzABC123',
   
    maxRedirects:0
  };
  

const starting =async () =>{

    
        const locationWebQuery =await  axios(config)
        .catch(error=>   {
            return error.response.headers.location
        })             

        let [locationWeb]= decodeURIComponent(locationWebQuery.split("original-url=")[1])
        

 
        config.url=locationWeb
        const locationfromWeb =await  axios(config)
        .catch(error=>   {
            return error.response.headers.location
        })             
           

        
        config.url=locationfromWeb
        const locationwithtoken =await  axios(config)
        .catch(error=>   {
            return error.response.headers.location
        })             
           



        

        const locationwithtoken =await  axios(config2)
        .catch(error=>   {
            return error.response.headers.location
        })             
           



        



        



}

starting()
