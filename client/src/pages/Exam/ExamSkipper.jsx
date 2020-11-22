import React from "react";

const tempNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const ExamSkipper = () => {
  return (
    <section className="question-list flex flex-wrap px-4">
      {tempNums.map((_, index) => (
        <div className="w-1/4 flex justify-center mb-4">
          <span className="p-2 w-10 h-10 inline-block shadow rounded-full bg-purple-300 text-center hover:bg-purple-200 text-purple-900 font-bold cursor-pointer">
            {index + 1}
          </span>
        </div>
      ))}
    </section>
  );
};

export default ExamSkipper;
