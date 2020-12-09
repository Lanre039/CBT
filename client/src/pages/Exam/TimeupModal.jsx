import React from 'react';
import { useHistory } from 'react-router-dom';
import ExamModal from './ExamModal';

const TimeupModal = ({ setIsOpen, isOpen }) => {
  const history = useHistory();

  const endExam = () => {
    history.push('/take-exam');
  };

  return (
    <ExamModal modalIsOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="flex justify-center flex-col">
        <div className="flex justify-center mb-4">
          <span
            className="material-icons text-5xl text-red-700"
            style={{ fontSize: '8rem', textShadow: '2px 2px 2px #1e1414bf' }}
          >
            warning
          </span>
        </div>
        <h3 className="text-center">
          Your time is up. No worries, your answers have been submitted
        </h3>
        <div className="flex justify-center mt-8">
          <button
            className="text-xs border px-8 py-2 rounded border-red-500 text-red-800 font-semibold mx-4 bg-red-100 hover:bg-red-300"
            onClick={endExam}
          >
            Close
          </button>
        </div>
      </div>
    </ExamModal>
  );
};

export default TimeupModal;
