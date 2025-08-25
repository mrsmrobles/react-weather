import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  const [degree, setDegree] = useState("F");
  const [units, setUnits] = useState("imperial");

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.city,
      coordinates: response.data.coordinates,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      icon: response.data.condition.icon,
      iconUrl: response.data.condition.icon_url,
    });
  }

  function search() {
    const apiKey = "0afcd2ao9bb24495ta6dd7a01113764b";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function showImperial(event) {
    event.preventDefault();
    setUnits("imperial");
    setDegree("F");
    search();
  }
  function showMetric(event) {
    event.preventDefault();
    setUnits("metric");
    setDegree("C");
    search();
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                className="search-bar"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <button type="submit" className="button-74">
                Search
              </button>
            </div>
          </div>
        </form>
        <span>
          <WeatherIcon className="big-icon" code={weatherData.icon} size={64} />
          <WeatherTemperature className="temperature"
            units={units}
            temp={weatherData.temperature}
          />
          <WeatherInfo data={weatherData} units={units} degree={degree}/>
        </span>
        <span className="unit">
          <button href="/" onClick={showImperial}>
            °F
          </button>
          <button href="/" onClick={showMetric}>
            °C
          </button>
        </span>
        <span>
          <WeatherForecast coordinates={weatherData.coordinates} units={units}/>
        </span>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
