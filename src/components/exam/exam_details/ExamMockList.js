import React from 'react';
import { useSelector } from 'react-redux';

const ExamMockList = ({ examDetails }) => {
  return (
    <div className="exam_mock_list_parents">
      {examDetails?.exam_moc_test_paper.length > 0 && (
        <table className="exam_mock_list-table">
          <thead>
            <tr>
              <th className="exam_mock_list-table_th" colSpan="3">
                {`${examDetails?.exam_name} ${examDetails?.exam_year} Mock Test PDF`}
              </th>
            </tr>
          </thead>
          <tbody>
            {examDetails?.exam_moc_test_paper.length > 0 ? (
              examDetails?.exam_moc_test_paper
                .reduce((rows, item, index) => {
                  const rowIndex = Math.floor(index / 2);
                  if (!rows[rowIndex]) rows[rowIndex] = [];

                  rows[rowIndex].push(
                    <td key={item.id} className="exam_mock_list-table_td">
                      <a href={item.link} target="_blank" rel="noopener noreferrer">
                        {`Download ${examDetails?.exam_name} ${examDetails?.exam_year} ${item.title}`}
                      </a>
                    </td>
                  );

                  return rows;
                }, [])
                .map((row, i) => <tr key={i}>{row}</tr>)
            ) : (
              <tr>
                <td colSpan="3">No mock tests available.</td>
              </tr>
            )}
          </tbody>
        </table>
      )}

      {examDetails?.exam_previous_test_paper.length > 0 && (
        <div className="neet_question_paper">
          <h2 className="neet_question_paper_h2">{`${examDetails?.exam_name} ${examDetails?.exam_year} Previous year Question Paper`}</h2>
          <p className="neet_question_paper_p">
            {`The Previous year question papers of the last ${examDetails?.exam_previous_test_paper.length} years for the
            ${examDetails?.exam_name} exam have been given below`}
          </p>

          <table className="exam_mock_list-table">
            <thead>
              <tr>
                <th className="exam_mock_list-table_th">Question Paper</th>
                <th className="exam_mock_list-table_th">Download Link</th>
              </tr>
            </thead>
            <tbody>
              {examDetails?.exam_previous_test_paper.length > 0 ? (
                examDetails?.exam_previous_test_paper.map((paper) => (
                  <tr key={paper.id} className="exam_mock_list-table_tr">
                    <td className="exam_mock_list-table_td">{`${examDetails?.exam_name} Exam ${paper.year}`}</td>
                    <td className="exam_mock_list-table_td_download">
                      <a href={paper.link} target="_blank" rel="noopener noreferrer" className="text-primary">
                        Download
                      </a>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="2" className="text-center">
                    No Papers Available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ExamMockList;
