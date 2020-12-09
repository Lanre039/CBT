import React, { useState } from 'react';
import CoursesPage from './CoursesPage';
import StudentsPage from './StudentsPage';

function AdminTab(props) {
  const [currentTab, setCurrentTab] = useState('courses');

  const renderActualPage = () => {
    switch (currentTab) {
      case 'courses':
        return <CoursesPage />;
      case 'students':
      default:
        return <StudentsPage />;
    }
  };

  return (
    <div className="bg-white">
      <nav className="bg-purple-800 h-16`"></nav>
      <div className="my-3">
        <div className="flex justify-center">
          <h1
            className={`px-20 py-3 font-bold cursor-pointer border-b-2 ${
              currentTab === 'courses' ? 'bg-gray-100' : 'bg-white'
            }`}
            onClick={() => setCurrentTab('courses')}
          >
            Courses
          </h1>
          <h1
            className={`px-20 py-3 font-bold cursor-pointer border-b-2 ${
              currentTab === 'students' ? 'bg-gray-100' : 'bg-white'
            }`}
            onClick={() => setCurrentTab('students')}
          >
            Students
          </h1>
        </div>
      </div>
      <div className="mx-10 sm:mx-4 md:mx-20 lg:mx-40 mt-20 ">
        {renderActualPage()}
      </div>
    </div>
  );
}

export default AdminTab;
