import React from "react";
import { Container, Row, Col } from "reactstrap";

const Contact = () => {
    return (
        <React.Fragment>
            <section className="contact_section">
                <div className="contact_container">
                    <Container>
                        <Row>
                            <Col md={6} className="mx-auto">
                                <div className="contact_form layout_padding">
                                    <div className="heading_container heading_center">
                                        <h2>Get in touch</h2>
                                    </div>
                                    <input type="text" placeholder="Full name " />
                                    <div className="top_input">
                                        <input type="email" placeholder="Email" />
                                        <input type="text" placeholder="Phone Number" />
                                    </div>
                                    <input type="text" placeholder="Message" className="message_input" />
                                    <div className="btn-box"><button>Send</button></div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        </React.Fragment>
    );
}

export default Contact;