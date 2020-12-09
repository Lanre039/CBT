import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useToken } from '../../api/useToken';
import { types } from '../../redux/types';

const Course = ({ course }) => {
  const [score, setScore] = useState(undefined);
  const dispatch = useDispatch();
  const history = useHistory();
  const examPortal = useToken();

  useEffect(() => {
    (async function fetchScore() {
      try {
        const response = await examPortal.post('/user/result', {
          courseId: course._id,
        });
        const { score } = response.data.result;
        setScore(score);
        // const { code } = courseId;
      } catch (error) {
        setScore(null)
      }
    })();
  }, []);

  const handleCourseClick = async () => {
    dispatch({
      type: types.SET_EXAM,
      payload: {
        id: course._id,
        title: course.title,
      },
    });

    history.push('/exam');
  };

  return (
    <div className="flex items-center mb-8">
      {score !== undefined && (
        <>
          <button
            className="border px-8 py-2 mr-4 bg-white shadow text-xl rounded flex-1 hover:bg-purple-200"
            onClick={handleCourseClick}
            disabled={score !== null}
          >
            <span className="font-semibold mr-4">{course.code} :</span>
            <span>{course.title}</span>
          </button>
          {score !== null && (
            <span className="py-2 px-4 text-xl rounded bg-white">
              <span className="font-semibold">Score</span>: {score}%
            </span>
          )}
        </>
      )}
    </div>
  );
};

export default Course;
