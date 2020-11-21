import React from "react";
import ExamControls from "./ExamControls";
import ExamNavbar from "./ExamNavbar";
import ExamOptions from "./ExamOptions";
import ExamQuestion from "./ExamQuestion";
import ExamSkipper from "./ExamSkipper";
import ExamTimer from "./ExamTimer";

const Exam = () => {
  return (
    <div className="bg-purple-800 h-screen">
      <ExamNavbar />
      <main className="flex px-24 py-8">
        <section className="question w-2/3 border p-4 mr-16 bg-white rounded-lg">
          <ExamQuestion />
          <ExamOptions />
          <ExamControls />
        </section>
        <section className="list w-1/3 p-4 flex flex-col">
          <ExamSkipper />
          <ExamTimer />
        </section>
      </main>
    </div>
  );
};

export default Exam;
