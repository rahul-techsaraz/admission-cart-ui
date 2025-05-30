import { Link } from 'react-router-dom';
import brainStromingImage from '../images/brainstorming-img2.png';
import { useDispatch, useSelector } from 'react-redux';
import { toggelIsLoginPopup } from '../features/commonSlice';

const ExploreCoursesPage = () => {
  const { authenticateUser } = useSelector((state) => state.common);
  const dispatch = useDispatch();
  const handleClick = (from) => {
    if (!authenticateUser) {
      dispatch(toggelIsLoginPopup({ flag: true }));
    }
  };
  return (
    <>
      <section className="choice-place-section section-padding">
        <div className="choice-place-innersection d-flex">
          <div className="choice-place-col2 green-bg">
            <h2>Confused about the best career-fit for you?</h2>
            <p>
              Too many choices can be daunting! Analyse your aptitude, capabilities, personality and interests with our
              scientific psychometric tool, and get advised on the best career options for you. It can also derive
              whether or not you are suitable for a particular career or role type.
            </p>
            <Link
              className="theme-btn black-btn"
              to={authenticateUser && '/courses_list'}
              onClick={() => handleClick()}
            >
              Explore Courses
            </Link>
          </div>
          <div className="choice-place-col1 choice-place1-col1 position-relative">
            <img src={brainStromingImage} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};
export default ExploreCoursesPage;
