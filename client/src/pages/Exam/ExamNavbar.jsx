import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ExamCloseModal from './ExamCloseModal';

const ExamNavbar = () => {
  const [openModal, setOpenModal] = useState(false);
  const { courseTitle } = useSelector((state) => state.exam);

  const fullName = sessionStorage.getItem('name_of_user');

  const todaysDate = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();

    return `${mm} : ${dd} : ${yyyy}`;
  };

  return (
    <>
      <nav className="h-16 text-white flex items-center px-8 ">
        <p className="font-bold mr-4">{courseTitle}</p>
        <p className="mr-auto">{todaysDate()}</p>
        <p className="mr-4">{fullName}</p>
        <button
          className="px-2 py-2 bg-red-200 text-red-800 text-sm font-semibold rounded-lg"
          onClick={() => setOpenModal(true)}
        >
          End exam
        </button>
      </nav>
      {openModal && (
        <ExamCloseModal setIsOpen={setOpenModal} isOpen={openModal} />
      )}
    </>
  );
};

export default ExamNavbar;
