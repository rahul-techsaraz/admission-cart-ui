import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CustomPagination from '../../../utils/Constants/custom-components/CustomPagination';
import CardZoomEffect from '../../../utils/Constants/custom-components/cardZoomEffect/CardZoomEffect'
import CustomExamCard from './CustomExamCard';

export default function ExamCard({ data }) {
  const { allExamData } = useSelector((state) => state.common);
  const [examData, setExamData] = useState([]);
  useEffect(() => {
    if (data) {
      setExamData(data);
    }
  }, [data]);
  return (
    <>
      {examData.map((exam) => (
        <CardZoomEffect>
          <CustomExamCard exam={exam}/>
        </CardZoomEffect>
      ))}
      <div className="row">
        <CustomPagination data={allExamData} itemsPerPage={8} currentItemsParent={setExamData} />
      </div>
    </>
  );
}
