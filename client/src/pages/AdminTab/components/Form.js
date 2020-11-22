import React from 'react';

function Form({ handSubmit, handleChange, data }) {
  const { question, answer, optionA, optionB, optionC, optionD } = data;

  return (
    <form onSubmit={handSubmit}>
      <div>
        <textarea
          className="shadow "
          cols="50"
          rows="9"
          placeholder="Enter question here..."
          name="question"
          value={question}
          onChange={handleChange}
        ></textarea>
        <input
          className="mb-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Enter correct option here..."
          maxLength={1}
          name="answer"
          value={answer}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          className="mb-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Enter option a"
          name="optionA"
          value={optionA}
          onChange={handleChange}
        />
        <input
          className="mb-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Enter option b"
          name="optionB"
          value={optionB}
          onChange={handleChange}
        />
        <input
          className="mb-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Enter option c"
          name="optionC"
          value={optionC}
          onChange={handleChange}
        />
        <input
          className="mb-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Enter option d"
          name="optionD"
          value={optionD}
          onChange={handleChange}
        />
      </div>
      <button
        type="submit"
        className="shadow bg-purple-800 hover:bg-purple-700 text-white appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
      >
        Submit
      </button>
    </form>
  );
}

export default Form;
