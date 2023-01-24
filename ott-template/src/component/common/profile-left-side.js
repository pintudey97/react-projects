import React, { useEffect } from "react";
import { Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const ProfileLeftSide = () => {

    return(
      <React.Fragment>
                  <Col xs={12} sm={12} md={3} lg={3} xl={3}>
                    <div className="dashboard-leftnav">
                      <ul>
                        <li><NavLink to="/profile" activeClassName={({ isActive }) => isActive} exact="true" id="clickMe">Profile</NavLink></li>
                        <li><NavLink to="/edit-profile" activeClassName={({ isActive }) => isActive } exact="true">Edit Profile</NavLink></li>
                      </ul>
                    </div>
                  </Col>
              </React.Fragment>
            )
}
 
export default ProfileLeftSide;