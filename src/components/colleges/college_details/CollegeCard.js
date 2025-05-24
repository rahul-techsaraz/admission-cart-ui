import React, { useEffect, useState } from 'react';
import { CustomCollegeCard } from './CustomCollegeCard';
import CardZoomEffect from '../../../utils/Constants/custom-components/cardZoomEffect/CardZoomEffect';
import CustomPagination from '../../../utils/Constants/custom-components/CustomPagination';
import { useSelector } from 'react-redux';

export default function CollegeCard({ data }) {
  const [collegeData, setCollegeData] = useState([]);
  const { allCollegeData } = useSelector((state) => state.common);

  const dataToMap = collegeData.length > 16 ? collegeData : allCollegeData

  useEffect(() => {
      if (data) {
        setCollegeData(data);
      }
    }, [data]);
  return (
    <>
      <div className="course-list-card-grid">
        {dataToMap.map((college) => (
          <CardZoomEffect>
            <CustomCollegeCard college={college} />
          </CardZoomEffect>
        ))}
      </div>
      {allCollegeData.length > 16 &&
      <div className="row pagination-gap">
        <CustomPagination data={allCollegeData} itemsPerPage={16} currentItemsParent={setCollegeData} />
      </div>}
    </>
  );
}
