import React, {useState} from "react";
import "./ModalStyles.css"


const Modal = () => {
  const [modal, setModal] = useState(false)

  const toggleModal = () => {
    setModal(!modal)
  }

  return  (
    <>
    {/* button trigger modal */}
      <button onClick={toggleModal} className="btn btn-success btn-modal">Modal</button>

    {/* modal */}
      <div className="modal">
        <div onClick={toggleModal} className="overlay">
            <div className="modal-content">
                <h3 className="modal-title">modalTitle</h3>
                <p>lorem ipsum dolor sit amet consectetur</p>
                <button className="close-modal" onClick={toggleModal}>close</button>
            </div>
        </div>
      </div>
    </>
    
  );
};

export default Modal;
