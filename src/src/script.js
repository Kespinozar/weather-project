function formatDate(timestamp){

    let date= new Date(timestamp);
    let hours= date.getHours();
    if(hours<10){
         hours=`0${hours}`;  }
    let minutes= date.getMinutes();
    if (minutes<10){
        minutes=`0 ${minutes}`; }
    let year=date.getFullYear();
    let days= ["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday"];
    let dayName=days[date.getDay()];
    let months=["January","February","March","April","May","June","July","August","September","October","November","December"];
    let month= months[date.getMonth()];
    let day= date.getDate();

return` ${dayName}, ${month} ${day}, ${year} ${hours}:${minutes}`;

}




function displayTemperature(response){

console.log(response.data);

let temperatureElement=document.querySelector("#temperature");
temperatureElement.innerHTML= Math.round( response.data.main.temp);

let cityName=document.querySelector("#city");
cityName.innerHTML= response.data.name;

let description=document.querySelector("#description");
description.innerHTML= response.data.weather[0].description;

let humidity=document.querySelector("#humidity");
humidity.innerHTML= response.data.main.humidity;


let wind=document.querySelector("#wind");
wind.innerHTML= Math.round(response.data.wind.speed);


let dateElement=document.querySelector("#date");
dateElement.innerHTML= formatDate(response.data.dt*1000);

let icon=document.querySelector("#icon");
icon.setAttribute("src",`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`)
icon.setAttribute("alt",response.data.weather[0].description );

celciusTemperature= response.data.main.temp;
}

function search(city){

let apiKey="d89de28f7e977585d9dbb24f44f2c66f";
let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric `;
axios.get(apiUrl).then(displayTemperature);
    
}


function handleSubmit(event){
event.preventDefault();
let cityInput=document.querySelector("#city-input");

search(cityInput.value);

}

function displayFahrenheitTemp(event){
event.preventDefault();
 
let temperatureElement= document.querySelector("#temperature");

celsiusLink.classList.remove("active");
fahrenheitLink.classList.add("active");
let fahrenheiTemperature= ( celciusTemperature* 9)/5+32;
 temperatureElement.innerHTML = Math.round(fahrenheiTemperature);

}

function displayCelsiusTemp(event){
event.preventDefault();

celsiusLink.classList.add("active");
fahrenheitLink.classList.remove("active");

let temperatureElement= document.querySelector("#temperature");
 temperatureElement.innerHTML = Math.round(celsiusTemperature);



}






let celsiusTemperature= null;



let form= document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

let fahrenheitLink= document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", displayFahrenheitTemp);


let celsiusLink= document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", displayCelsiusTemp);


search("New York");