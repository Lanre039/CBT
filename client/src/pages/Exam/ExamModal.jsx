import React from "react";
import Modal from "react-modal";

const customStyles = {
  overlay: {
    backgroundColor: "#1e1414bf",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const ExamModal = ({ children, setIsOpen, modalIsOpen }) => {
  Modal.setAppElement("#root");
  // const [modalIsOpen, setIsOpen] = useState(true);

  // const openModal = () => {
  //   setIsOpen(true);
  // };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {children}
      </Modal>
    </div>
  );
};

export default ExamModal;
