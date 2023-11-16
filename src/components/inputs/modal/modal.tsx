import React from 'react';
import Popup from 'reactjs-popup';
import {ModalProps} from "../../../interfaces/IModal";


const Modal: React.FC<ModalProps> = ({isOpen, closeModal, content}: ModalProps) => {
  return isOpen ? (
    <Popup
      open={isOpen}
      modal
      nested
      contentStyle={{
        maxWidth: 'lg:max-w-screen-sm sm:max-w-screen-md',
        width: '80%',
        backgroundColor: 'white',
        padding: '20px',
        marginTop: '20vh',
        marginBottom: '20vh',
      }}
      closeOnDocumentClick={false}
    >
      <div className="modal text-right p-4">
        <button
          style={{color: 'gray', fontWeight: 'bold'}}
          className="close-button"
          onClick={closeModal}
        >
          X
        </button>
        <div className="mx-auto text-center mb-5 p-2">
          <h1 className="text-xl text-black font-bold m-5">{content?.title}</h1>
          <h2 className="text-base text-black font-bold m-4 ">{content?.subTitle}</h2>
          <h2 className="mt-3   text-base">
            {content?.description}
          </h2>
          <h2 className="text-black text-base m-4">{content?.note}</h2>
        </div>
        <div className="footer text-center mt-40">
          <button
            type="button"
            className={`
              py-3
              w-8/12
              text-sm
              font-medium
              bg-pink-300
              text-white
              focus:outline-none
              rounded-full
              border
              border-gray-200
              hover:bg-white
              hover:border-pink-300
              hover:text-pink-300
            `}
            onClick={closeModal}
          >
            {content?.text_button}
          </button>
        </div>
      </div>
    </Popup>
  ) : null;
};

export default Modal;
