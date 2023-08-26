const apiKey = "1613d672147934092d36697a7ebd3448";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric`;

// const apiurl='https://api.openweathermap.org/data/2.5/weather?units=metric&q=delhi';

// <!-- // API url// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}&units=metric -->

const search = document.querySelector("#inputfeed");
const searchBtn = document.querySelector("#searchBtn");

async function fetchWether(city) {
  const response = await fetch(apiUrl + `&q=${city}` + `&appid=${apiKey}`);

  let data = await response.json();

  console.log(data);

  if (data.cod == "404") {
    document.querySelector("#wetimg").src = "img/invelid.png";
    document.querySelector("#tempreture").innerHTML = "";
    document.querySelector("#cityname").innerHTML = "Invalide City Name";
    document.querySelector("#col1").style.display = "none";
    document.querySelector("#col2").style.display = "none";
  } else {
    document.querySelector("#tempreture").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector("#cityname").innerHTML = data.name;

    document.querySelector("#humidity").innerHTML = data.main.humidity + " %";
    document.querySelector("#windspeed").innerHTML = data.wind.speed + " km/h";

    document.querySelector("#col2").style.display = "block";
    document.querySelector("#col1").style.display = "block";

    if (data.weather[0].main == "Clouds") {
      document.querySelector("#wetimg").src = "img/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      document.querySelector("#wetimg").src = "img/clear.png";
    } else if (data.weather[0].main == "Rain") {
      document.querySelector("#wetimg").src = "img/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      document.querySelector("#wetimg").src = "img/drixxle.png";
    } else if (data.weather[0].main == "Mist") {
      document.querySelector("#wetimg").src = "img/mist.png";
    } else if (data.weather[0].main == "Snow") {
      document.querySelector("#wetimg").src = "img/snow.png";
    } else if (data.weather[0].main == "Haze") {
      document.querySelector("#wetimg").src = "img/haze.png";
    }
  }
}

searchBtn.addEventListener("click", () => {
  fetchWether(search.value);
});
