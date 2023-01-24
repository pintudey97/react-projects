import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { ImagePath } from '../../ImagePath';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import InnerBanner from '../Common/InnerBanner';

const Contact = () =>{
    return(
        <React.Fragment>
            {/* About us banner section Start Here */}
            
            <InnerBanner
                bannerimg={ImagePath.aboutbanner}
                pagename="Contact us"
                pagetext="This is contact us page. Morbi sagittis, sem quis lacinia faucibus, orci ipsum gravida tortor, vel interdum mi sapien ut justo. Nulla varius consequat magna, id molestie ipsum volutpat quis. A true story, that never been told!. Fusce id mi diam, non ornare orci. Pellentesque ipsum erat, facilisis ut venenatis eu, sodales vel dolor. The most happiest time of the day!."
            />
            
            <section className="contact-us p-top-bottom-60">
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                        <div className="wellcome-section">
                        <h2>GET IN TOUCH</h2>
                        <p>The most happiest time of the day!. Suspendisse condimentum porttitor cursus. Duis nec nulla turpis. 
                        Nulla lacinia laoreet odio, non lacinia nisl malesuada vel. Aenean malesuada fermentum bibendum.</p>
                        </div>
                        <div className="m-t-30">
<form className="widget-contact-form">
<Row>
<Col md={6} className="form-group">
<label for="name">Name</label>
<input type="text" aria-required="true" name="widget-contact-form-name" required="" className="form-control required name" placeholder="Enter your Name" />
</Col>
<Col md={6} className="form-group">
<label for="email">Email</label>
<input type="email" aria-required="true" name="widget-contact-form-email" required="" className="form-control required email" placeholder="Enter your Email" />
</Col>
</Row>
<Row>
<Col md={12} className="form-group">
<label for="subject">Your Subject</label>
<input type="text" name="widget-contact-form-subject" required="" className="form-control required" placeholder="Subject..." />
</Col>
</Row>
<div className="form-group">
<label for="message">Message</label>
<textarea type="text" name="widget-contact-form-message" required="" rows="5" className="form-control required" placeholder="Enter your Message"></textarea>
</div>

    <button className="btn" type="submit"><FontAwesomeIcon icon={faPaperPlane} /> &nbsp;Send message</button>
</form>
</div>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.212521319236!2d88.11764381443874!3d22.831625529167972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f863d201c80dab%3A0x861a38d6270e5077!2sHaripal%20Railway%20Station%20Panel%20Cabin!5e0!3m2!1sen!2sin!4v1598359887141!5m2!1sen!2sin" width="600" height="450" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0" title="Map"></iframe>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    )
}

export default Contact;