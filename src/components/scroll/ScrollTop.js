import React from 'react';

const ScrollTop = () => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div on onClick={handleClick} className="scroll-btn" id="scroll-top-btn-circle">
      <i class="fa-solid fa-arrow-up scroll-icon"></i>
    </div>
  );
};

export default ScrollTop;
