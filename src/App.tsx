import React from "react";
import { Home } from "./Home";
import { BrowserRouter as Router } from "react-router-dom";

export const App = () => {
  return (
    <Router>
      <Home />
    </Router>
  );
};
