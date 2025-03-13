import React, { useEffect, useState } from 'react';
import courseIcon1 from '../../../images/course/course-icon1.svg';
import courseIcon2 from '../../../images/course/course-icon2.svg';
import courseIcon3 from '../../../images/course/course-icon3.svg';
import courseIcon4 from '../../../images/course/course-icon4.svg';
import courseIcon5 from '../../../images/course/course-icon5.svg';
import courseIcon6 from '../../../images/course/course-icon6.svg';
import courseIcon7 from '../../../images/course/course-icon7.svg';
import courseIcon8 from '../../../images/course/course-icon8.svg';
import courseIcon9 from '../../../images/course/course-icon9.svg';
import courseIcon10 from '../../../images/course/course-icon10.svg';
import courseIcon11 from '../../../images/course/course-icon11.svg';
import courseIcon12 from '../../../images/course/course-icon12.svg';
import scollarship from '../../../images/scholarship-icon.svg';
import sandclassNameIcon from '../../../images/sandglass-icon.svg';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CustomPagination from '../../../utils/Constants/custom-components/CustomPagination';
import CustomCourseCard from './CustomCourseCard';

export default function CourseCard({ data }) {
  const { allCourseData } = useSelector((state) => state.common);
  const [courseData, setCourseData] = useState([]);

  useEffect(() => {
    if (data) {
      setCourseData(data);
    }
  }, [data]);
  return (
    <>
      <div className="row">
        {courseData.map((course) => (
          <CustomCourseCard course={course} isSwiper={false} />
        ))}
      </div>
      <div className="row pagination-gap">
        <CustomPagination data={allCourseData} itemsPerPage={8} currentItemsParent={setCourseData} />
      </div>
    </>
  );
}
