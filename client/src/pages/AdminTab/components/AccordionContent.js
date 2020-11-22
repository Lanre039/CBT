import React, { useState } from 'react';
import {
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from 'react-accessible-accordion';

const AccordionContent = ({ id, formData, setFormData }) => {
  const [data, setData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    setFormData([...formData, data]);
  };

  return (
    <AccordionItem uuid={id} key={id}>
      <AccordionItemHeading>
        <AccordionItemButton>{`Question ${id}`}</AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
        <form onSubmit={handleSubmit}>
          <div className="flex justify-between">
            <div className="mr-5">
              <textarea
                className="shadow resize-none appearance-none border rounded p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                cols="50"
                rows="9"
                placeholder="Enter question here..."
                value={data['question']}
                onChange={(e) => setData((data['question'] = e.target.value))}
              ></textarea>
              <input
                className="mb-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Enter correct option here..."
                maxLength={1}
                value={data['answer']}
                onChange={(e) => setData((data['answer'] = e.target.value))}
              />
            </div>
            <div>
              <input
                className="mb-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Enter option a"
                value={data['optionA']}
                onChange={(e) => setData((data['optionA'] = e.target.value))}
              />
              <input
                className="mb-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Enter option b"
                value={data['optionB']}
                onChange={(e) => setData((data['optionB'] = e.target.value))}
              />
              <input
                className="mb-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Enter option c"
                value={data['optionC']}
                onChange={(e) => setData((data['optionC'] = e.target.value))}
              />
              <input
                className="mb-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Enter option d"
                value={data['optionD']}
                onChange={(e) => setData((data['optionD'] = e.target.value))}
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
      </AccordionItemPanel>
    </AccordionItem>
  );
};

export default AccordionContent;
