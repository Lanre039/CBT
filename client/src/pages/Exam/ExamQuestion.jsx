import React from 'react';
import { useSelector } from 'react-redux';

const ExamQuestion = ({ question }) => {
  const { questions, currentIndex } = useSelector(
    (state) => state.examQuestions
  );
  return (
    <section className="question flex mb-6">
      {questions.length > 0 && (
        <>
          <h2 className="font-bold text-3xl mr-8">{currentIndex + 1}.</h2>
          <article className="font-medium text-gray-800">
            {questions[currentIndex].question}
          </article>
        </>
      )}
    </section>
  );
};

export default ExamQuestion;
