import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import * as serviceWorker from './serviceWorker';

import "./styles/tailwind.css";
import App from "./App";
import { CourseSelection, TestSelection } from "./pages";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/select" exact component={CourseSelection} />
      <Route path="/take-exam" exact component={TestSelection} />
    </Switch>
  </BrowserRouter>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
