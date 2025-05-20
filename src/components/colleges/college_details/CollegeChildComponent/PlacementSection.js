import { useState } from 'react';
import './PlacementSection.css'; // Add styles here or inline via className

const PlacementSection = ({ placementData = [] }) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const renderPlacementCard = (item, index) => (
    <div className="placement-card" key={`placement-${item?.year || 'y'}-${index}`}>
      <div className="placement-card-body">
        {item?.year && (
          <div className="placement-row">
            <span className="placement-label">Year:</span>
            <span className="placement-value">{item.year}</span>
          </div>
        )}

        {item?.highest_package && (
          <div className="placement-row">
            <span className="placement-label">Highest Package:</span>
            <span className="placement-value">₹{item.highest_package}</span>
          </div>
        )}

        {item?.average_package && (
          <div className="placement-row">
            <span className="placement-label">Average Package:</span>
            <span className="placement-value">₹{item.average_package}</span>
          </div>
        )}

        {Array.isArray(item?.top_recruiters) && item.top_recruiters.length > 0 && (
          <div className="placement-row">
            <span className="placement-label">Top Recruiters:</span>
            <div className="recruiters-list">
              {item.top_recruiters.map(
                (rec, i) =>
                  rec && (
                    <span key={i} className="recruiter-badge">
                      {rec}
                    </span>
                  )
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );

  if (!Array.isArray(placementData) || placementData.length === 0) return null;

  return (
    <>
      <div className="courses-details-rightcol-grid mt-5">
        <h2 className="courses-details-rightcol-grid-title">Placement</h2>
        <div className="placement-grid">{placementData.slice(0, 2).map(renderPlacementCard)}</div>

        {/* {placementData.length > 2 && (
          <Button variant="link" className="p-0 mt-3" onClick={handleOpenModal}>
            View All Placements
          </Button>
        )} */}
      </div>

      {/* Modal */}
      {/* <Modal show={showModal} onHide={handleCloseModal} size="lg" centered scrollable>
        <Modal.Header closeButton>
          <Modal.Title>All Placement Records</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="placement-grid">{placementData.map(renderPlacementCard)}</div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal> */}
    </>
  );
};

export default PlacementSection;
