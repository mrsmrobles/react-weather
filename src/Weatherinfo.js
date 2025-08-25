import React from "react";
import FormattedDate from "./FormattedDate";
import "./WeatherInfo.css";




export default function WeatherInfo(props) {
  return (
      <div className="WeatherInfo">
        <div>
          <h1>{props.data.city}</h1>
          <ul>
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            <li className="text-capitalize">{props.data.description}</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)}mph</li>
          </ul>
        </div>
      </div>
  );
}
