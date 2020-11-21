import React, { useState } from "react";
import ExamCloseModal from "./ExamCloseModal";
  
const ExamNavbar = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <nav className="h-16 text-white flex items-center px-8 ">
        <p className="font-bold mr-4">Thermodynamics</p>
        <p className="mr-auto">[ 12/12/2020 ]</p>
        <p className="mr-4">Shuaib Abdulgafar</p>
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
