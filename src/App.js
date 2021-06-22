import logo from "./assets/images/ironhack-logo.svg";
import menu from "./assets/images/menu-top.svg";
import icon1 from "./assets/images/icon1.png";
import icon2 from "./assets/images/icon2.png";
import icon3 from "./assets/images/icon3.png";
import icon4 from "./assets/images/icon4.png";
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
          <button className="botao">Awesome!</button>
        </a>
      </header>
      <div className="space-li">
        <ul className="li">
          <li>
            <img src={icon1} className="icon" alt="icon1" />
            <h3>Declarative</h3>
            <p>
              React makes it<br></br>
              painless to create<br></br>
              interactive Uls.
            </p>
          </li>
          <li>
            <img src={icon2} className="icon" alt="icon2" />
            <h3>Components</h3>
            <p>
              Build encaosulated<br></br>
              components that<br></br>
              manage their state.
            </p>
          </li>
          <li>
            <img src={icon3} className="icon" alt="icon3" />
            <h3>Single-Way</h3>
            <p>
              A set of immutable<br></br>
              values are passed to<br></br>
              the component's.
            </p>
          </li>
          <li>
            <img src={icon4} className="icon" alt="icon4" />
            <h3>JSX</h3>
            <p>
              Statically-typed.<br></br>
              designed to run on<br></br>
              modern browsers.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
