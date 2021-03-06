import React, { useState } from 'react';
import Modal from 'react-modal';

const customStyles = {
  overlay: {
    backgroundColor: '#1e1414bf',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#fff',
    padding: '1rem 1.5rem',
    width: '40%',
  },
};

function ModalPage({ modalIsOpen, setIsOpen, setFormData }) {
  const [courseCode, setCourseCode] = useState('');
  const [courseTitle, setCourseTitle] = useState('');

  function closeModal() {
    setIsOpen(false);
  }

  function handleFormData(e) {
    e.preventDefault();

    const dataToBeSent = {
      code: courseCode,
      title: courseTitle,
    };
    setFormData(dataToBeSent);
    setCourseCode('');
    setCourseTitle('');

    closeModal();
  }

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        // ariaHideApp={false}
        contentLabel="Example Modal"
      >
        <div className="flex justify-between items-center border-b-2 pb-3 text-black">
          <h1 className="font-medium text-lg">Create Course</h1>
          <div className="">
            <button
              onClick={closeModal}
              className="text-red-600 bg-red-200 py-2 px-5 rounded"
            >
              Close
            </button>
          </div>
        </div>
        <div className="w-full max-w-xs">
          <form className="pt-6 pb-8" onSubmit={handleFormData}>
            <div className="mb-4">
              <label
                className="block text-purple-700 text-lg font-bold mb-2"
                htmlFor="code"
              >
                Course Code
              </label>
              <input
                className="appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="code"
                type="text"
                placeholder="Enter course code"
                value={courseCode}
                onChange={(e) => setCourseCode(e.target.value)}
              />
            </div>
            <div className="mb-4 mt-5">
              <label
                className="block text-purple-700 text-lg font-bold mb-2"
                htmlFor="title"
              >
                Course Title
              </label>
              <input
                className="appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="title"
                type="text"
                placeholder="Enter course title"
                value={courseTitle}
                onChange={(e) => setCourseTitle(e.target.value)}
              />
            </div>
            <div>
              <button
                className="shadow bg-purple-800 hover:bg-purple-700 text-white font-bold p-3 mt-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                disabled={!courseCode && !courseTitle}
              >
                Publish
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}

export default ModalPage;
