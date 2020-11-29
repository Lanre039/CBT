import React from 'react';
import { useSelector } from 'react-redux';

const SkipperCircle = ({ index }) => {
  const { answeredQuestions } = useSelector((state) => state.answers);
  const { currentIndex } = useSelector((state) => state.examQuestions);

  const hasBeenAnswered = () => {
    return answeredQuestions && answeredQuestions.indexOf(index) !== -1;
  };

  return (
    <div className="w-1/4 flex justify-center mb-4" key={index}>
      <span
        className={`p-2 w-10 h-10 inline-block shadow rounded-full text-center hover:bg-purple-200 font-bold cursor-pointer ${
          currentIndex === index
            ? 'bg-white  text-purple-900'
            : hasBeenAnswered()
            ? 'bg-purple-800 text-white'
            : 'bg-purple-300  text-purple-900'
        }`}
      >
        {index + 1}
      </span>
    </div>
  );
};

const ExamSkipper = () => {
  const { currentIndex, questions } = useSelector(
    (state) => state.examQuestions
  );
  // console.log(questionId);
  return (
    <section className="question-list flex flex-wrap px-4">
      {questions.map((_, index) => (
        <SkipperCircle index={index} />
      ))}
    </section>
  );
};

export default ExamSkipper;
