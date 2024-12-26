import React from 'react'
import clgInfoBanner from '../../../images/clg-info-banner-img.png';
import clgLogo from '../../../images/clg-logo3.png';
import commentIcon from '../../../images/comment-chat-icon.svg';
import starIcon from '../../../images/star-f.svg';
import { useSelector } from 'react-redux';
import constants from '../../../utils/Constants/constants';


export default function CollegeBannerSection() {
   const {collegeDetailsById} = useSelector(state=>state.common)
  return (
    <section class="clg-infobanner-section text-center pb-5 position-relative" style={{width:'100%', height:'250px'}}>
         <img src={constants.imageAbsolutePath+collegeDetailsById?.basicDetails?.college_thumbnail} class="h-1/2" alt="" style={{width:'100%', maxHeight:'250px', objectFit:"contain"}}/>
         <div class="clg-banner-greenbox">
            <div class="container">
               <div class="row">
                  
                  <div class="clglisting-clglogo col-2" style={{width:"92px", height:'92px'}}>
                     <img src={constants.imageAbsolutePath+collegeDetailsById?.basicDetails?.college_logo} alt="" style={{width:'100%', height:'100%', objectFit:"contain"}}/>
                  </div>
                  <div class="container green-bg col-10">
               <div class="row align-items-center">
                  <div class="col-lg-9 text-start">
                     <h1 class="clg-info-greenbox-hdng">{collegeDetailsById?.basicDetails?.college_name}</h1>
                     <p class="clg-info-greenbox-location">{collegeDetailsById?.basicDetails?.city+', '+collegeDetailsById?.basicDetails?.state}</p>
                  </div>
                  <div class="col-lg-3">
                     <div class="d-flex align-items-center justify-content-end">
                        <span class="clginfo-greenbx-review-badge me-2">
                        <img src={starIcon} class="" alt="" />
                        {collegeDetailsById?.basicDetails?.ratings+' (10 Reviews)'}
                        </span>
                        {/* <span class="commnet-chat-icon-badge">
                        <img src={commentIcon} class="" alt="" />
                        Comments
                        </span> */}
                     </div>
                  </div>
               </div>
            </div>
               </div>
            </div>
           
         </div>
      </section>
  )
}
