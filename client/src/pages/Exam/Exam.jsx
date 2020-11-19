import React from "react";

const tempNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Exam = () => {
  return (
    <div className="bg-purple-800 h-screen">
      <nav className="h-16 text-white flex items-center px-8 ">
        <p className="font-bold mr-4">Thermodynamics</p>
        <p className="mr-auto">[ 12/12/2020 ]</p>
        <p className="mr-4">Shuaib Abdulgafar</p>
        <button className="px-2 py-2 bg-red-200 text-red-800 text-sm font-semibold rounded-lg">
          End exam
        </button>
      </nav>
      <main className="flex px-24 py-8">
        <section className="question w-2/3 border p-4 mr-16 bg-white rounded-lg">
          <section className="question flex mb-6">
            <h2 className="font-bold text-3xl mr-8">1.</h2>
            <article className="font-medium text-gray-800">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
              temporibus praesentium placeat suscipit laboriosam, sint incidunt
              quaerat accusamus? Minus sit exercitationem nostrum distinctio
              fugit cumque dolores natus. Odio, fugit alias?
            </article>
          </section>

          <section className="options px-10 text-sm">
            <div className="mb-4 px-2">
              <span className="mr-4">a</span>
              <button className="px-2 py-2 border rounded hover:bg-gray-200">
                To see his mother
              </button>
            </div>
            <div className="mb-4 px-2">
              <span className="mr-4">b</span>
              <button className="px-2 py-2 border rounded hover:bg-gray-200">
                To get to the other side of the road
              </button>
            </div>
            <div className="mb-4 px-2">
              <span className="mr-4">c</span>
              <button className="px-2 py-2 border rounded hover:bg-gray-200">
                To eat bread and butter
              </button>
            </div>
            <div className="mb-4 px-2">
              <span className="mr-4">d</span>
              <button className="px-2 py-2 border rounded hover:bg-gray-200">
                For no reason at all
              </button>
            </div>
          </section>

          <section className="py-4 flex justify-end font-semibold text-sm">
            <button
              disabled
              className="px-8 py-2 border shadow rounded mx-2 flex items-center font-bold text-gray-500 cursor-not-allowed"
            >
              <i className="mr-2 material-icons">west</i> Prev
            </button>
            <button className="px-8 py-2 border shadow rounded mx-2 flex items-center font-bold justify-center text-purple-800 hover:bg-purple-800 hover:text-white">
              Next <i className="ml-2 material-icons">east</i>
            </button>
          </section>
        </section>
        <section className="list w-1/3 p-4 flex flex-col">
          <section className="question-list flex flex-wrap px-4">
            {tempNums.map((_, index) => (
              <div className="w-1/4 flex justify-center mb-4">
                <span className="p-2 w-10 h-10 inline-block shadow rounded-full bg-purple-300 text-center hover:bg-purple-200 text-purple-900 font-bold cursor-pointer">
                  {index + 1}
                </span>
              </div>
            ))}
          </section>

          <section className="timer mt-auto flex justify-center">
            <h1 className="text-5xl font-bold text-white">17 : 49</h1>
          </section>
        </section>
      </main>
    </div>
  );
};

export default Exam;
