import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import Form from './Form';

const AccordionContent = ({ id }) => {
  const dispatch = useDispatch();

  const {
    questions: { formData },
  } = useSelector((state) => state);

  const handleSubmit = (data) => {
    data.id = id;
    const isDataAvailable = formData.some((item) => item.id === id);
    if (isDataAvailable) {
      dispatch({
        type: 'CHANGE_QUESTION',
        payload: data,
      });
    } else {
      dispatch({
        type: 'SAVE_QUESTION',
        payload: data,
      });
    }
  };

  return (
    <AccordionItem uuid={id} key={id}>
      <AccordionItemHeading>
        <AccordionItemButton>{`Question ${id}`}</AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
        <Form onSubmit={handleSubmit} />
      </AccordionItemPanel>
    </AccordionItem>
  );
};

export default AccordionContent;
