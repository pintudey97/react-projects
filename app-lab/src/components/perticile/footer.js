import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import { ImagePath } from '../../ImagePath';

const Footer = () =>{
    return(
        <React.Fragment>
            {/*Footer Section Start Here */}
            <section className="footer-section">
                <Container>
                    <Row>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                        <img src={ImagePath.Footerlogo} alt="Footer logo" />
                        <ul>                                    
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/">Key Features</Link></li>
                            <li><Link to="/">Pricing</Link></li>
                            <li><Link to="/">Testiminial</Link></li>
                            <li><Link to="/">FAQ</Link></li>
                        </ul>                        
                    </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
}
export default Footer;