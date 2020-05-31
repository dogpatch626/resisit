import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HomePage from "./components/AboutUsPage";
function Navigation(props) {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark shadow mb-3">
      <h1 style={{ color: "white" }}>Info To Resist</h1>
      <ul className="navbar-nav mr-auto"></ul>
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
