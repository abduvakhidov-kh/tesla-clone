import React from "react";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Header from "./components/header/Header.jsx";
import Home from "./components/home/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
