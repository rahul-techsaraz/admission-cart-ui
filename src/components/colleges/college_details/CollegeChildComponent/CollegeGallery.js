import React, { useState } from 'react';
import ShowMoreDetailsModal from '../../../model/ShowMoreDetailsModal';
//import { Modal, Button } from 'react-bootstrap';

const CollegeGallery = ({ galleryImages, assetPath }) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  if (!Array.isArray(galleryImages) || galleryImages.length === 0) return null;

  return (
    <>
    <div className="courses-details-rightcol-grid">
      <h2 className="courses-details-rightcol-grid-title">Photos</h2>
      <div className="courses-details-rightcol-gridcontent clg-info-photo-innergrid">
        <ul className="d-flex flex-wrap justify-content-between">
          {galleryImages.slice(0, 4).map((img, index) => (
            <li className="border-0" key={index}>
              <img
                src={assetPath + img}
                alt={`Gallery ${index}`}
                onClick={handleOpenModal}
                loading="lazy"
                style={{ cursor: 'pointer', width: '100px', height: '70px', objectFit: 'cover' }}
              />
            </li>
          ))}
        </ul>
        {/* View More Button */}
        {/* {galleryImages.length > 4 && (
          <button variant="link" className="p-0 mt-2" onClick={handleOpenModal}>
            View All Photos
          </button>
        )}{' '}
        * */}
      </div>

      {/* Modal */}

      {showModal && (
        <ShowMoreDetailsModal handleClose={handleCloseModal} label={'Our Gallary'}>
          <div className="admission-images-model-images-box">
            <div className="admission-images-model-images-box-child">
              {galleryImages.map((image, index) => (
                <img
                  key={index}
                  src={assetPath + image}
                  alt={`Gallery Full ${index}`}
                  style={{ width: '150px', height: '100px', objectFit: 'cover', borderRadius: '4px' }}
                />
              ))}
            </div>
          </div>
        </ShowMoreDetailsModal>
      )}
    </div>
    {galleryImages.length > 4 && (
          <button variant="link" className="collage-details-gallery-button-on" onClick={handleOpenModal}>
            View All Photos
          </button>
        )}{' '}
        
    </>
  );
};

export default CollegeGallery;
