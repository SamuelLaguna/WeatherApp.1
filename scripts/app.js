let cityData = [];
let favArr = [];
let defaultCity = "stockton";




let cityName = document.getElementById("cityName");
 let date = document.getElementById("date");
let searchBar = document.getElementById("searchBar");
let lo = document.getElementById("lo");
let hi = document.getElementById("hi");
let temp = document.getElementById("temp");
let icon1 = document.getElementById("icon1");
let icon2 = document.getElementById("icon2");
let icon3 = document.getElementById("icon3");
let icon4 = document.getElementById("icon4");
let icon5 = document.getElementById("icon5");
let icon6 = document.getElementById("icon6");
let favBtn = document.getElementById("favbtn");
let cardTemp1 = document.getElementById("cardTemp1");
let cardTemp2 = document.getElementById("cardTemp2");
let cardTemp3 = document.getElementById("cardTemp3");
let cardTemp4 = document.getElementById("cardTemp4");
let cardTemp5 = document.getElementById("cardTemp5");




async function getCity(cityOfChoice){
    let apiResponse = await fetch("http://api.openweathermap.org/data/2.5/weather?q=" + cityOfChoice + "&units=imperial&appid=512e94f3b87d608e730d846d23470de1").then(Response => Response.json());
    console.log(apiResponse);
    cityName.innerText = apiResponse.name;
    hi.innerText = apiResponse.temp_max;
    temp.innerText = apiResponse.temp;
    lo.innerText = apiResponse.temp_min;
    cardTemp1.innerText = apiResponse.temp;
    cardTemp2.innerText = apiResponse.temp;
    cardTemp3.innerText = apiResponse.temp;
    cardTemp4.innerHTML = apiResponse.temp;
    cardTemp5.innerHTML = apiResponse.temp;
    



}
getCity("Stockton");


