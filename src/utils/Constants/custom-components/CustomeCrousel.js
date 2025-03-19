import React, { useEffect, useRef, useState } from 'react';
import rightArrow from '../../../images/arrow-right-icon.svg';
import leftArrow from '../../../images/arrow-left-icon.svg';

function CarouselWraper({ children }) {}

const CustomeCrousel = ({
  data,
  itemsPerView,
  CardComponent,
  ishidden,
  isAutoScroll,
  breakPoints,
  animation,
  autoScrollPauseOnMouseEnter,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(null);
  const [autoScroll, setAutoScroll] = useState(isAutoScroll);
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
    // Clone the first and last slides to create infinite loop effect
    let clonedItems = [...data];
    const firstSlide = clonedItems.slice(0, slidePerView);
    const lastSlide = clonedItems.slice(clonedItems.length - slidePerView);
    clonedItems = [...lastSlide, ...data, ...firstSlide]; // Add last slide at the start
    // clonedItems.push(firstSlide); // Add first slide at the end
    setClonedData(clonedItems);
  };

  useEffect(() => {
    if (autoScroll) {
      cloneDataToUse();
    }
  }, [data]);

  const dataToMap = isAutoScroll ? clonedData : data;

  // Move to next slide
  const nextSlide = () => {
    if (currentIndex < data.length - slidePerView) {
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
      if (currentIndex === clonedData.length - slidePerView) {
        setTimeout(() => {
          setIsTransitioning(false);
          setCurrentIndex(slidePerView); // Jump to the second slide (to avoid showing the clone of the last slide)
        }, 300); // Wait for the transition to complete
      } else if (currentIndex === 0) {
        setTimeout(() => {
          setCurrentIndex(clonedData.length - slidePerView); // Jump to the second-to-last slide
        }, 300); // Wait for the transition to complete
      } else {
        setIsTransitioning(true);
      }
    }
  }, [currentIndex, clonedData]);

  const toggelAutoScroll = (flag) => {
    if (autoScrollPauseOnMouseEnter) {
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
          width: `${100 / responsive[1400].itemsPerView}%`,
          paddingLeft: `${responsive[1400].spaceBetween / 2}`,
          paddingRight: `${responsive[1400].spaceBetween / 2}`,
        };
      } else if (screenWidth >= 1024) {
        return {
          width: `${100 / responsive[1024].itemsPerView}%`,
          paddingLeft: `${responsive[1024].spaceBetween / 2}`,
          paddingRight: `${responsive[1024].spaceBetween / 2}`,
        };
      } else if (screenWidth >= 768) {
        return {
          width: `${100 / responsive[768].itemsPerView}%`,
          paddingLeft: `${responsive[768].spaceBetween / 2}`,
          paddingRight: `${responsive[768].spaceBetween / 2}`,
        };
      } else if (screenWidth >= 576) {
        return {
          width: `${100 / responsive[576].itemsPerView}%`,
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

  // useEffect(()=>{
  //   console.log(isTransitioning)
  // },[isTransitioning])
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
            {data.length > 0 &&
              dataToMap.map((college, index) => (
                <div key={index} className="crousel-item" style={carouselStyle()}>
                  <CardComponent
                    college={college}
                    updateActiveIndex={(i) => setActiveIndex(i)}
                    index={index}
                    toggelScroll={(flag) => toggelAutoScroll(flag)}
                    isModal={false}
                  />
                </div>
              ))}
          </div>
        </div>
        {animation === 'Card-Zoom-Effect' && (
          <div className="crousel-wrapper-clone">
            {/* Adjusting the X position for smooth slide */}
            <div
              className="row flex-nowrap position-relative crousel-container"
              style={{
                transform: `translateX(-${(currentIndex * 100) / slidePerView}%)`,
                transition: isTransitioning ? 'transform 0.5s ease' : 'none',
              }}
            >
              {data.length > 0 &&
                dataToMap.map((college, index) => (
                  <div key={index} className="crousel-item" style={carouselStyle()}>
                    <CardComponent
                      college={college}
                      index={index}
                      updateActiveIndex={(i) => setActiveIndex(i)}
                      toggelScroll={(flag) => toggelAutoScroll(flag)}
                      ishidden={index === activeIndex ? !ishidden : ishidden}
                      isModal={true}
                    />
                  </div>
                ))}
            </div>
          </div>
        )}
        <button onClick={prevSlide} disabled={currentIndex === 0} className="crousel-btn-prev">
          <img src={leftArrow} alt="" />
        </button>

        <button
          onClick={nextSlide}
          disabled={currentIndex === dataToMap.length - slidePerView}
          className="crousel-btn-next"
        >
          <img src={rightArrow} alt="" />
        </button>
      </div>
    </>
  );
};

export default CustomeCrousel;
