import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { examPortal } from '../../api/useToken';
import { types } from '../../redux/types';

const Course = ({ course }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleCourseClick = () => {
    dispatch({
      type: types.SET_EXAM,
      payload: course._id,
    });

    history.push('/exam');
  };

  return (
    <div className="flex items-center mb-8">
      <button
        className="border px-8 py-2 mr-4 bg-white shadow text-xl rounded w-full hover:bg-purple-200"
        onClick={handleCourseClick}
      >
        <span className="font-semibold mr-4">{course.code} :</span>
        <span>{course.title}</span>
      </button>
    </div>
  );
};

export default Course;
