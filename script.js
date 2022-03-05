function showTemperature(response){

    console.log(response.data);
document.querySelector("#city").innerHTML= response.data.name;
document.querySelector("#temperature").innerHTML= Math.round(response.data.main.temp);
document.querySelector("#humidity").innerHTML=response.data.main.humidity;
document.querySelector("#wind").innerHTML= Math.round(response.data.wind.speed);
document.querySelector("#description").innerHTML=response.data.weather[0].main;

}


function search (city){
let apiKey= "304036b396acb68fd0c33d733a745b6e";
let apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
axios.get(apiUrl).then(showTemperature);


}


function handleSubmit(event) {
  event.preventDefault();
let city= document.querySelector("#city-input").value;
search(city);
}




function formatDate(date){

let dia=date.getDate();
let hours=date.getHours(); if (hours < 10){ hours =`0${hours}`;}
let minutes=date.getMinutes();if (minutes < 10){ minutes =`0${minutes}`;}
let year=date.getFullYear();
let dayIndex= date.getDay();

let days=[ "Sun", "Mon", "Wed", "Thu","Fri", "Sat"];
let day=days[dayIndex];


let months = ["Jan", "Feb", "Mar", "Apr","May", "June","Jul","Aug","Sep","Oct","Nov","Dec"];
let month= months[date.getMonth()]; 

return ` ${month} ${dia}, ${year} ${hours}:${minutes}`; }

let dateElement= document.querySelector("#current-date");
let currentTime= new Date();
dateElement.innerHTML= formatDate(currentTime);


let searchForm= document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);

search("New York");



