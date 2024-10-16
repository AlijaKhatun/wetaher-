const apiKey = "149db02449f78a80b2466209826bffa6";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?appid=149db02449f78a80b2466209826bffa6&units=metric";
const srchBox = document.querySelector(".search input");
const srchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
console.log(srchBox, srchBtn);
async function checkWeather(city) {
  const response = await fetch(apiUrl + `&appid=${apiKey} + &q=${city}`);
  var data = await response.json();
  console.log(data);
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

  if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "images/clouds.png";
  } else if (data.weather[0].main == "Clear") {
    weatherIcon.src = "images/clear.png";
  } else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "images/rain.png";
  } else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "images/drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    weatherIcon.src = "images/mist.png";
  }
}
srchBtn.addEventListener("click", () => {
  checkWeather(srchBox.value);
  console.log(srchBox.value);
});
