import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import ImagePath from "../../imgPath";

const About = () => {
    return (
        <React.Fragment>
            <section className="about_section">
    <Container fluid={true}>
      <Row>
        <Col lg={4} md={5} className="offset-md-1">
          <div className="detail-box">
            <h2>
              About Us
            </h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus hic, dolore error nulla similique cum minima rem, distinctio animi architecto inventore temporibus consequuntur quibusdam modi atque est fuga dicta quae!
            </p>
            <div>
              <Link to="#">
                Buy Now
              </Link>
            </div>
          </div>
        </Col>
        <Col md={5} lg={7}>
          <div className="img-box">
            <img src={ImagePath.aboutImg} alt="about" />
          </div>
        </Col>
      </Row>
    </Container>
  </section>
        </React.Fragment>
    );
}
 
export default About;