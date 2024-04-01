import React from 'react';
import '../../css/profilepage-collage-dekho.css';
import '../../css/responsive-profile-page.css';
import Sidebar from './Sidebar';
import ProfileEducationalDetails from './ProfileEducationalDetails';
import ProfilePreferences from './ProfilePreferences';
import ProfileBasicDetails from './ProfileBasicDetails';

export default function Profile() {
    
  return (
    <>
        <section className="profile-page">
            <div className="container">
                <div className="side-bar">
                    <Sidebar/>
                    <div className="left-box">
                        <div style={{marginBottom:"20px"}}>
                        <ProfileBasicDetails />
                        </div>
                    <ProfileEducationalDetails />
                    <ProfilePreferences />
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
