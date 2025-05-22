import React from 'react';
import '../../css/showmoredetailsmodal.css';

const ShowMoreDetailsModal = ({ children, label, handleClose }) => {
  return (
    <>
      <section className="admission-images-model">
        <div className="admission-images-model-all-content">
          <div className="admission-images-model-heading-content">
            <h1 className="admission-images-model-heading-content-h1">{label}</h1>
          </div>
          {children}
          <div className="admission-images-model-button-box">
            <button className="admission-images-model-button-box-button" onClick={handleClose}>
              close
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShowMoreDetailsModal;
