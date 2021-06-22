import logo from "./assets/images/ironhack-logo.svg";
import menu from "./assets/images/menu-top.svg";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="Nav">
          <img src={logo} className="App-logo" alt="logo" />
          <img src={menu} className="Menu-logo" alt="menu" />
        </nav>
        <h1>
          Say hello to<br></br>
          ReactJS
        </h1>
        <p>
          You will learn how to use<br></br>
          the monst popular frontend library,<br></br>
          and become a super Ninja developer.
        </p>
        <a
          className="App-link"
          href=".#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Awesome!
        </a>
      </header>
      <div>
      

      </div>
    </div>
  );
}

export default App;
