import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import LeftSide from "../common/profile-left-side";
import ProfileTop from "../common/profile-top";

const EditProfile = () => {

    return (
        <React.Fragment>
            <ProfileTop />
   
    <section className="section-padding">
        <Container fluid>
          <Row>
            <LeftSide />
            <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-9">
              <form method="" action="" id="" className="">
              <div className="my-profile-process">
              <Row>
                <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                  <label className="dashboard-heading white-color mbottom-20">Edit Profile</label>
                  
                  
                  
                </Col>
              </Row>
            </div>      
            </form>
            </div>
          </Row>
        </Container>
      </section>
        </React.Fragment>
    );
}
 
export default EditProfile;