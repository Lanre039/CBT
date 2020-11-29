import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useToken } from '../../api/useToken';
import Course from './Course';
import CourseCreationModal from './CourseCreationModal';

export const CourseSelection = () => {
  const [courses, setCourses] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const { selectedCourses } = useSelector((state) => state.courseSelection);
  const examPortal = useToken();

  useEffect(() => {
    // console.log(sessionStorage.getItem('cbt_user_token'));
    (async function getCourses() {
      const response = await examPortal.get('/courses');
      setCourses(response.data.courses);
    })();
  }, []);

  const handleCourseSubmission = async () => {
    console.log(sessionStorage.getItem('cbt_user_token'));
    try {
      const response = await examPortal.post('/user/register-courses', {
        courseIds: selectedCourses,
      });
      console.log(response);

      const { status } = response;

      if (status === 200) {
        setOpenModal(true);
      }
    } catch (error) {}
  };

  return (
    <div className="">
      <div className="w-screen h-screen flex flex-col items-center bg-purple-800 p-4">
        <h1 className="text-3xl text-white font-bold">
          Select Courses to Register
        </h1>

        <div className="p-4 bg-white my-10 rounded-sm w-2/3">
          <ul className="w-full flex flex-wrap">
            {courses.map((course, idx) => (
              <Course key={idx} title={course.title} courseId={course._id} />
            ))}
          </ul>
          <div className="flex justify-center">
            {courses.length > 0 ? (
              <button
                className="px-8 py-2 bg-white text-green-800 shadow-xl border rounded border-green-900 font-black hover:bg-green-800 hover:text-white mx-auto"
                onClick={handleCourseSubmission}
              >
                Submit
              </button>
            ) : (
              <span>There's currently no exam available</span>
            )}
          </div>
        </div>

        {openModal && (
          <CourseCreationModal setIsOpen={setOpenModal} isOpen={openModal} />
        )}
      </div>
    </div>
  );
};
