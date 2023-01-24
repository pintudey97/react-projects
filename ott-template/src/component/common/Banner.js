import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import OwlCarousel from 'react-owl-carousel';
import { ImagePath } from '../../ImagePath';
import { FaPlayCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import bannerData from '../../data/banner-data';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Banner = (props) => {
    // const options = {
    //     items: 1,
    //     nav: true,
    //     rewind: true,
    //     autoplay: true
    // };
    return (  
        <React.Fragment>
            <section className="homepage-banner">
                <Container fluid>
                    <Row>
                    <Col xs lg="12" className='p-0 m-0'>
                    <div className="banner-section">
                    <OwlCarousel className='owl-theme' loop margin={0} nav items={1} autoplay={false}>
                        {bannerData.homebanner.map((items, key)=>
                            <div className="item" style={{background: `url(${ImagePath[items.imgUrl]})`}} key={key}>
                                <div className="banner-content h-100">
                                    <Container className="h-100">
                                        <Row className="justify-content-center h-100">
                                            <div className="col-xl-6">
                                                <Link to="#" className="playBut popup-youtube popup-vimeo popup-gmaps">                                                    
                                                   <FaPlayCircle />
                                                </Link>
                                                <div className="gen-movie-info">
                                                    <h3>{items.title}</h3>
                                                </div>
                                                <div className="gen-movie-meta-holder">
                                                    <ul className="gen-meta-after-title">
                                                        <li>{items.season}</li>
                                                        <li>
                                                            <Link to="#" className="radious-4"><span>{items.category}</span></Link>
                                                        </li>
                                                        <li>
                                                            <i className="fas fa-eye">
                                                            </i>
                                                            <span>{items.views}</span>
                                                        </li>
                                                    </ul>
                                                    <p>{items.text}</p>
                                                </div>
                                            </div>
                                        </Row>
                                    </Container>
                                </div>
                            </div>
                            )}
                        </OwlCarousel>
                        </div>
                    </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
}
 
export default Banner;