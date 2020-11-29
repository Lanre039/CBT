import React from 'react';
import { useHistory } from 'react-router-dom';
import ExamModal from '../Exam/ExamModal';
// import ExamModal from "./ExamModal";

const CourseCreationModal = ({ setIsOpen, isOpen }) => {

  
  const history = useHistory();
  const handleClick = () => {
    history.push('/take-exam');
  };
  return (
    <ExamModal modalIsOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="flex justify-center flex-col">
        <div className="flex justify-center mb-4">
          <span
            className="material-icons text-green-700"
            style={{ fontSize: '8rem', textShadow: '2px 2px 2px #1e1414bf' }}
          >
            verified
          </span>
        </div>
        <h3>You have successfully registered your courses</h3>
        <div className="flex justify-center mt-8">
          <button
            className="border px-8 py-2 rounded border-green-500 text-green-800 font-semibold mx-4 bg-green-100 hover:bg-green-300"
            onClick={handleClick}
          >
            Close
          </button>
        </div>
      </div>
    </ExamModal>
  );
};

export default CourseCreationModal;
