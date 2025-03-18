import React, { useEffect, useRef, useState } from 'react';
import rightArrow from '../../../images/arrow-right-icon.svg';
import leftArrow from '../../../images/arrow-left-icon.svg';

function CarouselWraper({children}) {
  
}

const CustomeCrousel = ({ data, itemsPerView, CardComponent, ishidden, isAutoScroll, breakPoints }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(null);
  const [autoScroll, setAutoScroll] = useState(isAutoScroll);
  const [clonedData, setClonedData] = useState([]);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
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
    const firstSlide = clonedItems.slice(0, itemsPerView);
    console.log(firstSlide);
    const lastSlide = clonedItems.slice(clonedItems.length - itemsPerView);
    console.log(lastSlide);
    clonedItems = [...lastSlide, ...data, ...firstSlide]; // Add last slide at the start
    // clonedItems.push(firstSlide); // Add first slide at the end

    setClonedData(clonedItems);
  }

  useEffect(() => {
    if(autoScroll){
      cloneDataToUse()
    }
  }, [data]);

  const dataToMap = autoScroll ? clonedData : data
  
    
  // Move to next slide
  const nextSlide = () => {
    if (currentIndex < data.length - itemsPerView) {
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
    // if (intervalId.current) {
    //   clearInterval(intervalId.current);
    // }
    if(autoScroll){
      setIsTransitioning(true)
      intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => prevIndex + 1);;
      }, 2000); // Auto-scroll every 2 seconds
    }
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    // Reset the transition to prevent issues with infinite looping
    if(autoScroll){
      if (currentIndex === clonedData.length - itemsPerView) {
        setTimeout(() => {
          setIsTransitioning(false)
          setCurrentIndex(itemsPerView); // Jump to the second slide (to avoid showing the clone of the last slide)
        }, 300); // Wait for the transition to complete
      } else if (currentIndex === 0) {
        setTimeout(() => {
          setCurrentIndex(clonedData.length - itemsPerView); // Jump to the second-to-last slide
        }, 300); // Wait for the transition to complete
      } 
      // else {
      //   setIsTransitioning(false);
      // }
    }
  }, [currentIndex, clonedData]);

  const toggelAutoScroll = (flag) => {
    if (flag && isAutoScroll) {
      setAutoScroll(true);
    } else {
      setAutoScroll(false);
      clearInterval(intervalId);
    }
  };

  const carouselStyle = () => {
    if(breakPoints){
      if (screenWidth > 1400){
        return {width:`${100 / responsive[1400].itemsPerView}%`,paddingLeft:`${responsive[1400].spaceBetween/2}`,paddingRight:`${responsive[1400].spaceBetween/2}`}
      }else if(screenWidth > 1024){
        return {width:`${100 / responsive[1024].itemsPerView}%`,paddingLeft:`${responsive[1024].spaceBetween/2}`,paddingRight:`${responsive[1024].spaceBetween/2}`}
      }else if(screenWidth > 768){
        return {width:`${100 / responsive[768].itemsPerView}%`,paddingLeft:`${responsive[768].spaceBetween/2}`,paddingRight:`${responsive[768].spaceBetween/2}`}
      }else if(screenWidth > 576){
        return {width:`${100 / responsive[576].itemsPerView}%`,paddingLeft:`${responsive[576].spaceBetween/2}`,paddingRight:`${responsive[576].spaceBetween/2}`}
      }else{
        return {width:'100%'}
      }
    }else{
      return {width:`${100 / itemsPerView}%`}
    }
  }
  
  useEffect(()=>{
    if(breakPoints){
      responsive = {...responsive, ...breakPoints}
    }
  },[breakPoints])
  
  useEffect(() => {
    // Add event listener on component mount
    window.addEventListener('resize', ()=>setScreenWidth(window.innerWidth));
 
    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', ()=>setScreenWidth(window.innerWidth));
    };
  }, []);
  return (
    <>
      <div className="carousel-container">
        <div className="crousel-wrapper">
          {/* Adjusting the X position for smooth slide */}
          <div
            className="row flex-nowrap position-relative crousel-container"
            style={{
              transform: `translateX(-${(currentIndex * 100) / itemsPerView}%)`,
              transition: isTransitioning ? 'transform 0.5s ease' : 'none',
            }}
          >
            {data.length > 0 && dataToMap
                .map((college, index) => (
                  <div key={index} className="crousel-item" style={carouselStyle()}>
                    <CardComponent
                      college={college}
                      updateActiveIndex={(i) => setActiveIndex(i)}
                      index={index}
                      realIndex={index}
                      toggelScroll={(flag) => toggelAutoScroll(flag)}
                      isModal={false}
                    />
                    <CardComponent
                      college={college}
                      updateActiveIndex={(i) => setActiveIndex(i)}
                      index={index}
                      realIndex={index}
                      toggelScroll={(flag) => toggelAutoScroll(flag)}
                      ishidden={index === activeIndex ? !ishidden : ishidden}
                      isModal={true}
                    />
                  </div>
                ))}
          </div>
        </div>
        <button onClick={prevSlide} disabled={currentIndex === 0} className="crousel-btn-prev">
          <img src={leftArrow} alt="" />
        </button>

        <button onClick={nextSlide} disabled={currentIndex === dataToMap.length - itemsPerView} className="crousel-btn-next">
          <img src={rightArrow} alt="" />
        </button>
      </div>
    </>
  );
};

export default CustomeCrousel;
