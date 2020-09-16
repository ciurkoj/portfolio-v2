import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// pages for this product
import LandingPage from "./views/LandingPage/LandingPage";
import ResumePage from "./views/ResumePage/ResumePage";
import ProjectsPage from "./views/ProjectsPage/ProjectsPage";

var hist = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <LandingPage />
  </React.StrictMode>,
  document.getElementById("root")
);
