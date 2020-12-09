import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useToken } from '../../api/useToken';

const Course = ({ data, index, setReloadS }) => {
  const [publishIconVisible, setPublishIconVisible] = useState(false);
  const { _id, code, title, questions, isAvailable } = data;
  console.log(data);

  const history = useHistory();
  const examPortal = useToken();

  const handlePublishExam = async (e) => {
    e.stopPropagation();

    try {
      const response = await examPortal.post('/course/status', {
        id: _id,
      });
      window.location.reload();
    } catch (error) {}
  };
  return (
    <div className="w-1/3 mb-10 p-2 flex-grow" key={index}>
      <div
        className="bg-purple-800 hover:bg-purple-700 p-4 rounded cursor-pointer border text-gray-200"
        onClick={() => history.push(`/create-questions/${_id}`)}
        onMouseEnter={() => setPublishIconVisible(true)}
        onMouseLeave={() => setPublishIconVisible(false)}
      >
        <div className="flex justify-between">
          <h1 className="font-semibold text-base mb-2">{code.toUpperCase()}</h1>
          {publishIconVisible && (
            <i
              className={`material-icons ${
                isAvailable ? 'hover:text-red-700' : 'hover:text-green-700'
              }`}
              title={isAvailable ? 'unpublish this exam' : 'publish exam'}
              onClick={handlePublishExam}
            >
              {!isAvailable ? 'unpublished' : 'published_with_changes'}
            </i>
          )}
        </div>
        <h2 className="text-sm">{title}</h2>
        <p className="text-sm">
          Number of questions - &nbsp;
          {questions.length === 0 ? 'Nil' : questions.length}
        </p>
      </div>
    </div>
  );
};

export default Course;
