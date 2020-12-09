import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useToken } from '../../api/useToken';
import Course from './Course';

export const TestSelection = () => {
  const [registeredCourses, setRegisteredCourses] = useState([]);
  const examPortal = useToken();
  useEffect(() => {
    (async function getRegisteredCourse() {
      const response = await examPortal.get('/user/courses');
      // console.log(response);
      const { status } = response;
      if (status === 200) {
        const { userCourses: courses } = response.data;
        // console.log(courses);
        setRegisteredCourses(courses);
      }
    })();
  }, []);

  return (
    <div className="">
      <div className="w-screen h-screen bg-purple-800">
        <nav className="h-16 border-purple-900 border-b flex justify-between items-center px-16 text-white">
          <li className="list-none">Exam selection page</li>
          <li className="list-none">
            <Link to="/">
              <span className="border px-8 py-2 rounded font-semibold hover:bg-red-100 hover:text-red-800 ease-in-out hover:text-bold">
                Logout
              </span>
            </Link>
          </li>
        </nav>
        <div className="flex flex-col items-center p-4">
          <h1 className="text-3xl text-white font-bold">Take an exam</h1>
          <div className="flex flex-col my-8">
            {registeredCourses && registeredCourses.length > 0 ? (
              registeredCourses.map((course, idx) => (
                <Course key={idx} course={course} />
              ))
            ) : (
              <span className="text-white text-2xl">
                There is currently no exam available
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
