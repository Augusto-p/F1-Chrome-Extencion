let headersList = {
    "Accept": "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)"
   }
   
   let response = fetch("https://racingnews365.com/formula-1-standings-2023", { 
     method: "GET",
     headers: headersList
   });
   
   let data = response;
   console.log(data);
   