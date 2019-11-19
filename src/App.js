import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.scss";

import Home from "./Pages/Home";
import Details from "./Pages/Details";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={Home} />
        <Route path="/:id" component={Details} />
      </div>
    </Router>
  );
}

export default App;