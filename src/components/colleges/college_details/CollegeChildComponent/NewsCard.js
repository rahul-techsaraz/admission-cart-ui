import React from 'react'
import { Link } from 'react-router-dom'
import Tooltip from '../../../../utils/Constants/custom-components/Tooltip'

const NewsCard = ({data, index}) => {
    
  return (
    <div className="swiper-slide">
        <div className="whatsNew-inner-box">
            <p className="whatsNew-date">{data?.title}</p>
            <p className="whatsNew-para">
            {data?.content.length < 100 ? data?.content : `${data?.content.slice(0,100)}...`}
            <Tooltip
                text={data?.content}
                index={index}
            >
                <Link className="whatsNew-readmore-btn">Read More</Link>
            </Tooltip>
            </p>
        </div>
    </div>
  )
}

export default NewsCard