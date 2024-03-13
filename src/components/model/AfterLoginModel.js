import React from 'react'

export default function AfterLoginModel() {
  return (
    <>
        <section className="popup">
            <div className="logo-name">
                <div className="logo">J</div>
                <label for="name" className="name">Hi, Jayanta Kumar Mondal</label>
            </div>
            <div className="all-list">
                <div className="my-collage">
                    <div className="my-collage-box">
                        <a href="#">
                            <i className="fa-solid fa-building-columns"></i>
                        <span className="My-Collages">My Collages</span>
                        </a>
                    </div>
                </div>

                <div className="my-collage">
                    <div className="my-collage-box">
                        <a href="#">
                            <i className="fa-regular fa-circle-user"></i>
                        <span className="My-Collages">My Profile</span>
                        </a>
                    </div>
                </div>

                <div className="my-collage">
                    <div className="my-collage-box">
                        <a href="#">
                            <i className="fa-regular fa-credit-card"></i>
                        <span className="My-Collages">Payments</span>
                        </a>
                    </div>
                </div>

                <div className="my-collage">
                    <div className="my-collage-box">
                        <a href="#">
                            <i className="fa-solid fa-screwdriver-wrench"></i>
                        <span className="My-Collages">Account Settings</span>
                        </a>
                    </div>
                </div>
                <div className="my-collage">
                    <div className="my-collage-box-log-out">
                    <a href="#">
                    <i className="fa-solid fa-right-from-bracket"></i>
                    <span className="My-Collages">Sign Out</span>
                    </a>
                </div>
                </div>
            </div>

    </section>
    </>
  )
}
