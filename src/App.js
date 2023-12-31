import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <h1 className="App-title">Dictionary</h1>
        <main>
          <Dictionary defaultKeyword="Coding" />
        </main>
        <footer className="App-footer">
          This project was coded by{" "}
          <a
            href="https://github.com/carringtonwilliams"
            target="_blank"
            rel="noreferrer"
          >
            Carrington Williams
          </a>
          {" ♡ "}
          <a
            href="https://github.com/carringtonwilliams/dictionary-application"
            target="_blank"
            rel="noreferrer"
          >
            & is open-sourced on GitHub
          </a>{" "}
          +{" "}
          <a
            href="https://carrington-williams-dictionary-app.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
