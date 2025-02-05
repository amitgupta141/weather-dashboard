function WeatherDisplay({ data }) {
    return (
      <div className="weather-display">
        <h2>{data.name}, {data.sys.country}</h2>
        <p>Temperature: {data.main.temp}°C</p>
        <p>Weather: {data.weather[0].description}</p>
        <p>Humidity: {data.main.humidity}%</p>
        <p>Wind Speed: {data.wind.speed} m/s</p>
      </div>
    );
  }
  
  export default WeatherDisplay;