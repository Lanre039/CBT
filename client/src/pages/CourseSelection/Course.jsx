import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { types } from '../../redux/types';

const Course = ({ title, courseId }) => {
  const { selectedCourses } = useSelector((state) => state.courseSelection);

  const dispatch = useDispatch();

  const handleCourseSelection = () => {
    if (selectedCourses.indexOf(courseId) !== -1) {
      dispatch({
        type: types.REMOVE_COURSE,
        payload: courseId,
      });
    } else {
      dispatch({
        type: types.ADD_COURSE,
        payload: courseId,
      });
    }
  };

  const isSelected = selectedCourses.indexOf(courseId) !== -1 || false;

  return (
    <li className="w-1/2 flex items-center my-4 text-base">
      <span
        className={`material-icons shadow text-gray-200 cursor-pointer ${
          isSelected ? 'text-green-800' : ''
        }`}
        onClick={handleCourseSelection}
      >
        {isSelected ? 'check_box' : 'check_box_outline_blank'}
      </span>
      <span className="ml-4">{title}</span>
    </li>
  );
};

export default Course;
