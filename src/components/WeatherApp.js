import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import WeatherCard from "./WeatherCard";
import "./WeatherApp.css";

const WeatherApp = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const fetchWeather = async (city) => {
    const apiKey = "f0e2158dfc34cd6e7017d06ccc2189ab";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;

    try {
      const response = await axios.get(apiUrl);
      setWeather(response.data);
      setError("");
    } catch (error) {
      setError("Invalid City Name!");
      setWeather(null);
    }
  };

  return (
    <div className="card">
      <SearchBar onSearch={fetchWeather} />
      {error && <div className="error">{error}</div>}
      {weather && <WeatherCard data={weather} />}
    </div>
  );
};

export default WeatherApp;
