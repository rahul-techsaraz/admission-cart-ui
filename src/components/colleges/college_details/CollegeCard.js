import React, { useEffect, useState } from 'react';
import collegeImage1 from '../../../images/clg-img1.jpg';
import collegeLogo from '../../../images/clg-logo3.png';
import collegeWishList from '../../../images/wishlist-checked-icon.svg';
import constants from '../../../utils/Constants/constants';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggelIsLoginPopup } from '../../../features/commonSlice';
import { CustomCollegeCard } from './CustomCollegeCard';

export default function CollegeCard({ allCollegeData }) {
  return (
    <>
      {allCollegeData.map((college) => (
        <CustomCollegeCard college={college} isSwiper={false} />
      ))}
    </>
  );
}
