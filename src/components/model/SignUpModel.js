import { useDispatch } from "react-redux";
import { toggelLoginModel, toggelSignupModel } from "../../features/commonSlice";
import { Link } from "react-router-dom";
const SignUpModel = () => {
  //Dispatch Action
  const dispatch = useDispatch();
  const navigateToLogin = () => {
    dispatch(toggelSignupModel({ flag: false }));
    dispatch(toggelLoginModel({flag:true}))
  }
  
return(
    <>
    {/* <div div class="modal fade regtration-modal-popup show" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-modal="true" role="dialog" style={{display: "block"}}>
    <div className="modal-dialog">
    <div className="modal-content">
      <button type="button" className="btn-close" aria-label="Close" onClick={() => dispatch(toggelSignupModel({flag:false}))}></button>

      <div className="modal-body">
            <div className="row align-items-center">
                <div className="col-5">
                    <div className="formDesc">
                        <h4 className="text-center">Why should you sign up?</h4>
                        <ul>
                            <li>Know which college is the best fit for you.</li>
                            <li>Get help from EXPERT COUNSELORS to shortlist the colleges based on your needs.</li>
                            <li>Know about the options you have based on your rank / expected rank</li>
                            <li>Unlock services such as ASSURED PLACEMENTS, guaranteed discounts and many more</li>
                        </ul>
                    </div>
                </div>
                <div className="col-7">
                    <div className="formsec">
                        <h4>Looking for an admission at DIT University. <br />Give us your details and we will help you!</h4>
                        <form className="row g-3">
                              <div className="col-md-12">
                                <input type="text" className="form-control" id="" placeholder="Name" />
                              </div>
                              <div className="col-12">
                                    <div className="input-group">
                                          <button className="btn btn-outline-secondary" type="button"  aria-expanded="false">+91</button>
                                         
                                          <input type="text" className="form-control w-auto" aria-label="Text input with dropdown button" />
                                    </div>

                              </div>
                              <div className="col-md-12">
                                <input type="email" className="form-control" id="" placeholder="Email" />
                              </div> */}
                              {/* <div className="col-12">
                                <select className="form-select" id="specificSizeSelect1">
                                  <option selected>Preferred Stream</option>
                                </select>
                              </div> */}
                              {/* <div className="col-12">
                                <select className="form-select" id="specificSizeSelect2">
                                  <option selected>Select Program Type</option>
                                </select>
                              </div> */}
                              {/* <div className="col-md-12">
                                <select className="form-select" id="specificSizeSelect3">
                                  <option selected>State</option>
                                </select>
                              </div>
                              <div className="col-12">
                                  <div className="form-check form-switch reg-tgl-check">
                                      <input className="form-check-input reg-toggle" type="checkbox" id="flexSwitchCheckChecked" />
                                      <label className="form-check-label" for="flexSwitchCheckChecked">Enable updates & important information on Whatsapp.</label>
                                </div>
                              </div>

                              <div className="col-12">
                                <button type="submit" className="btn applynow-btn">Sign Up</button>
                              </div>

                              <div className="col-12 text-center">
                                  <p className="regis-terms">By proceeding ahead you expressly agree to the CollegeDekho <Link>Terms & Conditions</Link> and <Link>Privacy Policy</Link> </p>
                                  <p className="reg-account-link">Already have an account? <span onClick={() => navigateToLogin()}>Login</span></p>
                              </div>

                        </form>
                    </div>
                </div>
            </div>
      </div>
      
    </div>
  </div>
    </div> */}
    

    </>
)
}
export default SignUpModel;