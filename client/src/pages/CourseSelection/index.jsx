import React, { useState } from "react";

const courses = [
  { title: "Organic Chemistry" },
  { title: "Electrical Electronics" },
  { title: "Inorganic Chemistry" },
  { title: "Chemistry of Water" },
  { title: "Statistics and Applied Mathematics" },
  { title: "Engineering Mathematics" },
  { title: "Use of English" },
  { title: "Electromagnetism" },
  { title: "African Literature" },
];

const Course = ({ title }) => {
  const [selectionState, setSelectionState] = useState(false);

  return (
    <li className="w-1/2 flex items-center my-4 text-base">
      <span
        className={`material-icons shadow text-gray-200 cursor-pointer ${
          selectionState ? "text-green-800" : ""
        }`}
        onClick={() => setSelectionState(!selectionState)}
      >
        {selectionState ? "check_box" : "check_box_outline_blank"}
      </span>
      <span className="ml-4">{title}</span>
    </li>
  );
};

export const CourseSelection = () => {
  return (
    <div className="">
      <div className="w-screen h-screen flex flex-col items-center bg-purple-800 p-4">
        <h1 className="text-3xl text-white font-bold">
          Select Courses to Register
        </h1>

        <div className="p-4 bg-white my-10 rounded-sm w-2/3">
          <ul className="w-full flex flex-wrap">
            {courses.map((course) => (
              <Course title={course.title} />
            ))}
          </ul>
          <div className="flex justify-center">
            <button className="px-8 py-2 bg-white text-green-800 shadow-xl border rounded border-green-900 font-black hover:bg-green-800 hover:text-white mx-auto">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

