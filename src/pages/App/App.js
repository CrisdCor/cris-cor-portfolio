// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import MyHeader from "../../containers/Header";
import Home from "../Home";
import "./App.css";

function App() {
  return (
    <div className="App">
      <MyHeader />
      <Home />
    </div>
  );
}

export default App;
