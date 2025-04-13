const API_KEY = 'U8PNEZVPPXD79QEMLRH9HX7FJ';



async function handleForm(){
   // event.preventDefault();


    const location = document.querySelector("input").value;


    await getWeatherData(location);
   
    return false;

}


async function getWeatherData(location){

  const apiUrl =`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/2025-04-12/2025-04-12?key=${API_KEY}`  
   
 const response = await fetch(apiUrl);

 const data = await response.json();
 console.log(data);
displatWeatherData(data);

  
}



function displatWeatherData(data){
    displayAddress( data.resolvedAddress);
    displayTemperature(data.currentConditions.
        temp);

}



function displayAddress (address){
    document.querySelector("#address").innerHTML = address;
}



function displayTemperature (temp){
    document.querySelector("#temp").innerHTML =temp;
}

document.querySelector("form").addEventListener("submit", async function(event){
    event.preventDefault();
    await handleForm();
    console.log('submitting form');
})

