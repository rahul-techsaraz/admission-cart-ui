import React, { Children, cloneElement, useState } from 'react';

const CardZoomEffect = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="card-zoom-box-wraper">
      <div
        className={isHovered ? 'card-zoom-effect' : 'card-zoom-box'}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* {children} */}
        {Children.map(children, (child, index) =>
          cloneElement(child, {
            isModal: isHovered ? true : false,
          })
        )}
      </div>
    </div>
  );
};

export default CardZoomEffect;
