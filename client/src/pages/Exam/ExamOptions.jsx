import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { types } from '../../redux/types';

const Option = ({ text, id }) => {
  const [optionLabel, optionText] = Object.entries(text)[0];
  const dispatch = useDispatch();

  const { currentIndex } = useSelector((state) => state.examQuestions);
  const { answers } = useSelector((state) => state.answers);
  const { courseId } = useSelector((state) => state.exam);

  const handleOptionSelect = () => {
    dispatch({
      type: types.CHOOSE_ANSWER,
      payload: {
        _id: id,
        courseId,
        options: {
          [optionLabel]: optionText,
        },
      },
    });

    dispatch({
      type: types.ANSWERED_QUESTION,
      payload: currentIndex,
    });
  };

  const isSelected = () => {
    const option = answers.find((answer) => answer._id === id);
    console.log(option);
    if (option && option.options[optionLabel]) {
      console.log(true);
      return true;
    }
    return false;
  };

  return (
    <div className="mb-4 px-2">
      <span className="mr-4">{optionLabel}</span>
      <button
        className={`px-2 py-2 border rounded ${
          isSelected()
            ? 'bg-purple-300 hover:bg-purple-200'
            : 'bg-white hover:bg-gray-200'
        }`}
        onClick={handleOptionSelect}
      >
        {optionText}
      </button>
    </div>
  );
};

const ExamOptions = () => {
  const { questions, currentIndex } = useSelector(
    (state) => state.examQuestions
  );
  const { options, _id: id } = questions[currentIndex];

  return (
    <section className="options px-10 text-sm">
      {options &&
        options.map((option, idx) => (
          <Option key={idx} text={option} id={id} />
        ))}
    </section>
  );
};

export default ExamOptions;
