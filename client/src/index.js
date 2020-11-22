import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import * as serviceWorker from './serviceWorker';

import "./styles/tailwind.css";
import App from "./App";
import { CourseSelection, TestSelection } from "./pages";
import AdminTab from "./pages/AdminTab/AdminTab";
import Exam from "./pages/Exam/Exam";
import QuestionsPage from "./pages/AdminTab/QuestionsPage";

// redux things
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./redux";

const store = createStore(reducer);
// redux things

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/select" exact component={CourseSelection} />
        <Route path="/take-exam" exact component={TestSelection} />
        <Route path="/admin" exact component={AdminTab} />
        <Route path="/exam" exact component={Exam} />
        <Route path="/create-questions" exact component={QuestionsPage} />
      </Switch>
    </BrowserRouter>
  </Provider>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
