import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CustomPagination from '../../../utils/Constants/custom-components/CustomPagination';
import CustomCourseCard from './CustomCourseCard';
import CardZoomEffect from '../../../utils/Constants/custom-components/cardZoomEffect/CardZoomEffect';

export default function CourseCard({ data }) {
  const { allCourseData } = useSelector((state) => state.common);
  const [courseData, setCourseData] = useState([]);

  const dataToMap = courseData.length > 16 ? courseData : allCourseData

  useEffect(() => {
    if (data) {
      setCourseData(data);
    }
  }, [data]);
  return (
    <>
      <div className="course-list-card-grid">
        {dataToMap.map((course) => (
          <CardZoomEffect>
            <CustomCourseCard course={course} />
          </CardZoomEffect>
        ))}
      </div>
      {allCourseData.length > 16 &&
      <div className="row pagination-gap">
        <CustomPagination data={allCourseData} itemsPerPage={16} currentItemsParent={setCourseData} />
      </div>}
    </>
  );
}
