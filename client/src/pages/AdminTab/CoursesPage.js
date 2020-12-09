import React, { useState, useEffect } from 'react';
import { useToken } from '../../api/useToken';
import Course from './Course';
import ModalPage from './Modal';

const CoursesPage = () => {
  const [displayModal, setDisplayModal] = useState(false);
  const [fetchedData, setFetchedData] = useState(null);
  const [formData, setFormData] = useState({});
  const [reloadState, setReloadState] = useState(false);

  const examPortal = useToken();
  useEffect(() => {
    async function saveData() {
      try {
        const {
          data: { course },
        } = await examPortal.post('/create-course', formData);

        setFetchedData([...fetchedData, course]);
      } catch (error) {
        console.log(error);
      }
    }

    async function fetchData() {
      try {
        const {
          data: { courses },
        } = await examPortal.get('/courses');

        setFetchedData(courses);
      } catch (error) {
        console.log(error);
      }
    }

    if (Object.keys(formData).length > 0) {
      saveData();
      setFormData({});
    }

    if (!fetchedData) {
      fetchData();
    }
  }, [fetchedData, formData]);

  console.log(fetchedData);
  const renderData = () => {
    return (
      <div className="flex flex-wrap m-20 mb-0 py-10 px-1">
        {fetchedData.map((data, index) => (
          <Course
            data={data}
            index={index}
            key={index}
            setReloadState={setReloadState}
          />
        ))}
      </div>
    );
  };

  return (
    <div>
      <div>
        {fetchedData && fetchedData.length > 0 ? (
          renderData()
        ) : (
          <h1 className="text-center">
            "No COURSE available at the moment!. Proceed to create course."
          </h1>
        )}
      </div>
      <div className="flex justify-end pr-10 pb-10 cursor-pointer">
        <span
          style={{ fontSize: '4.5rem' }}
          className="material-icons text-white bg-purple-800 rounded-full flex items-center justify-center shadow-lg"
          onClick={() => setDisplayModal(true)}
        >
          add
        </span>
      </div>
      <ModalPage
        modalIsOpen={displayModal}
        setIsOpen={setDisplayModal}
        setFormData={setFormData}
      />
    </div>
  );
};

export default CoursesPage;
