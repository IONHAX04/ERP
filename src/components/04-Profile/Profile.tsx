import React from "react";

import "./Profile.css";

const Profile: React.FC = () => {
  return (
    <div>
      <div className="headerPrimary">
        <h3>PROFILE</h3>
        <div className="quickAcces">
          <div className="p-link layout-topbar-button">
            <i className="pi pi-user"></i>
          </div>
          <h3 className="ml-2 mr-5">User Name</h3>
        </div>{" "}
      </div>
      <div className="userProfilePage">
        <div className="basicProfileCont">
          <div className="card">
            <img src="" alt="Profile Pic" className="profileImg" />
            <div className="personalDet">
              <div className="userName">
                <h3>Director</h3>
                <i className="pi pi-pen-to-square"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
