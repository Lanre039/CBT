import React, { useState } from 'react';

function Form({ onSubmit }) {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [optionA, setOptionA] = useState('');
  const [optionB, setOptionB] = useState('');
  const [optionC, setOptionC] = useState('');
  const [optionD, setOptionD] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const dataToBeSubmitted = {
      question,
      answer,
      optionA,
      optionB,
      optionC,
      optionD,
    };
    onSubmit(dataToBeSubmitted);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex justify-between">
        <div className="mr-5">
          <textarea
            className="shadow resize-none appearance-none border rounded p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            cols="50"
            rows="9"
            placeholder="Enter question here..."
            value={question}
            // onChange={(e) => setData((data['question'] = e.target.value))}
            onChange={(e) => setQuestion(e.target.value)}
          ></textarea>
          <input
            className="mb-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Enter correct option here..."
            maxLength={1}
            value={answer}
            // onChange={(e) => setData((data['answer'] = e.target.value))}
            onChange={(e) => setAnswer(e.target.value)}
          />
        </div>
        <div>
          <input
            className="mb-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Enter option a"
            value={optionA}
            // onChange={(e) => setData((data['optionA'] = e.target.value))}
            onChange={(e) => setOptionA(e.target.value)}
          />
          <input
            className="mb-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Enter option b"
            value={optionB}
            // onChange={(e) => setData((data['optionB'] = e.target.value))}
            onChange={(e) => setOptionB(e.target.value)}
          />
          <input
            className="mb-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Enter option c"
            value={optionC}
            // onChange={(e) => setData((data['optionC'] = e.target.value))}
            onChange={(e) => setOptionC(e.target.value)}
          />
          <input
            className="mb-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Enter option d"
            value={optionD}
            // onChange={(e) => setData((data['optionD'] = e.target.value))}
            onChange={(e) => setOptionD(e.target.value)}
          />
          <button
            type="submit"
            className="shadow bg-purple-800 hover:bg-purple-700 text-white appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default Form;
