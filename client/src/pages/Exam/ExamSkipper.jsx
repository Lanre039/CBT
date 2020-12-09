import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { types } from '../../redux/types';

const SkipperCircle = ({ index }) => {
  const { answeredQuestions } = useSelector((state) => state.answers);
  const { currentIndex } = useSelector((state) => state.examQuestions);
  const dispatch = useDispatch();

  const hasBeenAnswered = () => {
    return answeredQuestions && answeredQuestions.indexOf(index) !== -1;
  };

  const skipToQuestion = () => {
    dispatch({
      type: types.SKIP_TO_QUESTION,
      payload: index,
    });
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
        onClick={skipToQuestion}
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
