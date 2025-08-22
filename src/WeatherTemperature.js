import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("imperial");

  function showImperial(event) {
    event.preventDefault();
    setUnit("imperial");
  }
  function showMetric(event) {
    event.preventDefault();
    setUnit("metric");
  }

  if (unit === "imperial") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(props.fahrenheit)}</span>
        <span className="unit">
          °F |{" "}
          <a href="/" onClick={showMetric}>
            °C
          </a>
        </span>
      </div>
    );
  } else {
    let metricTemperature = ((props.fahrenheit - 32) * (5 / 9));
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(metricTemperature)}</span>
        <span className="unit">
          °C | <a href="/" onClick={showImperial}>
            °F
          </a>
          
        </span>
      </div>
    );
  }
}
