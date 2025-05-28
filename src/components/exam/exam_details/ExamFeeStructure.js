import React from 'react'

const ExamFeeStructure = ({examDetails}) => {
    const examFeeStructure = examDetails?.exam_fee_structure
    console.log(examDetails)
    
  return (
    <>
        {examFeeStructure.length > 0 &&
            // <div></div>
            <div className="exam-details-hightlisghts-sec mt-5">
            <h5 className="mb-3">
            <strong>{`${examDetails?.exam_name} Fees Structure`}</strong>
            </h5>
            <div className="exam-details-hightlights-table">
            <table className="table">
                <thead>
                <tr>
                    <th>
                    <p>Category</p>
                    </th>
                    <th>
                    <p>Application Fees</p>
                    </th>
                    <th>
                    <p>Mode</p>
                    </th>
                    <th>
                    <p>Note</p>
                    </th>
                </tr>
                </thead>
                <tbody>
                {examFeeStructure.map((exam, index) => (
                    <tr key={index}>
                    <td>{exam?.category}</td>
                    <td>{`₹ ${Number(exam?.application_fee).toLocaleString()}`}</td>
                    <td>{exam?.mode}</td>
                    <td>{exam?.note}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
        </div>
        }
    </>
  )
}

export default ExamFeeStructure