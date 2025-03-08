import { Link } from 'react-router-dom';
import brainStromingImage from '../images/brainstorming-img1.png'
const ChoiceSection = () => {
    return(
        <>
        <section className="choice-place-section section-padding">
        <div className="choice-place-innersection d-flex">
            <div className="choice-place-col1 position-relative">
                <img src={brainStromingImage} alt="" />
            </div>
            <div className="choice-place-col2 green-bg">
               <h2>Find top colleges of your choice at one place</h2>
               <p>1 single form and get access to 2500+ colleges across India. CAF saves your time, money and makes the college application process easier for you to apply to numerous colleges using one window.</p>
               <Link className="theme-btn black-btn" to={'/colleges_list'}>Find Colleges</Link>
            </div>
        </div>
    </section>
        </>
    )
}
export default ChoiceSection;