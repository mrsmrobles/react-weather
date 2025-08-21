import React from "react";
import "./WeatherForecast.css";


export default function WeatherForecast() {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="WeatherForecast-day">Thursday</div>
            <div className="WeatherForecast-icon">
              <img
                src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-day.png"
                alt=""
              />
            </div>
            <div className="forecastTemperatures">
              <span className="forecastTempMax">85°F</span> |{" "}
              <span className="forecastTempMin">63°F</span>
            </div>
          </div>
        </div>
      </div>
    );
}