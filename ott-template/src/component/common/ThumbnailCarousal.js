import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import OwlCarousel from 'react-owl-carousel';
import { ImagePath } from '../../ImagePath';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { FaPlay, FaRegHeart } from 'react-icons/fa';
import ThumbCaro from '../../data/ThumbCaro.js';
import { Link } from 'react-router-dom';


const ThumbnailCarousal = (props) => {

    const options = {
        loop:true,
        margin:15,
        responsiveClass:true,
        nav:true,
        dots:false,
        items:4,
        responsive:{
            0:{
                items:2,               
            },
            580:{
                items:3,
            },
            600:{
                items:3,
            },
            1000:{
                items:4,
            },
            1200:{
                items:4,
            }
        }
    };
    
    return (  
        <React.Fragment>
            <section className="section-padding">
            <Container fluid>
                <Row>
                    <Col md lg xl={12}>
                        <h4 className="heading-title">{props.title}</h4>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col md lg xl={12}>
                        <div className="raiden-product-slider">
                        <OwlCarousel className='owl-theme' {...options}>
                            {ThumbCaro[props.data].tradingCardData.map((item, key)=>
                            <div className="item">
                            <div className="product-slider-container" key={key}>
                                <div className="product-slider-image">
                                    <img src={ImagePath[item.imgUrl]} alt="poster" />
                                    <div className="product-like-option">
                                        <div className="like like-heart">
                                            <div className="ulike ulike_is_not_liked">
                                                <FaRegHeart />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="gen-movie-action">
                                        <Link to="#" className="gen-button">
                                            <FaPlay />
                                        </Link>
                                    </div>
                                </div>
                                <div className="gen-info-contain">
                                    <div className="gen-movie-info">
                                        <h3><Link to="#">{item.name}</Link></h3>
                                    </div>
                                    <div className="gen-movie-meta-holder">
                                        <ul>
                                            <li>{item.category}</li>
                                        </ul>
                                    </div>
                                </div>
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
 
export default ThumbnailCarousal;