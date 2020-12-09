import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useToken } from '../../api/useToken';
import { submit } from './submitQuestions';
import ExamCompleteModal from './ExamCompleteModal';
import ExamModal from './ExamModal';

const ExamCloseModal = ({ setIsOpen, isOpen }) => {
  const [openCompletionModal, setOpenCompletionModal] = useState(false);

  const examPortal = useToken();
  const { answers } = useSelector((state) => state.answers);

  const submitQuestions = () => {
    submit(answers, examPortal, setOpenCompletionModal);
  };
  // const submitQuestions = async () => {
  //   try {
  //     const response = await examPortal.post('/user/questions', {
  //       data: answers,
  //     });

  //     console.log(response);

  //     setOpenCompletionModal(true)
  //   } catch (error) {}
  // };

  return (
    <>
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
            Are you sure you want to end this exam?
          </h3>
          <div className="flex justify-center mt-8">
            <button
              className="text-xs border px-8 py-2 rounded border-gray-800 text-gray-800 shadown-none outline-none font-semibold mx-4 hover:bg-green-300"
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </button>
            <button
              className="text-xs border px-8 py-2 rounded border-red-500 text-red-800 font-semibold mx-4 bg-red-100 hover:bg-red-300"
              onClick={submitQuestions}
            >
              Submit & End
            </button>
          </div>
        </div>
      </ExamModal>
      {openCompletionModal && (
        <ExamCompleteModal
          setIsOpen={setOpenCompletionModal}
          isOpen={openCompletionModal}
        />
      )}
    </>
  );
};

export default ExamCloseModal;
