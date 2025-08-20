import React from "react";

export default function Weather() {
  return (
    <div>
      <h3>React Weather app</h3>
      <form>
        <input type="search" placeholder="Enter a city..." />
        <button type="submit">Search</button>
      </form>
      <h1>San Diego</h1>
      <p>Wednesday 08:23am, sunny</p>
      <p>Humidity: 60%, Wind: 5mph</p>
    </div>
  );
}
