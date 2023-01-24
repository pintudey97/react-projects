import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import {ImagePath} from './../../ImagePath';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faProjectDiagram, faBullhorn, faTags, faFolderOpen, faLandmark } from '@fortawesome/free-solid-svg-icons';
import Homedata from '../../jsondata.js';
import Whatwedo from '../Common/WhatWeDo';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import SimpleReactLightbox from 'simple-react-lightbox';
import { SRLWrapper } from 'simple-react-lightbox';
const Home = () =>{ 

    // const options = {
    //     items: 1,
    //     nav: true,
    //     rewind: true,
    //     autoplay: true
    // };

    
    return(
        <React.Fragment>
            {/* banner section start here */}
            <section className="homebanner d-flex justify-content-center align-items-center flex-collumn">
                <div className="bg-overlay"></div>
            {/* <Container fluid={true}> */}
            <Container>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                        <OwlCarousel className="owl-theme" loop  margin={0} nav  items={1} autoplay={true}> 
                            <div class="item">
                                <div className="homebanner-content text-center">
                                    <h1>{Homedata.bannerHeading.heading}</h1>
                                    <p>{Homedata.bannerHeading.text}</p>
                                </div>
                            </div>
                            <div class="item">
                                <div className="homebanner-content text-center">
                                    <h1>{Homedata.bannerHeading.heading}</h1>
                                    <p>{Homedata.bannerHeading.text}</p>
                                </div>
                            </div>
                            <div class="item">
                                <div className="homebanner-content text-center">
                                    <h1>{Homedata.bannerHeading.heading}</h1>
                                    <p>{Homedata.bannerHeading.text}</p>
                                </div>
                            </div>
                        </OwlCarousel>
                    </Col>
                </Row>
            </Container>
            </section>

            {/* Wellcome section here */}            
            <section className="text-center p-top-bottom-60">
                <Container>
                    <Row>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                        <div className="wellcome-section">
                        <h2 className="auto">{Homedata.Welcomedata.heading}</h2>
                        <p>{Homedata.Welcomedata.text}</p>
                        <img class="img-fluid" src={ImagePath[Homedata.Welcomedata.imgsec]} />
                        <img class="img-fluid" src={ImagePath.BannerImage} alt="Welcome to POLO" />
                        </div>
                    </Col>
                    </Row>
                </Container>
            </section>

            {/* WHAT WE DO */}
            <section className="bgcolor-gray p-top-bottom-60">
                <Container>
                    <Row>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                        <div className="wellcome-section">
                            
                            <h2>{Homedata.WhatWeDo.heading}</h2>
                            <p className="padding-bottom-40">{Homedata.WhatWeDo.text}</p>
                            
                        </div>
                    </Col>
                    </Row>
                    <Row>
                        {/* {Homedata.WhatWeDo.cardData.map((item, key) =>
                        <Col xs={12} sm={6} md={6} lg={4} xl={4} className="d-flex flex-collumn">
                            <div className="tiles">
                                <h2>{item.title}</h2>
                                <p>{item.text}</p>
                            </div>
                        </Col>
                        )} */}
                        {Homedata.WhatWeDo.cardData.map((item, key) =>
                        <Whatwedo
                            img={ImagePath[item.imgurl]}
                            title={item.title}
                            text={item.text}
                            buttonname={item.button}
                         />
                        )}
                        
                    </Row>
                </Container>
            </section>
            {/* Recent Work */}
            <section>
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={12} xl={12} lg={12}>
                        <div className="wellcome-section p-top-bottom-60">
                            <h2>RECENT WORK</h2>
                            <p>Lorem ipsum dolor sit amet, coper suscipit lobortis nisl ut aliquip 
                                ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit 
                                in vulputate velit esse molestie consequat, vel illum dolore eu feugiat 
                                nulla facilisis at vero eros et accumsan et iusto.</p>
                        </div>
                        </Col>
                    </Row>
                </Container>
                <Container fluid={true}>
                    
                    <SimpleReactLightbox>
                    <SRLWrapper>
                    <Row>
                        <Col xs={12} sm={6} md={6} xl={3} lg={3} className="p-0">
                        <a href={ImagePath.Gallery1} data-attribute="SRL">
                        <img src={ImagePath.Gallery1} alt="gallery-1" className="img-fluid"/>
                        </a>
                        </Col>
                        <Col xs={12} sm={6} md={6} xl={3} lg={3} className="p-0">
                        <a href={ImagePath.Gallery2} data-attribute="SRL">
                            <img src={ImagePath.Gallery2} alt="Gallery-2" className="img-fluid"/>
                            </a>
                        </Col>
                        <Col xs={12} sm={6} md={6} xl={3} lg={3} className="p-0">
                        <a href={ImagePath.Gallery3} data-attribute="SRL">
                        <img src={ ImagePath.Gallery3} alt="Gallery-3" className="img-fluid"/>
                        </a>
                        </Col>
                        <Col xs={12} sm={6} md={6} xl={3} lg={3} className="p-0">
                        <a href={ImagePath.Gallery4} data-attribute="SRL">
                        <img src={ ImagePath.Gallery4} alt="Gallery-4" className="img-fluid"/>
                        </a>
                        </Col>
                        <Col xs={12} sm={6} md={6} xl={3} lg={3} className="p-0">
                        <a href={ImagePath.Gallery5} data-attribute="SRL">
                        <img src={ ImagePath.Gallery5} alt="Gallery-5" className="img-fluid"/>
                        </a>
                        </Col>
                        <Col xs={12} sm={6} md={6} xl={3} lg={3} className="p-0">
                        <a href={ImagePath.Gallery6} data-attribute="SRL">
                        <img src={ ImagePath.Gallery6} alt="Gallery-6" className="img-fluid"/>
                        </a>
                        </Col>
                        <Col xs={12} sm={6} md={6} xl={3} lg={3} className="p-0">
                        <a href={ImagePath.Gallery7} data-attribute="SRL">
                        <img src={ ImagePath.Gallery7} alt="Gallery-7" className="img-fluid"/>
                        </a>
                        </Col>
                        <Col xs={12} sm={6} md={6} xl={3} lg={3} className="p-0">
                        <a href={ImagePath.Gallery8} data-attribute="SRL">
                        <img src={ ImagePath.Gallery8} alt="Gallery-8" className="img-fluid"/>
                        </a>
                        </Col>
                        </Row>
                        </SRLWrapper>
                        </SimpleReactLightbox>
                    
                </Container>
            </section>
            {/* SERVICES section start here */}
            <section className="p-top-bottom-60">
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                            <div className="wellcome-section text-center">
                            <h2 className="auto">SERVICES</h2>
                            <p className="padding-bottom-40">Lorem ipsum dolor sit amet, consecte adipiscing elit. Suspendisse condimentum porttitor cursumus.</p>                            
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        {Homedata.Services.CardData.map((item, i) =>
                        <Col xs={12} sm={6} md={6} lg={4} xl={4} className="d-flex flex-collumn">
                        <div className="service-icon d-flex"><FontAwesomeIcon icon={item.icon} /></div>
                            <div className="tiles">
                                    <h2>{item.title}</h2>
                                    <p>{item.text}</p>
                            </div>
                        </Col>
                    )}
                        
                    </Row>
                </Container>
            </section>
            {/* OUR BLOG section start here */}

            <section className="bgcolor-gray p-top-bottom-60">
                <Container>
                    <Row>
                    <Col xs={12} sm={12} md={12} xl={12} lg={12}>
                        <div className="wellcome-section">
                            <h2>OUR BLOG</h2>
                            <p className="padding-bottom-40">The most happiest time of the day!. Morbi sagittis, sem quis lacinia faucibus, 
                               orci ipsum gravida tortor, vel interdum mi sapien ut justo. Nulla varius consequat magna, 
                               id molestie ipsum volutpat quis. A true story, that never been told!. Fusce id mi diam, non ornare orci. 
                               Pellentesque ipsum erat, facilisis ut venenatis eu, sodales vel dolor..</p>
                        </div>
                        </Col>  
                    </Row>
                    <Row>
                        <Col xs={12} sm={6} md={6} lg={4} xl={4}>
                            <div className="blog-section">
                                <div className="blog-image">
                                    <img src={ImagePath.blog1} alt="blog-1"  className="img-fluid"/>
                                </div>
                                <div className="blog-data">
                                <span>Jan 21,2020</span> <span> 33 Comments</span>
                               <h2>Standard post with a single image</h2>
                               <p>Curabitur pulvinar euismod ante, ac sagittis 
                                ante posuere ac. Vivamus luctus commodo dolor porta feugiat. 
                                Fusce at velit id ligula pharetra laoreet.</p>
                                <NavLink to="/about" className="read-more"> READ MORE</NavLink>
                                </div>
                            </div>
                        </Col>

                        <Col xs={12} sm={6} md={6} lg={4} xl={4}>
                            <div className="blog-section">
                                <div className="blog-image">
                                    <img src={ImagePath.blog2} alt="blog-2"  className="img-fluid"/>
                                </div>
                                <div className="blog-data">
                                <span>Jan 21,2020</span> <span> 33 Comments</span>
                               <h2>Standard post with a single image</h2>
                               <p>Curabitur pulvinr euismod ante, ac sagittis 
                                ante posuere ac. Vivamus luctus commodo dolor porta feugiat. 
                                Fusce at velit id ligula pharetra laoreet.</p>
                                <NavLink to="/about" className="read-more"> READ MORE</NavLink>
                                </div>
                            </div>
                        </Col>

                        <Col xs={12} sm={6} md={6} lg={4} xl={4}>
                            <div className="blog-section">
                                <div className="blog-image">
                                    <img src={ImagePath.blog3} alt="blog-3"  className="img-fluid"/>
                                </div>
                                <div className="blog-data">
                                <span>Jan 21,2020</span> <span> 33 Comments</span>
                               <h2>Standard post with a single image</h2>
                               <p>Curabitur pulvinar euismod ante, ac sagittis 
                                ante posuere ac. Vivamus luctus commodo dolor porta feugiat. 
                                Fusce at velit id ligula pharetra laoreet.</p>
                                <NavLink to="/about" className="read-more"> READ MORE</NavLink>
                                </div>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </section>
        </React.Fragment>
    )
}
export default Home; 