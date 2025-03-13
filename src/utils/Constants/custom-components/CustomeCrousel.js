import React, { useEffect, useState } from 'react';
import rightArrow from '../../../images/arrow-right-icon.svg';
import leftArrow from '../../../images/arrow-left-icon.svg';

const CustomeCrousel = ({ data, itemsPerView, CardComponent, ishidden, isAutoScroll }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(null);
  const [autoScroll, setAutoScroll] = useState(isAutoScroll);
  let intervalId;
  const nextSlide = () => {
    if (currentIndex < data.length - itemsPerView) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Slicing the data based on itemsPerView
  // const visibleItems = data.length > 0 ? data.slice(currentIndex, currentIndex + itemsPerView) : [];

  const toggelAutoScroll = (flag) => {
    if (flag) {
      setAutoScroll(true);
    } else {
      setAutoScroll(false);
      clearInterval(intervalId);
    }
  };

  useEffect(() => {
    console.log(autoScroll);

    if (autoScroll) {
      intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
      }, 3000);
    }
    return () => clearInterval(intervalId);
  }, [autoScroll, data.length]);

  return (
    <>
      {data.length > 0 &&
        data
          .slice(currentIndex, currentIndex + itemsPerView)
          .map((college, index) => (
            <CardComponent
              college={college}
              ishidden={index === activeIndex ? !ishidden : ishidden}
              updateActiveIndex={(i) => setActiveIndex(i)}
              index={index}
              realIndex={currentIndex + index}
              toggelScroll={(flag) => toggelAutoScroll(flag)}
            />
          ))}

      <button onClick={prevSlide} disabled={currentIndex === 0} className="crousel-btn-prev">
        <img src={leftArrow} alt="" />
      </button>

      <button onClick={nextSlide} disabled={currentIndex + itemsPerView >= data.length} className="crousel-btn-next">
        <img src={rightArrow} alt="" />
      </button>
    </>
  );
};

export default CustomeCrousel;
