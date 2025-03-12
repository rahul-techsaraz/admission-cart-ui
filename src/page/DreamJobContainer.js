import { Link } from 'react-router-dom';
import arrowRightIcon from '../images/arrow-right-icon.svg';
import { useDispatch, useSelector } from 'react-redux';
import { toggelIsLoginPopup } from '../features/commonSlice';
const DreamJobContainer = () => {
  const { isPopup } = useSelector((state) => state.common);
  const dispatch = useDispatch();
  return (
    <>
      <section className="admission-process-section">
        <div className="container cust-container">
          <div className="admission-process-bx d-flex align-items-center justify-content-between">
            <div className="admission-process-content">
              <h2>Get #Assured to land your dream job</h2>
              <p>Master employable skills under the mentorship of industry experts to become job ready</p>
            </div>
            <Link
              className="admission-process-btn d-inline-flex align-self-stretch"
              onClick={() => dispatch(toggelIsLoginPopup({ flag: true }))}
            >
              <img src={arrowRightIcon} className="arrow-right-icon" alt="" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
export default DreamJobContainer;
