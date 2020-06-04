import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HomePage from "./components/AboutUsPage";
function Navigation(props) {
  return (
    <nav className="navbar navbar-expand-sm ">
      <h1 className="title" ><ul>Info To Resist</ul></h1>
      <hr className="hr-title"></hr>
    </nav>
  );
}

function App() {
  return (
    <div className="App">
      <Navigation />
      <HomePage />
    </div>
  );
}

export default App;
