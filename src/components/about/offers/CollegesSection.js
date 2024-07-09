import offeringImg from "../../../images/offer-icon/offering-icon1.svg";
import arrowRightImg from "../../../images/arrow-right-icon.svg";
export const CollegeSection = ()=>{

    return (
          <div class="col-sm-6 col-md-4 col-lg-3">
                    <div class="offering-box text-center">
                        <img src={offeringImg} class="offer-icon" alt="" />
                        <h1 class="offer-heading">College Finder</h1>
                        <p class="offer-para">Browse through authentic and updated information on courses, careers, colleges </p>
                        <a href="#" class="course-readmore-btn green-btn">Read More <img src={arrowRightImg} alt="" /></a>
                    </div>
                </div>
    )
}