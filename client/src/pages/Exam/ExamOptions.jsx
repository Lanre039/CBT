import React from "react";

const ExamOptions = () => {
  return (
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
  );
};

export default ExamOptions;
