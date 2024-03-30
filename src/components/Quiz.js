import React from 'react'
import constants from '../utils/Constants/constants'


export default function Quiz() {
  return (
    <>
        <section className="page">
        <div className="container">
            <div className="page-time">
                <div className="page-no">
                    <h4 className="container-h4"> <span style={{color: "#0099FF", fontSize: "20px"}}>?</span> 8 of 30</h4>
                </div>
                <div className="time-left">
                    <div className="alarm-clock-img">
                        <img src={constants.images.PsychometricTest.alarmClockIcon} alt="alarm-clock"/>
                    </div>
                    <h4 className="time-left-h4"> Time left: </h4>
                    <input type="time-left" id="time-left" value="29:29"/>
                </div>
            </div>
            <div className="question">
                <h4>8. Which of the following is valid colour code ?</h4>
            </div>
            <div className="option-4">
                <div className="option">
                    <span className="circle">A</span>
                    <span className="option-1">#000000;</span>
                </div>
                <div className="option">
                    <span className="circle">B</span>
                    <span className="option-1">#000000dd;</span>
                </div>
                <div className="option">
                    <span className="circle">C</span>
                    <span className="option-1">#000000fff;</span>
                </div>
                <div className="option">
                    <span className="circle">D</span>
                    <span className="option-1">#000000;</span>
                </div>
            </div>
            <div className="submit-and-prev-next">
            <button type="submit" className="btn-submit">Submit Test</button>
            <div className="prev-next">
                <button className="prv">
                    <i className="fa-solid fa-angle-left"></i>
                    <span className="prev">Prev</span>
                </button>
                <button className="nxt">
                    <span className="next">Next</span>
                    <i className="fa-solid fa-angle-right"></i>
                </button>
            </div>
        </div>
        </div>
    </section>
    </>
  )
}
