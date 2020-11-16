import React from "react";

export const TestSelection = () => {
  return (
    <div className="">
      <div className="w-screen h-screen bg-purple-800">
        <nav className="h-16 border-purple-900 border-b">hello</nav>
        <div className="flex flex-col items-center p-4">
          <h1 className="text-3xl text-white font-bold">Take an exam</h1>
          <div className="flex flex-col my-8">
            <div className="flex items-center mb-8">
              <button className="border px-8 py-2 mr-4 bg-white shadow text-xl rounded">
                Mechanics of Bullshit
              </button>
              <span className="text-red-500 font-semibold p-2 bg-red-100 rounded-tl-lg rounded-br-lg">
                Not taken
              </span>
            </div>
            <div className="flex items-center mb-8">
              <button className="border px-8 py-2 mr-4 bg-white shadow text-xl rounded">
                Arabic Literature
              </button>
              <span className="text-green-500 font-semibold p-2 bg-green-100 rounded-tl-lg rounded-br-lg">
                taken
              </span>
            </div>
            <div className="flex items-center mb-8">
              <button className="border px-8 py-2 mr-4 bg-white shadow text-xl rounded">
                Mechanics of Bullshit
              </button>
              <span className="text-green-500 font-semibold p-2 bg-green-100 rounded-tl-lg rounded-br-lg">
                taken
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
