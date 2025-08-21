import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h3>React Weather app</h3>
        <Weather defaultCity="Berlin" />
        <footer>
          <p>
            This project was coded by{" "}
            <a
              href="https://www.linkedin.com/in/madison-robles-40155b235/"
              target="blank"
              rel="noreferrer"
            >
              Madison Robles
            </a>
            . It is open-sourced on{" "}
            <a
              href="https://github.com/mrsmrobles"
              target="blank"
              rel="noreferrer"
            >
              Github
            </a>{" "}
            and hosted on{" "}
            <a href="app.netlify.com" target="blank" rel="noreferrer">
              Netlify
            </a>
            .
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
