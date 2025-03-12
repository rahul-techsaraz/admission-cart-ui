import React, { useState } from 'react'

const CustomeCrousel = ({data, itemsPerView, CardComponent, ishidden}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

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
  const visibleItems = data.length > 0 ? data.slice(currentIndex, currentIndex + itemsPerView) : [];
  console.log(visibleItems)
  return (
    <>
        {visibleItems.map((college, index) => (
            <CardComponent college={college} ishidden={ishidden} index={index}/>
        ))}
        

        <button onClick={prevSlide} disabled={currentIndex === 0} className="crousel-btn-prev">
            Prev
        </button>

        <button onClick={nextSlide} disabled={currentIndex + itemsPerView >= data.length} className="crousel-btn-next">
            Next
        </button>
    </>
  )
}

export default CustomeCrousel