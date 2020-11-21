import React, { useState } from "react";
import { Accordion } from "react-accessible-accordion";

import AccordionContent from "./AccordionContent";
import "react-accessible-accordion/dist/fancy-example.css";

function AccordionComponent(props) {
  const [items, setItems] = useState([]);
  const [formData, setFormData] = useState([]);

  const setDefaultItem = () => {
    const ids = [1, 2, 3];
    return ids.map((id) => (
      <AccordionContent
        setFormData={setFormData}
        formData={formData}
        key={id}
        id={id}
      />
    ));
  };

  if (items.length <= 0) {
    setItems([...items, ...setDefaultItem()]);
  }

  const addMoreQuestions = () => {
    const newId = items.length + 1;

    if (items.length === 5) {
      alert("You can only create five questions");
      return;
    }

    setItems([
      ...items,
      <AccordionContent
        setFormData={setFormData}
        formData={formData}
        key={newId}
        id={newId}
      />,
    ]);
  };

  console.log(formData);

  return (
    <div>
      <Accordion preExpanded={[1]}>{items}</Accordion>
      <div className="flex justify-between">
        <button
          className="shadow bg-purple-800 hover:bg-purple-700 text-white font-bold  p-3 mt-4 rounded focus:outline-none focus:shadow-outline"
          onClick={addMoreQuestions}
          // disabled={!courseCode && !courseTitle}
        >
          Add Question
        </button>
        <button
          className="shadow bg-purple-800 hover:bg-purple-700 text-white font-bold  p-3 mt-4 rounded focus:outline-none focus:shadow-outline"
          onClick={addMoreQuestions}
          // disabled={!courseCode && !courseTitle}
        >
          Publish
        </button>
      </div>
    </div>
  );
}

export default AccordionComponent;
