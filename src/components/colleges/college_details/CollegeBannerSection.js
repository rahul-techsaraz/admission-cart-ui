import React from 'react';
import clgInfoBanner from '../../../images/clg-info-banner-img.png';
import clgLogo from '../../../images/clg-logo3.png';
import commentIcon from '../../../images/comment-chat-icon.svg';
import starIcon from '../../../images/star-f.svg';
import { useSelector } from 'react-redux';
import constants from '../../../utils/Constants/constants';

export default function CollegeBannerSection() {
  const { collegeDetailsById } = useSelector((state) => state.common);
  return (
    <section
      className="clg-infobanner-section text-center pb-5 position-relative"
      style={{ width: '100%', height: '250px' }}
    >
      <img
        src={constants.assestAbsolutePath + collegeDetailsById?.college_thumbnail}
        className="h-1/2"
        alt=""
        style={{ width: '100%', maxHeight: '250px' }}
      />
      <div className="clg-banner-greenbox collage-green-box">
        <div className="container">
          <div className="row">
            <div className="clglisting-clglogo col-2" style={{ width: '120px', height: '100%' }}>
              <img
                src={constants.assestAbsolutePath + collegeDetailsById?.college_logo}
                alt=""
                style={{ width: '100%', height: '100%' }}
              />
            </div>
            <div className="container green-bg col-10">
              <div className="row align-items-center">
                <div className="col-lg-9 text-start">
                  <h1 className="clg-info-greenbox-hdng">{collegeDetailsById?.college_name}</h1>
                  <p className="clg-info-greenbox-location">
                    {collegeDetailsById?.city + ', ' + collegeDetailsById?.state}
                  </p>
                </div>
                <div className="col-lg-3">
                  <div className="d-flex align-items-center justify-content-end">
                    <span className="clginfo-greenbx-review-badge me-2">
                      <img src={starIcon} className="" alt="" />
                      {collegeDetailsById?.ratings + ' (10 Reviews)'}
                    </span>
                    {/* <span className="commnet-chat-icon-badge">
                        <img src={commentIcon} className="" alt="" />
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
  );
}
