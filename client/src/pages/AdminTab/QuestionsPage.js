import React from 'react';
import Accordion from './components/Accordion';
// import AccordionContent from './components/AccordionContent';
// import AccordionComponent from './components/Accordion';
import Form from './components/Form';

function QuestionsPage(props) {
  // const [formData, setFormData] = useState([]);
  return (
    <div className="w-1/2 mx-auto">
      {/* <Form />
      <Form /> */}
      <Accordion />
    </div>
  );
}

export default QuestionsPage;
