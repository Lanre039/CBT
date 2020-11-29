import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { types } from '../../redux/types';

const ExamControls = () => {
  const dispatch = useDispatch();
  const { currentIndex } = useSelector((state) => state.examQuestions);

  const moveToNextQuestion = () => {
    dispatch({
      type: types.NEXT_QUESTION,
      payload: '',
    });
  };

  const moveToPreviousQuestion = () => {
    dispatch({
      type: types.PREVIOUS_QUESTION,
      payload: '',
    });
  };

  return (
    <section className="py-4 flex justify-end font-semibold text-sm">
      <button
        disabled={currentIndex === 0}
        className={`px-8 py-2 border shadow rounded font-bold mx-2 flex items-center ${
          currentIndex === 0
            ? 'cursor-not-allowed text-gray-500'
            : 'text-purple-800'
        }`}
        onClick={moveToPreviousQuestion}
      >
        <i className="mr-2 material-icons">west</i> Prev
      </button>
      <button
        className="px-8 py-2 border shadow rounded mx-2 flex items-center font-bold justify-center bg-purple-800  text-white"
        onClick={moveToNextQuestion}
      >
        Next <i className="ml-2 material-icons">east</i>
      </button>
    </section>
  );
};

export default ExamControls;
