import React from 'react';
import { useHistory } from 'react-router-dom';
import ExamModal from './ExamModal';

const ExamCompleteModal = ({ setIsOpen, isOpen }) => {
  const history = useHistory();
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
        <h3>Your examination has been submitted</h3>
        <div className="flex justify-center mt-8">
          <button className="border px-8 py-2 rounded border-gray-800 text-gray-800 shadown-none outline-none font-semibold mx-4 hover:bg-green-300">
            Logout
          </button>
          <button
            className="border px-8 py-2 rounded border-green-500 text-green-800 font-semibold mx-4 bg-green-100 hover:bg-green-300"
            onClick={() => history.push('/take-exam')}
          >
            End
          </button>
        </div>
      </div>
    </ExamModal>
  );
};

export default ExamCompleteModal;
