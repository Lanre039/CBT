import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { examPortal } from "./api";
import "./App.css";
import { useAuth } from "./hooks";
import { types } from "./redux/types";
const App = () => {
  const [loginError, setLoginError] = useState(false);
  const { username, password } = useSelector((state) => state.login);
  const dispatch = useDispatch();
  let history = useHistory();
  // const authenticatedAsUser = useAuth();

  const { roles } = useSelector((state) => state.roles);

  useEffect(() => {
    const clearSessionStorage = () => {
      sessionStorage.clear();
    };
    clearSessionStorage();
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await examPortal.post("/login", {
        userName: username,
        password,
      });

      const { token } = response.data;
      const { roleId } = response.data.user;

      const checkRoleId = () => roles.find((role) => role._id === roleId);

      const userRole = checkRoleId().code;

      if (userRole === "normal_user") {
        sessionStorage.setItem("cbt_user_token", token);
        history.push("/select");
      } else if (userRole === "admin_user") {
        sessionStorage.setItem("cbt_admin_token", token);
        history.push("/admin");
      } else {
        throw new Error("An error occured");
      }

      // dispatch({
      //   type: types.SET_ROLE_ID,
      //   payload: roleId,
      // });

      // if() {
      //   history.push("/select");
      // } else {
      //   history.push("/admin");
      // }
    } catch (error) {
      setLoginError(true);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginError(false);
    dispatch({
      type: types.LOGIN,
      payload: {
        name,
        value,
      },
    });
  };

  const inputClass = `appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-none
  ${loginError ? "border-red-600" : " border-gray-300"}
`;

  return (
    <div className="App">
      <div className="w-screen h-screen flex items-center bg-purple-900 ">
        <article className="w-1/2 px-20">
          <h2 className="font-black text-4xl text-white">
            WELCOME TO JUNAID'S EXAMINATION PORTAL
          </h2>
          <p className="font-normal text-gray-600 text-base">
            LOGIN WITH YOUR CREDENTIALS TO BEGIN YOUR EXAMINATION
          </p>
        </article>
        <div className="w-1/2 max-w-sm">
          {loginError && (
            <div className=" bg-red-100 text-red-800 font-semibold shadow-md rounded px-8 py-2 my-4">
              {"Error occured, check your credentials"}
            </div>
          )}
          <form
            className=" bg-white shadow-md rounded px-8 py-8 pt-8"
            onSubmit={handleLogin}
          >
            <div className=" pb-4">
              <label htmlFor="email" className="text-sm block font-bold  pb-2">
                REGISTRATION NUMBER
              </label>
              <input
                type="text"
                name="username"
                value={username}
                className={inputClass}
                placeholder="123456789"
                onChange={handleInputChange}
              />
            </div>
            <div className="pb-4">
              <label
                htmlFor="password"
                className="text-sm block font-bold pb-2"
              >
                PASSWORD
              </label>
              <input
                type="password"
                name="password"
                value={password}
                className={inputClass}
                placeholder="Enter your password"
                onChange={handleInputChange}
              />
            </div>
            <div>
              <button
                className="bg-purple-700 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                SIGN IN
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
