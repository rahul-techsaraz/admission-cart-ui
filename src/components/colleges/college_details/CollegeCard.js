import React, { useEffect, useState } from 'react';
import { CustomCollegeCard } from './CustomCollegeCard';
import CardZoomEffect from '../../../utils/Constants/custom-components/cardZoomEffect/CardZoomEffect';

export default function CollegeCard({ allCollegeData }) {
  return (
    <>
      {allCollegeData.map((college) => (
        <CardZoomEffect>
          <CustomCollegeCard college={college} />
        </CardZoomEffect>
      ))}
    </>
  );
}
