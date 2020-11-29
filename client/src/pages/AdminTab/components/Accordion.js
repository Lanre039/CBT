import React, { useState } from 'react';
import { Accordion } from 'react-accessible-accordion';
import { useSelector } from 'react-redux';
import AccordionContent from './AccordionContent';
import 'react-accessible-accordion/dist/fancy-example.css';
import { withRouter } from 'react-router-dom';
import { useToken } from '../../../api/useToken';

function AccordionComponent({ match }) {
  const [items, setItems] = useState([]);
  const examPortal = useToken();
  const {
    questions: { formData },
  } = useSelector((state) => state);

  const setDefaultItem = () => {
    const ids = [1, 2];
    return ids.map((id) => <AccordionContent key={id} id={id} />);
  };

  if (items.length <= 0) {
    setItems([...items, ...setDefaultItem()]);
  }

  const addMoreQuestions = () => {
    const newId = items.length + 1;

    if (items.length === 5) {
      alert('You can only create five questions');
      return;
    }

    setItems([...items, <AccordionContent key={newId} id={newId} />]);
  };

  const handleSubmit = async () => {
    const courseId = match.params.courseId;

    const data = await examPortal.post('/create-question', {
      courseId,
      data: formData,
    });
    console.log(data);
  };

  return (
    <div className="mt-10">
      <Accordion preExpanded={[1]}>{items}</Accordion>
      <div className="flex justify-between">
        <button
          className="shadow bg-purple-800 hover:bg-purple-700 text-white font-bold  p-3 mt-4 rounded focus:outline-none focus:shadow-outline"
          onClick={addMoreQuestions}
        >
          Add Question
        </button>
        <button
          className="shadow bg-purple-800 hover:bg-purple-700 text-white font-bold  p-3 mt-4 rounded focus:outline-none focus:shadow-outline"
          onClick={handleSubmit}
        >
          Publish
        </button>
      </div>
    </div>
  );
}

export default withRouter(AccordionComponent);
