import React from "react";
import './App.css'
function App() {
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
            action=""
            className=" bg-white shadow-md rounded px-8 py-8 pt-8"
          >
            <div className=" pb-4">
              <label htmlFor="email" className="text-sm block font-bold  pb-2">
                REGISTRATION NUMBER
              </label>
              <input
                type="text"
                name="text"
                id=""
                className="appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-none border-gray-300 "
                placeholder="123456789"
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
                name="email"
                id=""
                className="appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-none border-gray-300"
                placeholder="Enter your password"
              />
            </div>
            <div>
              <button
                className="bg-purple-700 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                SIGN IN
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
