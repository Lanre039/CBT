import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import * as serviceWorker from './serviceWorker';

import "./styles/tailwind.css";
import App from "./App";
import { CourseSelection, TestSelection } from "./pages";
import AdminTab from "./pages/AdminTab/AdminTab";
import Exam from "./pages/Exam/Exam";
import QuestionsPage from "./pages/AdminTab/QuestionsPage";
import UserRoute from "./components/UserRoute";

// redux things
import { createStore } from "redux";
import { Provider, useDispatch } from "react-redux";
import reducer from "./redux";
import { examPortal } from "./api";
import { types } from "./redux/types";
import AdminRoute from "./components/AdminRoute";

const store = createStore(reducer);
// redux things

const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    (async function getRoles() {
      const response = await examPortal.get("/roles");
      const { roles } = response.data;

      dispatch({
        type: types.SET_ROLES,
        payload: roles,
      });
    })();
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <UserRoute path="/select" exact component={CourseSelection} />
        <UserRoute path="/take-exam" exact component={TestSelection} />
        <AdminRoute path="/admin" exact component={AdminTab} />
        <UserRoute path="/exam" exact component={Exam} />
        <AdminRoute path="/create-questions" exact component={QuestionsPage} />
      </Switch>
    </BrowserRouter>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
