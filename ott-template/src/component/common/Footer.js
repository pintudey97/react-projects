import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaSkype, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ImagePath } from "../../ImagePath";
// import FooterColor from '../context/context';

const Footer = () => {
    // const footercolor = useContext(FooterColor);
    // console.log(footercolor.footerbg, 'footerbg');
    // console.log(footercolor.copyrightbg, 'copyrightbg');

    return (
        <React.Fragment>
            <section className="footer-section">
        <footer>
            <div className="footer-coll"> {/*style={{background:footercolor.footerbg}}*/}
                <div className="footer-coll-top plr-30">
                    <Container fluid>
                        <Row>
                            <Col md={6} xl={3}>
                                <div className="widget">
                                    <Row>
                                        <Col sm={12}>
                                            <img src={ImagePath.Logo} className="gen-footer-logo" alt="footer-logo" />
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            </p>
                                            <ul className="social-link">
                                                <li><Link to="#" className="facebook"><FaFacebookF /></Link></li>
                                                <li><Link to="#" className="facebook"><FaInstagram /></Link></li>
                                                <li><Link to="#" className="facebook"><FaSkype /></Link></li>
                                                <li><Link to="#" className="facebook"><FaTwitter /></Link></li>
                                            </ul>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col md={6} xl={3}>
                                <div className="widget">
                                    <h4 className="footer-title">Explore</h4>
                                    <div className="menu-explore-container">
                                        <ul className="menu">
                                            <li className="menu-item">
                                                <Link to="#" aria-current="page">Home</Link>
                                            </li>
                                            <li className="menu-item"><Link to="#">Movies</Link></li>
                                            <li className="menu-item"><Link to="#">Tv Shows</Link></li>
                                            <li className="menu-item"><Link to="#">Videos</Link></li>
                                            <li className="menu-item"><Link to="#">Actors</Link></li>
                                            <li className="menu-item"><Link to="#">Basketball</Link></li>
                                            <li className="menu-item"><Link to="#">Celebrity</Link></li>
                                            <li className="menu-item"><Link to="#">Cross</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6} xl={3}>
                                <div className="widget">
                                    <h4 className="footer-title">Company</h4>
                                    <div className="menu-about-container">
                                        <ul className="menu">
                                            <li className="menu-item"><Link to="#">Company</Link></li>
                                            <li className="menu-item"><Link to="#">Privacy Policy</Link></li>
                                            <li className="menu-item"><Link to="#">Terms Of Use</Link></li>
                                            <li className="menu-item"><Link to="#">Help Center</Link></li>
                                            <li className="menu-item"><Link to="#">contact us</Link></li>
                                            <li className="menu-item"><Link to="#">Subscribe</Link></li>
                                            <li className="menu-item"><Link to="#">Our Team</Link></li>
                                            <li className="menu-item"><Link to="#">Faq</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6} xl={3}>
                                <div className="widget">
                                    <h4 className="footer-title">Downlaod App</h4>
                                    <Row>
                                        <div className="col-sm-12">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            </p>
                                            <Link to="#">
                                                <img src={ImagePath.playstore} className="gen-playstore-logo" alt="playstore" />
                                            </Link>
                                            <Link to="#">
                                                <img src={ImagePath.appstore} className="gen-appstore-logo" alt="appstore" />
                                            </Link>
                                        </div>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="gen-copyright-footer"> {/*style={{background:footercolor.copyrightbg}}*/}
                    <Container>
                        <Row>
                            <Col md={12} className="align-self-center">
                                <span className="gen-copyright"> Copyright 2022 Raiden Template |  All Rights Reserved.</span>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </footer>
    </section>
        </React.Fragment>
    );
}
 
export default Footer;