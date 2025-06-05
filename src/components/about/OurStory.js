import { Link } from 'react-router-dom';
import ourStoryImg from '../../images/story-img.png';
import { useDispatch } from 'react-redux';
import { toggelIsContactUs } from '../../features/commonSlice';
export const OurStory = () => {
  const dispatch = useDispatch()
  return (
    <section className="imgText-grid-section green-bg section-padding">
      <div className="container-fluid">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-3">
            <div className="about-img-parent position-relative pe-md-5">
              <img src={ourStoryImg} className="img-fluid about-img1" alt="" />
            </div>
          </div>
          <div className="col-md-6">
            <h1 className="imgText-heading">Our Story</h1>

            <p className="imgText-para text-justify">
              Our team of global study experts and student mentors guide you at every step of the way - From choosing
              the right university to helping you with your application and financing counselling to lining up job
              interviews, We invests heavily in your success.
            </p>
            <Link className="leftdash-btn" onClick={()=>dispatch(toggelIsContactUs({flag:true}))}>Enquire Now</Link>
          </div>
        </div>
      </div>
    </section>
  );
};
