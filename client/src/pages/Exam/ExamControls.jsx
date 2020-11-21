import React from "react";
import { useDispatch } from "react-redux";

const ExamControls = () => {
  const dispatch = useDispatch();

  const testDispatch = () => {
    dispatch({
      type: "HELLO",
      payload: "What's up yo!",
    });
  };
  return (
    <section className="py-4 flex justify-end font-semibold text-sm">
      <button
        disabled
        className="px-8 py-2 border shadow rounded mx-2 flex items-center font-bold text-gray-500 cursor-not-allowed"
      >
        <i className="mr-2 material-icons">west</i> Prev
      </button>
      <button
        className="px-8 py-2 border shadow rounded mx-2 flex items-center font-bold justify-center text-purple-800 hover:bg-purple-800 hover:text-white"
        onClick={testDispatch}
      >
        Next <i className="ml-2 material-icons">east</i>
      </button>
    </section>
  );
};

export default ExamControls;
