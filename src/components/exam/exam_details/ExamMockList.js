import React from 'react';
import { useSelector } from 'react-redux';

const ExamMockList = () => {
  const { examDetailsById } = useSelector((state) => state.common);
  return (
    <div className="exam_mock_list_parents">
      <table className="exam_mock_list-table">
        <tr>
          <th
            className="exam_mock_list-table_th"
            colspan="3"
          >{`${examDetailsById?.examBasicDetails?.exam_name} ${examDetailsById?.examBasicDetails?.exam_year} Mock Test PDF`}</th>
        </tr>
        <tr className="exam_mock_list-table_tr">
          <td className="exam_mock_list-table_td">{`Download ${examDetailsById?.examBasicDetails?.exam_name} ${examDetailsById?.examBasicDetails?.exam_year} Mock test-1`}</td>
          <td className="exam_mock_list-table_td">{`Download ${examDetailsById?.examBasicDetails?.exam_name} ${examDetailsById?.examBasicDetails?.exam_year} Mock test-2`}</td>
        </tr>
        <tr>
          <td className="exam_mock_list-table_td">{`Download ${examDetailsById?.examBasicDetails?.exam_name} ${examDetailsById?.examBasicDetails?.exam_year} Mock test-3`}</td>
          <td className="exam_mock_list-table_td">{`Download ${examDetailsById?.examBasicDetails?.exam_name} ${examDetailsById?.examBasicDetails?.exam_year} Mock test-4`}</td>
        </tr>
        <tr>
          <th
            className="exam_mock_list-table_thh"
            colspan="2"
          >{`Download ${examDetailsById?.examBasicDetails?.exam_name} ${examDetailsById?.examBasicDetails?.exam_year} Mock test-5`}</th>
        </tr>
      </table>

      <div className="neet_question_paper">
        <h2 className="neet_question_paper_h2">{`${examDetailsById?.examBasicDetails?.exam_name} ${examDetailsById?.examBasicDetails?.exam_year} Previous year Question Paper`}</h2>
        <p className="neet_question_paper_p">
          The Previous year question papers of the last 7 years for the NEET exam have been given below
        </p>
        <table className="exam_mock_list-table">
          <tr>
            <th className="exam_mock_list-table_th">Question Paper</th>
            <th className="exam_mock_list-table_th">Download Link</th>
          </tr>
          <tr className="exam_mock_list-table_tr">
            <td className="exam_mock_list-table_td">{`${examDetailsById?.examBasicDetails?.exam_name} Exam 2024`}</td>
            <td className="exam_mock_list-table_td_download">Download</td>
          </tr>
          <tr>
            <td className="exam_mock_list-table_td">{`${examDetailsById?.examBasicDetails?.exam_name} Exam 2023`}</td>
            <td className="exam_mock_list-table_td_download">Download</td>
          </tr>

          <tr>
            <td className="exam_mock_list-table_td">{`${examDetailsById?.examBasicDetails?.exam_name} Exam 2022`}</td>
            <td className="exam_mock_list-table_td_download">Download</td>
          </tr>

          <tr>
            <td className="exam_mock_list-table_td">{`${examDetailsById?.examBasicDetails?.exam_name} Exam 2021`}</td>
            <td className="exam_mock_list-table_td_download">Download</td>
          </tr>

          <tr>
            <td className="exam_mock_list-table_td">{`${examDetailsById?.examBasicDetails?.exam_name} Exam 2020`}</td>
            <td className="exam_mock_list-table_td_download">Download</td>
          </tr>

          <tr>
            <td className="exam_mock_list-table_td">{`${examDetailsById?.examBasicDetails?.exam_name} Exam 2019`}</td>
            <td className="exam_mock_list-table_td_download">Download</td>
          </tr>

          <tr>
            <td className="exam_mock_list-table_td">{`${examDetailsById?.examBasicDetails?.exam_name} Exam 2018`}</td>
            <td className="exam_mock_list-table_td_download">Download</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default ExamMockList;
