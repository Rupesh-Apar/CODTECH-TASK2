document.addEventListener('DOMContentLoaded', function() {
    const weatherData = {
      newyork: {
        location: "New York",
        temperature: 25,
        condition: "Sunny"
      },
      london: {
        location: "London",
        temperature: 18,
        condition: "Cloudy"
      },
      tokyo: {
        location: "Tokyo",
        temperature: 30,
        condition: "Hot"
      }
    };
  
    const locationSelect = document.getElementById('locationSelect');
    const locationName = document.getElementById('locationName');
    const temperature = document.getElementById('temperature');
    const condition = document.getElementById('condition');
  
    function updateWeather() {
      const selectedLocation = locationSelect.value;
      const data = weatherData[selectedLocation];
  
      locationName.textContent = data.location;
      temperature.textContent = data.temperature;
      condition.textContent = data.condition;
    }
  
    locationSelect.addEventListener('change', updateWeather);
  
    // Set initial weather information
    updateWeather();
  });
  