import React, { Children, cloneElement, useEffect, useState } from 'react';
import rightArrow from '../../../images/arrow-right-icon.svg';
import leftArrow from '../../../images/arrow-left-icon.svg';

const CarouselSlides = ({ children, slideStyle, updateActiveIndex, toggelScroll, index, updatePosition, isAnimation, isModal }) => {
  const [cardPostion, setCardPosition] = useState({})

  const handleMouseEnter = (e) => {
    e.stopPropagation()
    updateActiveIndex(index);
    toggelScroll(false);
    const rect = e.target.getBoundingClientRect();
    setCardPosition({
      top: rect.top,
      left: rect.left,
      x: rect.x,
      y: rect.y,
      width: rect.width,
      height: rect.height,
    })
  };
  const handleMouseLeave = (e) => {
    e.stopPropagation()
    updateActiveIndex(null);
    toggelScroll(true);
  };
  useEffect(()=>{
    if(!isModal){
      updatePosition(cardPostion)
    }
  },[cardPostion])
  return (
    <div className={isModal ? "crousel-item-modal Card-Zoom-Effect" : "crousel-item"} style={isModal ? {} : slideStyle()} onMouseEnter={(e)=>handleMouseEnter(e)} onMouseLeave={(e)=>handleMouseLeave(e)}>
      {Children.map(children, (child) =>
        cloneElement(child,{ index:index, isModal:isModal})
      )}
      {!isModal && isAnimation && <div className='transparent-wraper'></div>}
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
  navigatePrev,
  navigateNext
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(null);
  const [autoScroll, setAutoScroll] = useState(isAutoScroll);
  const [originalData, setOriginalData] = useState([]);
  const [clonedData, setClonedData] = useState([]);
  const [isTransitioning, setIsTransitioning] = useState(isAutoScroll);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [slidePerView, setSlidePerView] = useState(itemsPerView);
  const [childToAnimate, setChildToAnimate] = useState([])
  const [hoveredCardPosition, setHoveredCardPosition] = useState(null)
  const responsive = {...breakPoints}
  let intervalId;
  const dataToMap = isAutoScroll ? clonedData : originalData;
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
      setIsTransitioning(true)
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
        }, 500); // Wait for the transition to complete
      } else if (currentIndex == 0) {
        setTimeout(() => {
          setCurrentIndex(dataToMap.length - slidePerView); // Jump to the second-to-last slide
        }, 500); // Wait for the transition to complete
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
        if (slidePerView > 1){
          return {
            "width": `${100 / slidePerView}%`,
            "padding-left": `${Math.fround(responsive[1400].spaceBetween / 2)}px`,
            "padding-right": `${Math.fround(responsive[1400].spaceBetween / 2)}px`,
          };
        }else{
          return {
            "width": `${(100 / slidePerView)}%`,
          };
        }
      } else if (screenWidth >= 1200) {
        if (slidePerView > 1){
          return {
            "width": `${100 / slidePerView}%`,
            "padding-left": `${responsive[1200].spaceBetween / 2}px`,
            "padding-right": `${responsive[1200].spaceBetween / 2}px`,
          };
        }else{
          return {
            "width": `${100 / slidePerView}%`,
          };
        }
      } else if (screenWidth >= 992) {
        if (slidePerView > 1){
          return {
            "width": `${100 / slidePerView}%`,
            "padding-left": `${responsive[992].spaceBetween / 2}px`,
            "padding-right": `${responsive[992].spaceBetween / 2}px`,
          };
        }else{
          return {
            "width": `${100 / slidePerView}%`,
          };
        }
      } else if (screenWidth >= 768) {
        if (slidePerView > 1){
          return {
            "width": `${100 / slidePerView}%`,
            "padding-left": `${responsive[768].spaceBetween / 2}px`,
            "padding-right": `${responsive[768].spaceBetween / 2}px`,
          };
        }else{
          return {
            "width": `${100 / slidePerView}%`,
          };
        }
      } else if (screenWidth >= 576) {
        if (slidePerView > 1){
          return {
            "width": `${100 / slidePerView}%`,
            "padding-left": `${responsive[576].spaceBetween / 2}px`,
            "padding-right": `${responsive[576].spaceBetween / 2}px`,
          };
        }else{
          return {
            "width": `${100 / slidePerView}%`,
          };
        }
      } else {
        return { "width": '100%' };
      }
    } else {
      return { "width": `${100 / slidePerView}%` };
    }
  };
  const valueForTranslateX = () => {
    if(screenWidth >= 1400){
      if(slidePerView > 1){
        return Math.fround((screenWidth - 1320) / 2) + 12 + Math.fround(responsive[1400].spaceBetween / 2);
      }else{
        return Math.fround((screenWidth - 1320) / 2) + 12;
      }
    }else if(screenWidth >= 1200){
      if(slidePerView > 1){
        return Math.fround((screenWidth - 1140) / 2) + 12 + (responsive[1200].spaceBetween/2);
      }else{
        return Math.fround((screenWidth - 1140) / 2 ) + 12;
      }
    }else if (screenWidth >= 992){
      if(slidePerView > 1){
        return Math.fround((screenWidth - 960) / 2) + 12 + Math.fround(responsive[992].spaceBetween / 2);
      }else{
        return Math.fround((screenWidth - 960) / 2) + 12;
      }
    }else if (screenWidth >= 768){
      if(slidePerView > 1){
        return Math.fround((screenWidth - 720) / 2) + 12 + Math.fround(responsive[768].spaceBetween / 2);
      }else{
        return Math.fround((screenWidth - 720) / 2) + 12;
      }
    }else if (screenWidth >= 576){
      if(slidePerView > 1){
        return Math.fround((screenWidth - 540) / 2) + 12 + Math.fround(responsive[576].spaceBetween / 2);
      }else{
        return Math.fround((screenWidth - 540) / 2) + 12;
      }
    }else{
      return 0;
    }
  }
  const cloneChildStyle = () => {
    return {
      transform:`translateX(${hoveredCardPosition.x - valueForTranslateX()}px)`,
      width:`${hoveredCardPosition.width}px`,
    }
  }

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
      setSlidePerView(responsive[1400]?.itemsPerView);
    } else if (screenWidth >= 1200) {
      setSlidePerView(responsive[1200]?.itemsPerView);
    } else if (screenWidth >= 992) {
      setSlidePerView(responsive[992]?.itemsPerView);
    } else if (screenWidth >= 768) {
      setSlidePerView(responsive[768]?.itemsPerView);
    } else if (screenWidth >= 576) {
      setSlidePerView(responsive[576]?.itemsPerView);
    }else {
      setSlidePerView(1);
    }
  };

  useEffect(() => {
    resetItemsPerView();
  }, [screenWidth]);

  useEffect(() => {
    setOriginalData([...children]);
  }, [children]);

  useEffect(()=>{
    if(activeIndex !== null){
      setChildToAnimate(dataToMap.filter((_, index)=>index === activeIndex))
    }else{
      setChildToAnimate([])
    }
  },[activeIndex])

  useEffect(()=>{
    if(hoveredCardPosition !== null){
      console.log(hoveredCardPosition)
    }
  },[hoveredCardPosition])
  
  
  return (
    <>
      <div className="carousel-container">
        <div className="crousel-wrapper">
          {/* Adjusting the X position for smooth slide */}
          <div
            className="crousel-container"
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
                updatePosition: (p) => setHoveredCardPosition(p),
                isModal: false,
                isAnimation: animation ? true : false
              })
            )}
          </div>
        </div>
        {animation === 'Card-Zoom-Effect' && childToAnimate.length > 0 &&
          <div className="cloned-child" style={slidePerView > 1 ? cloneChildStyle() : {width:"100%", height:"100%"}}>
            <div className='cloned-child-2'>
              {Children.map(childToAnimate, (child, index) =>
                cloneElement(child, {
                  index: activeIndex,
                  slideStyle: carouselStyle,
                  updateActiveIndex: (i) => setActiveIndex(i),
                  toggelScroll: (flag) => toggelAutoScroll(flag),
                  updatePosition: (p) => setHoveredCardPosition(p),
                  isModal: true,
                })
              )}
            </div>
          </div>
        }
        {/* {animation === 'Card-Zoom-Effect' && (
          <div className="crousel-wrapper-clone">
            <div
              className="row flex-nowrap position-relative crousel-container"
              style={{
                transform: `translateX(-${(currentIndex * 100) / slidePerView}%)`,
                transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none',
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
        )} */}
        <button
          onClick={prevSlide}
          disabled={currentIndex === 0} 
          className={navigatePrev ? navigatePrev : "crousel-btn-prev"}>
          <img src={leftArrow} alt="" />
        </button>
        <button
          onClick={nextSlide}
          disabled={currentIndex === children.length - slidePerView}
          className={navigateNext ? navigateNext : "crousel-btn-next"}
        >
          <img src={rightArrow} alt="" />
        </button>
      </div>
    </>
  );
};

export default CustomeCrousel;
