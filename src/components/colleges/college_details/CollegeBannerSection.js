import React from 'react'
import clgInfoBanner from '../../../images/clg-info-banner-img.png';
import clgLogo from '../../../images/clg-logo3.png';
import commentIcon from '../../../images/comment-chat-icon.svg';
import starIcon from '../../../images/star-f.svg';


export default function CollegeBannerSection() {
  return (
    <section class="clg-infobanner-section text-center pb-5 position-relative">
         <img src={clgInfoBanner} alt="" />
         <div class="clg-banner-greenbox">
            <div class="container">
               <div class="row">
                  <div class="clglisting-clglogo">
                     <img src={clgLogo} alt="" />
                  </div>
               </div>
            </div>
            <div class="container green-bg">
               <div class="row align-items-center">
                  <div class="col-lg-8 text-start">
                     <h1 class="clg-info-greenbox-hdng">Indian Institute of Technology, Chennai</h1>
                     <p class="clg-info-greenbox-location">Chennai, Tamil Nadu</p>
                  </div>
                  <div class="col-lg-4">
                     <div class="d-flex align-items-center justify-content-end">
                        <span class="clginfo-greenbx-review-badge me-2">
                        <img src={starIcon} class="" alt="" />
                        4.5(10 Reviews)
                        </span>
                        <span class="commnet-chat-icon-badge">
                        <img src={commentIcon} class="" alt="" />
                        Comments
                        </span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
  )
}
