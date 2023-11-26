let headersList = {
    "Accept": "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)"
   }
   
   let response = await fetch("https://www.formula1.com/en/results.html/lasted/drivers.html", { 
     method: "GET",
     headers: headersList
   });
   
   let data = await response.text();
   document.body.innerText = data
   