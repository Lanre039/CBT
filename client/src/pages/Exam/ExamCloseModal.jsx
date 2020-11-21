import React from "react";
import ExamModal from "./ExamModal";

const ExamCloseModal = ({ setIsOpen, isOpen }) => {
  // const [isClosed, setIsClosed] = useState(false);
  return (
    <ExamModal modalIsOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="flex justify-center flex-col">
        <div className="flex justify-center mb-4">
          <span
            className="material-icons text-5xl text-red-700"
            style={{ fontSize: "8rem", textShadow: "2px 2px 2px #1e1414bf" }}
          >
            warning
          </span>
        </div>
        <h3>Are you sure you want to end this exam?</h3>
        <div className="flex justify-center mt-8">
          <button
            className="border px-8 py-2 rounded border-gray-800 text-gray-800 shadown-none outline-none font-semibold mx-4 hover:bg-green-300"
            onClick={() => setIsOpen(false)}
          >
            Cancel
          </button>
          <button className="border px-8 py-2 rounded border-red-500 text-red-800 font-semibold mx-4 bg-red-100 hover:bg-red-300">
            End
          </button>
        </div>
      </div>
    </ExamModal>
  );
};

export default ExamCloseModal;
