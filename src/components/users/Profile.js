import React from 'react'

export default function Profile() {
  return (
    <>
        <section className="profile-page">
        <div className="container">
        <div className="side-bar">
            <div className="side-navbar-parents">
                
            <div className="side-navbar">
                <input type="checkbox" id="check"/>
                <label for="check">
                    <i className="fa-solid fa-bars-staggered" id="bars"></i>
                    <i className="fa-solid fa-xmark" id="cancel"></i>
                </label>
            <ul>
                <li><a href="#"><span className="home-icon"><i className="fa-solid fa-house"></i></span> <span className="home-text">Home</span></a></li>
                <li className="active"><a href="#"><span className="profile-icon"><i className="fa-solid fa-user"></i></span> <span className="profile-text">Profile</span></a></li>
                <li><a href="#"><span><i className="fa-solid fa-chart-pie"></i></span> My Test Performance</a></li>
                <li><a href="#"><span><i className="fa-solid fa-building-columns"></i></span> Collages</a></li>
                <li><a href="#"><span><i className="fa-solid fa-compass"></i></span> Career Compass</a></li>
                <li><a href="#"><span><i className="fa-solid fa-id-card"></i></span> Document</a></li>
                <li><a href="#"><span><i className="fa-solid fa-comment"></i></span> Feed</a></li>
                <li><a href="#"><span><i className="fa-solid fa-money-check-dollar"></i></span> Payments</a></li>
                <li><a href="#"><span><i className="fa-solid fa-gift"></i></span> Rewards</a></li>
                <li><a href="#"><span><i className="fa-solid fa-car-burst"></i></span> Insurance</a></li>
                <li><a href="#"><span><i className="fa-solid fa-face-smile"></i></span> Counsellors</a></li>
                <li><a href="#"><span><i className="fa-solid fa-gear"></i></span> Account Settings</a></li>
            </ul>
        </div>
    </div>
        <div className="left-box">
            {/* <!--  --> */}
           <div className="basic-detials">
            <div className="besic-detials-all-text">
            <div className="besic-detials-h3-i">
                <h3>Basic Details</h3>
                <i className="fa-solid fa-pen-fancy"></i>
            </div>
            <div className="fname-dob-social">
                <div className="full-name">Full Name
                    <h3 className="full-name-h3">Jayanta Kumar Mondal</h3>
                </div>
                <div className="dob">DOB
                    <h3 className="do-b">N/A</h3>
                </div>
                <div className="social-category">Social Category
                    <h3 className="social">N/A</h3>
                </div>

                <div className="gender">Gender
                    <h3 className="gender-h3">N/A</h3>
                </div>
                <div className="marital-status">Marital Status
                    <h3 className="marital-h3">N/A</h3>
                </div>
                <div className="physically-challenged">Physically challenged?
                    <h3 className="physically-h3">N/A</h3>
                </div>
            </div>
            </div>
            
           </div>
           {/* <!--  --> */}
           <div className="contact-details">
            <div className="besic-detials-h3-i">
                <h3>Contact Details</h3>
                <i className="fa-solid fa-pen-fancy"></i>
            </div>
            <div className="fname-dob-social">
                <div className="full-name">Mobile Number
                    <h3 className="full-name-h3">6290733000</h3>
                </div>
                <div className="dob">Email address
                    <h3 className="do-b">jayantakumarmondal2018@gmail.com</h3>
                </div>
                <div className="social-category">City
                    <h3 className="social">Kolkata</h3>
                </div>

                <div className="gender">State
                    <h3 className="gender-h3">West Bengal</h3>
                </div>
            </div>
           </div>

           {/* <!-- Education Details --> */}

           <div className="education-details">
            <div className="education-details-all-text">
            <div className="besic-detials-h3-i">
                <h3>Education Details</h3>
                <i className="fa-solid fa-pen-fancy"></i>
            </div>
            <h4 className="education-h4">className X</h4>
            <div className="educationl-details-wraper">
                <div className="full-name">Board
                    <h3 className="full-name-h3">N/A</h3>
                </div>
                <div className="dob">School
                    <h3 className="do-b">N/A</h3>
                </div>
                <div className="social-category">Passing Year
                    <h3 className="social">N/A</h3>
                </div>

                <div className="gender">Marks Type
                    <h3 className="gender-h3">N/A</h3>
                </div>
                <div className="marital-status">Percentage/ CGPA
                    <h3 className="marital-h3">N/A</h3>
                </div>
            </div>
            </div>

            <div className="education-details-all-text">
                <h6>className XII</h6>
                <div className="educationl-details-wraper">
                    <div className="full-name">Board
                        <h3 className="full-name-h3">N/A</h3>
                    </div>
                    <div className="dob">School
                        <h3 className="do-b">N/A</h3>
                    </div>
                    <div className="social-category">Passing Year
                        <h3 className="social">N/A</h3>
                    </div>
    
                    <div className="gender">Stream
                        <h3 className="gender-h3">N/A</h3>
                    </div>
                    <div className="marital-status">Marks Type
                        <h3 className="marital-h3">N/A</h3>
                    </div>
                    <div className="dob">Percentage/ CGPA
                        <h3 className="do-b">N/A</h3>
                    </div>
                </div>
                </div>

                {/* <!--  --> */}

                <div className="education-details-all-text">
                    <h6>Graduation</h6>
                    <div className="educationl-details-wraper">
                        <div className="full-name">College
                            <h3 className="full-name-h3">N/A</h3>
                        </div>
                        <div className="dob">Passing Year
                            <h3 className="do-b">N/A</h3>
                        </div>
                        <div className="social-category">Degree
                            <h3 className="social">N/A</h3>
                        </div>
        
                        <div className="gender">Marks Type
                            <h3 className="gender-h3">N/A</h3>
                        </div>
                        <div className="marital-status">Percentage/ CGPA
                            <h3 className="marital-h3">N/A</h3>
                        </div>
                    </div>
                    </div>
               </div>
 {/* <!--  -->

 <!-- Preferences start --> */}
 <div className="preferences">
    <div className="preferences-h3-i">
        <h3>Preferences</h3>
        <i className="fa-solid fa-pen-fancy"></i>
    </div>
    <div className="preferences-all-text">
        <div className="text">Stream
            <h6>1.Design</h6>
        </div>
        <div className="text">Level
            <h6>PG</h6>
        </div>
        <div className="text">Specialization
            <h6>No Preferences</h6>
        </div>
        <div className="text">Location
            <h6>No Preferences</h6>
        </div>
        <div className="text">College Type
            <h6>N/A</h6>
        </div>
        <div className="text">Fee Range
            <h6>No fee constraint</h6>
        </div>
        <div className="text">Colleges
            <h6>No Preferences</h6>
        </div>
        <div className="text">Interested in studying abroad?
            <h6>No</h6>
        </div>
        <div className="text">Need a loan?
            <h6>No</h6>
        </div>
         </div>
      </div>

      {/* <!-- Exam Details start --> */}

      <div className="exam-details">
        <div className="exam-details-i">
            <h6>Exam Details</h6>
            <i className="fa-solid fa-pen-fancy"></i>
        </div>
        <p className="exam-detils-p">Tell us about the exam details that you are preparing or has attempted so that we can build better recommendations for you.</p>
      </div>
        </div>

        </div>
        </div>
    </section>
    </>
  )
}
