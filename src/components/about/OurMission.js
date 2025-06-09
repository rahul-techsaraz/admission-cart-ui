import { Link } from 'react-router-dom';
import OurMissionImg from '../../images/mission-img.png';
import { useDispatch } from 'react-redux';
import { toggelIsContactUs } from '../../features/commonSlice';
export const OurMission = () => {
  const dispatch = useDispatch()
  return (
    <section className="imgText-grid-section green-bg section-padding">
      <div className="container-fluid">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-3">
            <div className="about-img-parent position-relative pe-md-5">
              <img src={OurMissionImg} className="img-fluid about-img1" alt="" />
            </div>
          </div>
          <div className="col-md-6">
            <h1 className="imgText-heading">Our Mission</h1>

            <p className="imgText-para text-justify">
              Our mission is to continuously innovate the best ways to train the next generation of developers and to
              transform the the way tech education is delivered.
            </p>
            <Link className="leftdash-btn" onClick={()=>dispatch(toggelIsContactUs({flag:true}))}>Enquire Now</Link>
          </div>
        </div>
      </div>
    </section>
  );
};
