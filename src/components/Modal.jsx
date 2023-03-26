import React from 'react';

const Modal = ({ post, setIsModalOpen }) => {
    return (
      <div className="relative z-10">
        <button
        onClick={() => {
          console.log(post);
          setIsModalOpen(false);
        }}
        >
          close me
        </button>
      </div>
    );
  };

export default Modal