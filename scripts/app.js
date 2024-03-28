let cityData = [];
let favArr = [];
let defaultCity = "stockton";




let cityN = document.getElementById("cityN");
 let dateOfDay = document.getElementById("dateOfDay");
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
let favBtn = document.getElementById("favBtn");
let cardTemp1 = document.getElementById("cardTemp1");
let cardTemp2 = document.getElementById("cardTemp2");
let cardTemp3 = document.getElementById("cardTemp3");
let cardTemp4 = document.getElementById("cardTemp4");
let cardTemp5 = document.getElementById("cardTemp5");
let injectHere = document.getElementById("injectHere");
let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
let day1 = document.getElementById("day1");
let day2 = document.getElementById("day2");
let day3 = document.getElementById("day3");
let day4 = document.getElementById("day4");
let day5 = document.getElementById("day5");
let deleteBtn = document.getElementById("deleteBtn");

async function getCity(cityOfChoice){
    let apiResponse = await fetch("http://api.openweathermap.org/data/2.5/weather?q=" + cityOfChoice + "&units=imperial&appid=512e94f3b87d608e730d846d23470de1").then(Response => Response.json());
    console.log(apiResponse);
    let currentDate = new Date();
    const iconBaseUrl = "https://openweathermap.org/img/w/";
    cityN.innerText = apiResponse.name;
    dateOfDay.innerText = currentDate.toLocaleDateString(undefined, options);
    hi.innerText = Math.floor(apiResponse.main.temp_max);
    temp.innerText = Math.floor(apiResponse.main.temp);
    lo.innerText = Math.floor(apiResponse.main.temp_min);
    // cardTemp1.innerText = Math.floor(apiResponse.main.temp);
    // cardTemp2.innerText = Math.floor(apiResponse.main.temp);
    // cardTemp3.innerText = Math.floor(apiResponse.main.temp);
    // cardTemp4.innerText = Math.floor(apiResponse.main.temp);
    // cardTemp5.innerText = Math.floor(apiResponse.main.temp);
    cityData = apiResponse;
    const mainIconCode = apiResponse.weather[0].icon;
    const mainIconUrl = `${iconBaseUrl}${mainIconCode}.png`;
    icon1.src = mainIconUrl;
    icon2.src = mainIconUrl;
    icon3.src = mainIconUrl;
    icon4.src = mainIconUrl;
    icon5.src = mainIconUrl;
    icon6.src = mainIconUrl;

    // icon1.src = "https://openweathermap.org/img/wn/" + apiResponse.weather["0"].icon + ".png";
    // icon2.src = "https://openweathermap.org/img/wn/" + apiResponse.weather["0"].icon + ".png";
    // icon3.src = "https://openweathermap.org/img/wn/" + apiResponse.weather["0"].icon + ".png";
    // icon4.src = "https://openweathermap.org/img/wn/" + apiResponse.weather["0"].icon + ".png";
    // icon5.src = "https://openweathermap.org/img/wn/" + apiResponse.weather["0"].icon + ".png";
    
}
getCity("Stockton");


async function getFive(cityOfChoice){
let apiResponse = await fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + cityOfChoice + "&units=imperial&appid=512e94f3b87d608e730d846d23470de1").then(Response => Response.json());
console.log(apiResponse);
cardTemp1.innerText = Math.floor(apiResponse.list["2"].main.temp);
    cardTemp2.innerText = Math.floor(apiResponse.list["10"].main.temp);
    cardTemp3.innerText = Math.floor(apiResponse.list["18"].main.temp);
    cardTemp4.innerText = Math.floor(apiResponse.list["26"].main.temp);
    cardTemp5.innerText = Math.floor(apiResponse.list["34"].main.temp);
}
getFive("Stockton");



searchBar.addEventListener("keyup", function (event){
if(event.key === "Enter" ){
    const cityOfChoice = searchBar.value;
    getCity(cityOfChoice);

}
});



favBtn.addEventListener("click", function() {
    let obj = {
      "favCity": cityData.name
    };
    favArr.push(obj);
    localStorage.setItem("favrioteCity", JSON.stringify(favArr));
  
    let colDiv = document.createElement("div");
    colDiv.classList = "col";
  
    let ptag = document.createElement("p");
    ptag.innerText = cityData.name;
    ptag.addEventListener("click", function() {
      getFive(ptag.innerText);
    });
  
    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.innerText = "Delete";
    deleteBtn.addEventListener("click", function() {
      colDiv.remove();
      let index = favArr.findIndex(item => item.favCity === ptag.innerText);
      favArr.splice(index, 1);
      localStorage.setItem("favrioteCity", JSON.stringify(favArr));
    });
  
    colDiv.appendChild(ptag);
    colDiv.appendChild(deleteBtn);
    injectHere.appendChild(colDiv);
  });







let date = new Date();
let days = ["Sunday", "Monday", "Tuesday", "Wensday", "Thursday", "Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wensday", "Thursday", "Friday", "Saturday"];
let day = days[date.getDay()];

day1.innerText = days[date.getDay() + 1];
day2.innerText = days[date.getDay() + 2];
day3.innerText = days[date.getDay() + 3];
day4.innerText = days[date.getDay() + 4];
day5.innerText = days[date.getDay() + 5];

