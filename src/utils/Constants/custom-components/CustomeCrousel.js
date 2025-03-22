import React, { Children, cloneElement, useEffect, useState } from 'react';
import rightArrow from '../../../images/arrow-right-icon.svg';
import leftArrow from '../../../images/arrow-left-icon.svg';

const CarouselSlides = ({ children, slideStyle, ishidden, updateActiveIndex, toggelScroll, isModal, index }) => {
  
  return (
    <div className="crousel-item" style={slideStyle()}>
      {Children.map(children, (child) =>
        cloneElement(child, { updateActiveIndex, toggelScroll, isModal, index, ishidden })
      )}
    </div>
  );
};
export { CarouselSlides };

const CustomeCrousel = ({
  children,
  itemsPerView,
  isAutoScroll,
  breakPoints,
  animation,
  autoScrollPauseOnMouseEnter,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(null);
  const [autoScroll, setAutoScroll] = useState(isAutoScroll);
  const [originalData, setOriginalData] = useState([]);
  const [clonedData, setClonedData] = useState([]);
  const [isTransitioning, setIsTransitioning] = useState(isAutoScroll);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [slidePerView, setSlidePerView] = useState(itemsPerView);

  let responsive = {
    1400: {
      itemsPerView: 4,
      spaceBetween: 20,
    },
    1024: {
      itemsPerView: 4,
      spaceBetween: 20,
    },
    768: {
      itemsPerView: 3,
      spaceBetween: 20,
    },
    576: {
      itemsPerView: 2,
      spaceBetween: 20,
    },
  };
  let intervalId;

  const cloneDataToUse = () => {
    let clonedItems = [...children];
    const firstSlide = clonedItems.slice(0, slidePerView);
    const lastSlide = clonedItems.slice(clonedItems.length - slidePerView);
    clonedItems = [...lastSlide, ...children, ...firstSlide];
    setClonedData(clonedItems);
  };

  useEffect(() => {
    if (autoScroll) {
      cloneDataToUse();
    }
  }, [autoScroll,slidePerView]);

  // Move to next slide
  const nextSlide = () => {
    if (currentIndex < children.length - slidePerView) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  // Move to previous slide
  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  // Automatically move to the next slide
  useEffect(() => {
    if (autoScroll) {
      cloneDataToUse();
      setIsTransitioning(true);
      intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 2000); // Auto-scroll every 2 seconds
    }
    return () => clearInterval(intervalId);
  }, [autoScroll]);

  useEffect(() => {
    // Reset the transition to prevent issues with infinite looping
    if (autoScroll) {
      if (currentIndex == dataToMap.length - slidePerView) {
        setTimeout(() => {
          setIsTransitioning(false);
          setCurrentIndex(slidePerView); // Jump to the second slide (to avoid showing the clone of the last slide)
        }, 300); // Wait for the transition to complete
      } else if (currentIndex == 0) {
        setTimeout(() => {
          setCurrentIndex(dataToMap.length - slidePerView); // Jump to the second-to-last slide
        }, 300); // Wait for the transition to complete
      } else {
        setIsTransitioning(true);
      }
    }
  }, [currentIndex, clonedData]);

  const toggelAutoScroll = (flag) => {
    if (autoScrollPauseOnMouseEnter && isAutoScroll) {
      if (flag) {
        setAutoScroll(true);
        setIsTransitioning(true);
      } else {
        setAutoScroll(false);
        setIsTransitioning(false);
        clearInterval(intervalId);
      }
    }
  };

  const carouselStyle = () => {
    if (breakPoints) {
      if (screenWidth >= 1400) {
        return {
          width: `${100 / slidePerView}%`,
          paddingLeft: `${responsive[1400].spaceBetween / 2}`,
          paddingRight: `${responsive[1400].spaceBetween / 2}`,
        };
      } else if (screenWidth >= 1024) {
        return {
          width: `${100 / slidePerView}%`,
          paddingLeft: `${responsive[1024].spaceBetween / 2}`,
          paddingRight: `${responsive[1024].spaceBetween / 2}`,
        };
      } else if (screenWidth >= 768) {
        return {
          width: `${100 / slidePerView}%`,
          paddingLeft: `${responsive[768].spaceBetween / 2}`,
          paddingRight: `${responsive[768].spaceBetween / 2}`,
        };
      } else if (screenWidth >= 576) {
        return {
          width: `${100 / slidePerView}%`,
          paddingLeft: `${responsive[576].spaceBetween / 2}`,
          paddingRight: `${responsive[576].spaceBetween / 2}`,
        };
      } else {
        return { width: '100%' };
      }
    } else {
      return { width: `${100 / slidePerView}%` };
    }
  };

  useEffect(() => {
    if (breakPoints) {
      responsive = { ...responsive, ...breakPoints };
    }
  }, [breakPoints]);

  useEffect(() => {
    // Add event listener on component mount
    window.addEventListener('resize', () => setScreenWidth(window.innerWidth));

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', () => setScreenWidth(window.innerWidth));
    };
  }, []);

  const resetItemsPerView = () => {
    if (screenWidth >= 1400) {
      setSlidePerView(responsive[1400].itemsPerView);
    } else if (screenWidth >= 1024) {
      setSlidePerView(responsive[1024].itemsPerView);
    } else if (screenWidth >= 768) {
      setSlidePerView(responsive[768].itemsPerView);
    } else if (screenWidth >= 576) {
      setSlidePerView(responsive[576].itemsPerView);
    } else {
      setSlidePerView(1);
    }
  };

  useEffect(() => {
    resetItemsPerView();
  }, [screenWidth]);

  useEffect(() => {
    setOriginalData([...children]);
  }, [children]);

  const dataToMap = isAutoScroll ? clonedData : originalData;
  
  return (
    <>
      <div className="carousel-container">
        <div className="crousel-wrapper">
          {/* Adjusting the X position for smooth slide */}
          <div
            className="row flex-nowrap position-relative crousel-container"
            style={{
              transform: `translateX(-${(currentIndex * 100) / slidePerView}%)`,
              transition: isTransitioning ? 'transform 0.5s ease' : 'none',
            }}
          >
            {Children.map(dataToMap, (child, index) =>
              cloneElement(child, {
                index: index,
                slideStyle: carouselStyle,
                updateActiveIndex: (i) => setActiveIndex(i),
                toggelScroll: (flag) => toggelAutoScroll(flag),
                isModal: false,
                ishidden: false
              })
            )}
          </div>
        </div>
        {animation === 'Card-Zoom-Effect' && (
          <div className="crousel-wrapper-clone">
            <div
              className="row flex-nowrap position-relative crousel-container"
              style={{
                transform: `translateX(-${(currentIndex * 100) / slidePerView}%)`,
                transition: isTransitioning ? 'transform 0.5s ease' : 'none',
              }}
            >
              {Children.map(dataToMap, (child, index) =>
                cloneElement(child, {
                  index: index,
                  ishidden: index === activeIndex ? false : true,
                  updateActiveIndex: (i) => setActiveIndex(i),
                  slideStyle: carouselStyle,
                  toggelScroll: (flag) => toggelAutoScroll(flag),
                  isModal: true,
                })
              )}
            </div>
          </div>
        )}
        <button onClick={prevSlide} disabled={currentIndex === 0} className="crousel-btn-prev">
          <img src={leftArrow} alt="" />
        </button>
        <button
          onClick={nextSlide}
          disabled={currentIndex === children.length - slidePerView}
          className="crousel-btn-next"
        >
          <img src={rightArrow} alt="" />
        </button>
      </div>
    </>
  );
};

export default CustomeCrousel;
