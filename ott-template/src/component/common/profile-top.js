import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ImagePath } from "../../ImagePath";
import {UserDetails} from '../context/context';

const ProfileTop = (props) => {
  
  const getDP = useContext(UserDetails);
  const dp = JSON.parse(getDP);

    return (
        <React.Fragment>
            <section className="profile-banner">
            <Container fluid>
              <Row>
                  <Col xs={12} sm={12} md={12} lg={12} xl={12} className="p-0">
                      <div className="feature-photo">
                          <figure><img src={ImagePath.timeline1} alt="cover" /></figure>
                          <Container fluid>
                              <Row className="merged">
                                  <Col sm={3} lg={2}>
                                      <div className="user-avatar">
                                          <figure>
                                              <img src={dp ? dp.userimg : ""} alt="avtar" />
                                          </figure>
                                      </div>
                                  </Col>
                              </Row>
                          </Container>
                      </div>
                  </Col>
              </Row>
            </Container>
          </section>
        </React.Fragment>
    );
}
 
export default ProfileTop;