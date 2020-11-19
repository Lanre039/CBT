import React, { useState } from "react";
import ModalPage from "./Modal";

const dummData = [
  { title: "ELE111", name: "power electronics", questions: [1, 2, 3, 4] },
  { title: "ELE111", name: "power electronics", questions: [1, 2, 3] },
  { title: "ELE111", name: "power electronics", questions: [4] },
  { title: "ELE111", name: "power electronics", questions: [3, 4] },
  { title: "ELE111", name: "power electronics", questions: [1, 2, 3, 4] },
  { title: "ELE111", name: "power electronics", questions: [1, 2, 3, 4] },
];

const CoursesPage = () => {
  const [displayModal, setDisplayModal] = useState(true);
  const renderData = () => (
    <div className="flex flex-wrap m-20 py-10 px-1">
      {dummData.map((data, index) => {
        return (
          <div
            className="w-1/3 mb-10 hover:bg-purple-200 p-4 rounded"
            key={index}
          >
            <h1 className="font-semibold text-purple-800 text-2xl">
              {data.title}
            </h1>
            <h2 className="text-sm">{data.name}</h2>
            <p className="text-sm">{data.questions.length} questions</p>
          </div>
        );
      })}
    </div>
  );

  return (
    <div>
      <div>{renderData()}</div>
      <div className="flex justify-end pr-10 pb-10 cursor-pointer">
        <span
          style={{ fontSize: "4.5rem" }}
          className="material-icons text-white bg-purple-800 rounded-full flex items-center justify-center shadow-lg"
          onClick={() => setDisplayModal(true)}
        >
          add
        </span>
      </div>
      <ModalPage modalIsOpen={displayModal} setIsOpen={setDisplayModal} />
    </div>
  );
};

export default CoursesPage;
