const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "64e02cf0admshd1e46d8e4e41e6ap1851eejsna30fbdbaa658",
    "X-RapidAPI-Host": "open-weather13.p.rapidapi.com",
  },
};

// Function to convert Fahrenheit to Celsius
const fahrenheitToCelsius = (fahrenheit) => {
  return ((fahrenheit - 32) * 5) / 9;
};

// Function to fetch weather data
const getWeather = async (city) => {
  try {
    const url = `https://open-weather13.p.rapidapi.com/city/${city}/EN`;
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);

    // Convert temperatures to Celsius
    const tempInCelsius = fahrenheitToCelsius(result.main.temp).toFixed(2);
    const feelsLikeInCelsius = fahrenheitToCelsius(
      result.main.feels_like
    ).toFixed(2);
    const minTempInCelsius = fahrenheitToCelsius(result.main.temp_min).toFixed(
      2
    );
    const maxTempInCelsius = fahrenheitToCelsius(result.main.temp_max).toFixed(
      2
    );

    // Update UI with weather data
    document.getElementById("cityName").innerHTML = result.name;
    document.getElementById("temp").innerHTML = tempInCelsius;
    document.getElementById("feels_like").innerHTML = feelsLikeInCelsius;
    document.getElementById("min_temp").innerHTML = minTempInCelsius;
    document.getElementById("max_temp").innerHTML = maxTempInCelsius;
    document.getElementById("humidity").innerHTML = result.main.humidity;
    document.getElementById("wind_speed").innerHTML = result.wind.speed;
    document.getElementById("wind_degrees").innerHTML = result.wind.deg;
    document.getElementById("sunrise").innerHTML = new Date(
      result.sys.sunrise * 1000
    ).toLocaleTimeString();
    document.getElementById("sunset").innerHTML = new Date(
      result.sys.sunset * 1000
    ).toLocaleTimeString();
  } catch (error) {
    console.error(error);
  }
};

// Event listener for the search button
document.getElementById("submit").addEventListener("click", (e) => {
  e.preventDefault();
  const city = document.getElementById("city").value;
  getWeather(city);
});

getWeather("Toronto");
