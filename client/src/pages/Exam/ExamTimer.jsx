import React, { useEffect, useState } from 'react';
import Countdown, { zeroPad } from 'react-countdown';
import { useDispatch, useSelector } from 'react-redux';
import { useToken } from '../../api/useToken';
import { types } from '../../redux/types';
import ExamCompleteModal from './ExamCompleteModal';
import { submit } from './submitQuestions';

const ExamTimer = () => {
  const { time } = useSelector((state) => state.exam);

  const [openCompletionModal, setOpenCompletionModal] = useState(false);

  const examPortal = useToken();
  const { answers } = useSelector((state) => state.answers);

  const submitQuestions = () => {
    submit(answers, examPortal, setOpenCompletionModal);
  };

  const renderer = ({ minutes, seconds }) => (
    <span className="text-5xl font-bold text-white">
      {zeroPad(minutes)}:{zeroPad(seconds)}
    </span>
  );

  return (
    <section className="timer mt-auto flex justify-center">
      <Countdown date={time} onComplete={submitQuestions} renderer={renderer} />
      {openCompletionModal && (
        <ExamCompleteModal
          setIsOpen={setOpenCompletionModal}
          isOpen={openCompletionModal}
        />
      )}
    </section>
  );
};

export default ExamTimer;
