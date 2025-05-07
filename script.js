async function getWeather() {
    const city = document.getElementById("cityInput").value.trim();
    const apiKey = "b5f9542dac1e49949a274015250705"; 
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
  
    if (!city) {
      document.getElementById("weatherResult").innerHTML = "Please enter a city.";
      return;
    }
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      if (data.error) {
        document.getElementById("weatherResult").innerHTML = "City not found.";
        return;
      }
  
      document.getElementById("weatherResult").innerHTML = `
        <h2>${data.location.name}, ${data.location.country}</h2>
        <p><strong>${data.current.temp_c}°C</strong> - ${data.current.condition.text}</p>
      `;
    } catch (error) {
      document.getElementById("weatherResult").innerHTML = "Error fetching weather.";
      console.error(error);
    }
  }
  