import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import { faMapMarker, faPhone } from "@fortawesome/fontawesome-free-solid";
import { faEnvelope } from "@fortawesome/fontawesome-free-regular";

const Footer = () => {
    return (
        <React.Fragment>
             <section className="info_section layout_padding2">
    <Container>
      <Row>
        <Col md={4}>
          <div className="logo_detail">
            <div className="logo-box">
              <Link className="navbar-brand" to="/">
                <span>
                  Sportpar
                </span>
              </Link>
            </div>
            <p>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
              in some form, by injected humour, or
            </p>
          </div>
        </Col>
        <Col md={4} lg={3} className="mx-auto">
          <div className="address_box">
            <h5>
              Adderess
            </h5>
                <p className="mb-3">
                <FontAwesomeIcon icon={faMapMarker} className="mr-1" />
                  passages of Lorem Ipsum available, but the majority have
                </p>
            
              <p className="mb-3">
              <FontAwesomeIcon icon={faPhone} className="mr-1" />
              (+91) 1234567890
                </p>
                <p className="mb-3">
                <FontAwesomeIcon icon={faEnvelope} className="mr-1" />
              info@email.com
              </p>
            
          </div>
        </Col>
        <Col md={3}>
          <div className="info_form">
            <h5>
              Newsletter
            </h5>
            
              <input type="text" placeholder="Enter Your Email" />
              <button type="submit">
                Subscribe
              </button>
            
          </div>
          <div className="social_box">
            <Link to="#">
              <FontAwesomeIcon icon={faFacebookF} />
            </Link>
            <Link to="#">
              <FontAwesomeIcon icon={faTwitter} />
            </Link>
            <Link to="#">
              <FontAwesomeIcon icon={faLinkedin} />
            </Link>
            <Link to="#">
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  </section>


  <footer className="footer_section">
    <Container fluid={true}>
      <p> &copy; 2021 All Rights Reserved By </p>
    </Container>
  </footer>
        </React.Fragment>
    );
}
 
export default Footer;