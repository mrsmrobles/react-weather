import React from "react";
import "./WeatherForecastDay.css";

export default function WeatherForecastDay(props) {
  function max() {
    let temp = Math.round(props.data.temperature.maximum);
    return `${temp}`;
  }
  function min() {
    let temp = Math.round(props.data.temperature.minimum);
    return `${temp}`;
  }
  function dayName() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="row">
      <div className="WeatherForecast-day col">{dayName()}</div>
      <img
        className="WeatherForecast-icon"
        src={props.data.condition.icon_url}
        alt={props.data.condition.icon}
      />
      <div className="forecastTemperatures">
        <span className="forecastTempMax">{max()}°</span>
        <span className="forecastTempMin">{min()}°</span>
      </div>
    </div>
  );
}
