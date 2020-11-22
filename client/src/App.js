import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { examPortal } from "./api";
import "./App.css";
import { types } from "./redux/types";
const App = () => {
  const { username, password } = useSelector((state) => state.login);
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    // console.log(username, password);

    const response = await examPortal.post("/login", {
      userName: username,
      password,
    });

    const { token } = response.data
    localStorage.setItem("cbt_token", token)

    const {roleId} = response.data.user
    

    console.log(response);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch({
      type: types.LOGIN,
      payload: {
        name,
        value,
      },
    });

    // console.log(name, value)
  };

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
                className="appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-none border-gray-300 "
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
                className="appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-none border-gray-300"
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
