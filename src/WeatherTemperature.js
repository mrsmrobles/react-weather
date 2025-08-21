import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("metric");

  function showImperial(event) {
    event.preventDefault();
    setUnit("imperial");
  }
  function showMetric(event) {
    event.preventDefault();
    setUnit("metric");
  }

  if (unit === "metric") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">
          °C |{" "}
          <a href="/" onClick={showImperial}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    let imperialTemperature = (props.celsius * 9/5) +32;
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(imperialTemperature)}</span>
        <span className="unit">
          <a href="/" onClick={showMetric}>
            °C
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}
