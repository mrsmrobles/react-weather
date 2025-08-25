import React from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
  let units = props.units;

  if (units === "imperial") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">
          {Math.round(props.temp)}
          <small>°F</small>
        </span>
      </div>
    );
  } else {
    let metricTemperature = (props.temp - 32) * (5 / 9);
    return (
      <div className="WeatherTemperature">
        <span className="temperature">
          {Math.round(metricTemperature)}
          <small>°C</small>
        </span>
      </div>
    );
  }
}
