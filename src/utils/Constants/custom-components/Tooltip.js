import React, { useState } from 'react';

const Tooltip = ({ text, position = 'top', children, linkIndex, index }) => {
  const [isVisible, setIsVisible] = useState(false);

  // Show tooltip when mouse enters, hide when mouse leaves
  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  return (
    <div className="tooltip-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {children}
      {(isVisible || linkIndex === index) && <div className={`tooltip-${position}`}>{text}</div>}
    </div>
  );
};

export default Tooltip;
