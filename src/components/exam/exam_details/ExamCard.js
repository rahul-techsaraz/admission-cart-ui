import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CustomPagination from '../../../utils/Constants/custom-components/CustomPagination';
import CardZoomEffect from '../../../utils/Constants/custom-components/cardZoomEffect/CardZoomEffect';
import CustomExamCard from './CustomExamCard';

export default function ExamCard({ data }) {
  const { allExamData } = useSelector((state) => state.common);
  const [examData, setExamData] = useState([]);

  const dataToMap = examData.length > 16 ? examData : allExamData

  useEffect(() => {
    if (data) {
      setExamData(data);
    }
  }, [data]);
  return (
    <>
      <div className="course-list-card-grid">
        {dataToMap.map((exam) => (
          <CardZoomEffect>
            <CustomExamCard exam={exam} />
          </CardZoomEffect>
        ))}
      </div>
      {allExamData.length > 16 &&
      <div className="row pagination-gap">
        <CustomPagination data={allExamData} itemsPerPage={16} currentItemsParent={setExamData} />
      </div>}
    </>
  );
}
