import React from 'react';
import constants from '../../utils/Constants/constants';
import '../../css/perfomence-collagedekho.css';
import '../../css/perfomence-responsive.css';
import Sidebar from './Sidebar';

export default function Performence() {
  return (
    <>
      <section className="profile-page">
        <div className="container">
          <div className="side-bar">
            <Sidebar />
            <div className="left-box">
              <div className="not-show">
                <div className="not-show-img">
                  <img src={constants.images.users.noDataImg} alt="no-data" />
                </div>
                <h5>Sorry! Seems like you have no Insurance</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
