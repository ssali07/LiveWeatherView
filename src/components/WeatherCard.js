import React from "react";

const WeatherCard = ({ data }) => {
  const { name, main, weather, wind } = data;

  const getWeatherIcon = (main) => {
    switch (main) {
      case "Clouds":
        return "images/clouds.png";
      case "Clear":
        return "images/clear.png";
      case "Rain":
        return "images/rain.png";
      case "Drizzle":
        return "images/drizzle.png";
      case "Mist":
        return "images/mist.png";
      default:
        return "images/clear.png";
    }
  };

  return (
    <div className="weather">
      <img src={getWeatherIcon(weather[0].main)} alt="weather-icon" className="weather-icon" />
      <h1 className="temp">{Math.round(main.temp)}°C</h1>
      <h2 className="city">{name}</h2>
      <div className="details">
        <div className="col">
          <img src="images/humidity.png" alt="humidity" />
          <div>
            <p className="humidity">{main.humidity}%</p>
            <p>Humidity</p>
          </div>
        </div>
        <div className="col">
          <img src="images/wind.png" alt="wind" />
          <div>
            <p className="wind">{Math.round(wind.speed)} km/h</p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
