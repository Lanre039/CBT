import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import CoursesPage from './CoursesPage';
import StudentsPage from './StudentsPage';

function AdminTab(props) {
  const [currentTab, setCurrentTab] = useState('courses');
  const history = useHistory();

  const handleLogout = () => {
    history.push('/');
  };

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
      <nav className="bg-purple-800 flex justify-end px-8 py-4">
        <button
          className="rounded bg-white text-purple px-4 py-2 font-medium"
          onClick={handleLogout}
        >
          Logout
        </button>
      </nav>
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
      <div className="mx-10 sm:mx-4 md:mx-20 lg:mx-40 mt-4 ">
        {renderActualPage()}
      </div>
    </div>
  );
}

export default AdminTab;
