import React, { useState } from 'react'

const CardZoomEffect = ({children}) => {
    const [isHovered, setIsHovered] = useState(false)
  return (
    <div className={isHovered ? 'col-lg-3 col-md-4 col-sm-6 card-zoom-effect' : 'col-lg-3 col-sm-6 col-md-4'} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        {children}
    </div>
  )
}

export default CardZoomEffect