import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

// pages for this product
import LandingPage from "./views/LandingPage/LandingPage";
import ResumePage from "./views/ResumePage/ResumePage";
import ProjectsPage from "./views/ProjectsPage/ProjectsPage";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/" component={LandingPage} />
      <Route path="/resume-page" component={ResumePage} />
      <Route path="/projects-page" component={ProjectsPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
