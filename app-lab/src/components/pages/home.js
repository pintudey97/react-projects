import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row, Button } from 'reactstrap';
import { ImagePath } from '../../ImagePath';
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel,} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import PackagesMonthly from '../perticile/packages-monthly';
import PackagesAnully from '../perticile/packages-anully';

const Home = () => {

    const [month, setMonth] = useState(false);
 
    
    return (
        <React.Fragment>
            {/* Home Banner Start Here */}
            <section className="home-banner">
                <Container>
                    <Row className="align-items-center">
                    <Col xs={12} sm={12} md={7} lg={7} xl={7} >
                        <div>
                        <h1>Best app for your modern lifestyle</h1>
                        <p>Increase productivity with a simple to-do app. app for managing your personal budgets.</p>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={5} lg={5} xl={5}>
                        <img src ={ImagePath.HomeBannerPhone} alt="phone" />
                    </Col>
                    </Row>
                </Container>
            </section>
            {/*Trusted by companies like Section start here*/}
            <section className="trusted-companies text-center">
                <Container>
                    <Row>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12} >
                        <h2>Trusted by companies like</h2>
                        <ul className="d-lg-flex justify-content-center">
                            <li><Link to="/"><img src={ImagePath.ProductSlider1} alt="product-1"/></Link></li>
                            <li><Link to="/"><img src={ImagePath.ProductSlider2} alt="product-2"/></Link></li>
                            <li><Link to="/"><img src={ImagePath.ProductSlider3} alt="product-3"/></Link></li>
                            <li><Link to=""><img src={ImagePath.ProductSlider4} alt="product-4"/></Link></li>
                            <li><Link to="/"><img src={ImagePath.ProductSlider5} alt="product-5"/></Link></li>
                        </ul>
                    </Col>
                    </Row>
                </Container>
            </section>
            {/*Awesome apps features Section start here*/}
            <section className="feature-app">
            <Container>
                <Row>
                    <Col xs={12} sm={12} md={7} lg={7} xl={7}>
                        <img src={ImagePath.feature} alt="" />
                    </Col>
                    <Col xs={12} sm={12} md={5} lg={5} xl={5}>
                        <h2>Awesome apps <br/>features</h2>
                        <p>Increase productivity with a simple to-do app. app for managing your personal budgets.</p>
                            <div className="feature-box d-flex">
                                <div className="feature-icon">
                                    <img src={ImagePath.Icon1} alt="icon" />
                                </div>
                                <div className="feature-data">
                                    <h3 className="red">Fast Performance</h3>
                                    <p>Get your blood tests delivered at home collect a sample from the news your blood tests.</p>
                                </div>
                            </div>
                            <div className="feature-box d-flex">
                                <div className="feature-icon">
                                    <img src={ImagePath.Icon2} alt="icon" />
                                </div>
                                <div className="feature-data">
                                    <h3 className="blue">Prototyping</h3>
                                    <p>Get your blood tests delivered at home collect a sample from the news your blood tests.</p>
                                </div>
                            </div>
                            <div className="feature-box d-flex">
                                <div className="feature-icon">
                                    <img src={ImagePath.Icon3} alt="icon" />
                                </div>
                                <div className="feature-data">
                                    <h3 className="green">Vector Editing</h3>
                                    <p>Get your blood tests delivered at home collect a sample from the news your blood tests.</p>
                                </div>
                            </div>
                    </Col>
                </Row>
            </Container>
            </section>
            <section className="jackpots">
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                            <h2>Smart jackpots that you may love this anytime & anywhere</h2>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                            <p>The rise of mobile devices transforms the way we consume information entirely and the world's most 
                            elevant channels such as Facebook.</p>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="box-rotation">
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={4} lg={4} xl={4}>
                            <div className="top-icon-tiles">
                                <img src={ImagePath.Icon4} alt="Icon"/>
                                <h2 className="red">Automatic Payouts</h2>
                                <p>Get your blood tests delivered at home collect a sample from the news your blood tests.</p>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={4} lg={4} xl={4}>
                            <div className="top-icon-tiles">
                                <img src={ImagePath.Icon5} alt="Icon"/>
                                <h2 className="blue">Network Effect</h2>
                                <p>Get your blood tests delivered at home collect a sample from the news your blood tests.</p>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={4} lg={4} xl={4}>
                            <div className="top-icon-tiles">
                                <img src={ImagePath.Icon6} alt="Icon"/>
                                <h2 className="green">Bigger Rewards Method</h2>
                                <p>Get your blood tests delivered at home collect a sample from the news your blood tests.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="code-intregation">
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                            <img src={ImagePath.Designed} alt="code integration" />
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                            <h2>Designed & built by the latest code integration</h2>
                            <p>The rise of mobile devices transforms the way we consume information entirely and the world's most 
                            elevant channels such as Facebook.</p>
                            <Button color="primery">Learn more</Button>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/*Why you should choose our app Section Start Here*/}
            <section className="box-rotation text-center">
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                            <h3>Why you should choose<br/> our app</h3>
                            <p>The rise of mobile devices transforms the way we consume information entirely<br/>
and the world's most elevant channels such as Facebook.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} sm={12} md={4} lg={4} xl={4}>
                            <div className="top-icon-tiles">
                                <img src={ImagePath.Icon7} alt="Icon"/>
                                <h2>App Development</h2>
                                <p>Get your blood tests delivered at home collect a sample from the news your blood tests.</p>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={4} lg={4} xl={4}>
                            <div className="top-icon-tiles">
                                <img src={ImagePath.Icon8} alt="Icon"/>
                                <h2>10 Times Award</h2>
                                <p>Get your blood tests delivered at home collect a sample from the news your blood tests.</p>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={4} lg={4} xl={4}>
                            <div className="top-icon-tiles">
                                <img src={ImagePath.Icon9} alt="Icon"/>
                                <h2>Cloud Storage</h2>
                                <p>Get your blood tests delivered at home collect a sample from the news your blood tests.</p>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={4} lg={4} xl={4}>
                            <div className="top-icon-tiles">
                                <img src={ImagePath.Icon10} alt="Icon"/>
                                <h2>Customization</h2>
                                <p>Get your blood tests delivered at home collect a sample from the news your blood tests.</p>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={4} lg={4} xl={4}>
                            <div className="top-icon-tiles">
                                <img src={ImagePath.Icon11} alt="Icon"/>
                                <h2>UX Planning</h2>
                                <p>Get your blood tests delivered at home collect a sample from the news your blood tests.</p>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={4} lg={4} xl={4}>
                            <div className="top-icon-tiles">
                                <img src={ImagePath.Icon12} alt="Icon"/>
                                <h2>Customer Support</h2>
                                <p>Get your blood tests delivered at home collect a sample from the news your blood tests.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/*Ultimate features that we built*/}
            <section className="box-rotation">
                <Container>
                    
                    <Row>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Row>
                        <Col xs={12} sm={12} md={12} lg={12} xl={12}> 
                        <h2>Why you should choose our app</h2>
                            <p>The rise of mobile devices transforms the way we consume information entirely
and the world's most elevant channels such as Facebook.</p>
                            </Col>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6}>                        
                            <div className="top-icon-tiles">
                                <img src={ImagePath.Icon13} alt="Icon"/>
                                <h2>App Development</h2>
                                <p>Get your blood tests delivered at home collect a sample from the news your blood tests.</p>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                            <div className="top-icon-tiles">
                                <img src={ImagePath.Icon14} alt="Icon"/>
                                <h2>UX Planing</h2>
                                <p>Get your blood tests delivered at home collect a sample from the news your blood tests.</p>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                            <div className="top-icon-tiles">
                                <img src={ImagePath.Icon15} alt="Icon"/>
                                <h2>Cloud Storage</h2>
                                <p>Get your blood tests delivered at home collect a sample from the news your blood tests.</p>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                            <div className="top-icon-tiles">
                                <img src={ImagePath.Icon16} alt="Icon"/>
                                <h2>Customer support</h2>
                                <p>Get your blood tests delivered at home collect a sample from the news your blood tests.</p>
                            </div>
                        </Col>    
                        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                            <Button color="primery">See All</Button>
                        </Col>                   
                        </Row>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                        <img src={ImagePath.featured} alt="featured"/>
                    </Col>                        
                    </Row>
                </Container>
            </section>
            {/*Pricing Table Section Start Here */}
            <section className="pricing-table">
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                            <h2>Get awesome features, without <br/> extra charges</h2>
                            <p>The rise of mobile devices transforms the way we consume information entirely <br/> and the world's most elevant channels such as Facebook.</p>                            
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                            <div className="pricing-tab">
                                <div className="buttons-panel">
                                    <label for="month">Monthly</label>
                                    <input type="radio" name="package" id="month" onChange={() => setMonth(false)} />

                                    <label for="annual">Annually</label>
                                    <input type="radio" name="package" id="annual" onChange={() => setMonth(true)} />
                                </div>
                                <div className="packages d-lg-flex">
                                    {month ? <PackagesAnully /> : <PackagesMonthly/>}
                                     
                                     
                                     {/* <div className="month">
                                     <span className="pricing-top">
                                     <p><span>$99</span>/ month</p>
                                         <p className="highlight">Pro Master</p>
                                         <p>For Best opportunities</p>
                                         </span>
                                         <p>Drag & Drop Builder</p>
                                         <p> 1,000's of Templates</p>
                                         <p> Blog Support Tools</p>
                                         <p> eCommerce Store </p>
                                         <Button color="primery" className="">Subscribe Now</Button>
                                     </div> */}
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/*Testimonial Section Start Here */}
            <section className="testimonial">
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                            <img src={ImagePath.Testimonial} alt="Testimonial" className="w-100" />
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                            <div className="data">
                                <h2>Meet Client Satisfaction <br/> by using product</h2>
                                <p>The rise of mobile devices transforms the way we consume. elevant channels such as Facebook.</p>

                            </div>
                            <div className="slide-content">
                                <img src={ImagePath.Star} alt="star" />
                                <h3>User friendly & Customizable</h3>
                                <p>Bring to the table win-win survival strategies to ensure proactive domination. 
                                    At the end of the day, going forward, a new normal that has evolved from generation X is on the 
                                    runway heading towards a streamlined cloud solution. User generated content in 
                                    real-time will have multiple touchpoints for offshoring.</p>                                
                            </div>
                            <div className="client-show">
                                <div className="picture">
                                    <span><img src={ImagePath.Client} alt="client" /> </span>
                                    <span>
                                        <h4>Zoltan Nemeth</h4>
                                        <p>CEO of Pixler Lab</p>
                                    </span>
                                </div>
                                <div className="buttons float-right">
                                    <ul>
                                        <li><Link to="#"><img src={ImagePath.Previous} alt="previous" /></Link></li>
                                        <li><Link to="#"><img src={ImagePath.Next} alt="next" /></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/*FAQ Section Start Here */}
            <section className="faqs">
                <Container>
                    <Row className="justify-content-center">
                    <Col xs={12} sm={12} md={10} lg={10} xl={10}>
                        <h2>Frequently asked questions</h2>
                        <p>The rise of mobile devices transforms the way we consume information entirely and the world's most 
                            elevant channels such as Facebook.</p>
                            <Accordion allowZeroExpanded>                                
                                    <AccordionItem >
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                            How to contact with riders emergency?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                        <p>
                        Exercitation in fugiat est ut ad ea cupidatat ut in
                        cupidatat occaecat ut occaecat consequat est minim minim
                        esse tempor laborum consequat esse adipisicing eu
                        reprehenderit enim.
                    </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                    <AccordionItem >
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                            App installation failed, how to update system information?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                        <p>
                        Exercitation in fugiat est ut ad ea cupidatat ut in
                        cupidatat occaecat ut occaecat consequat est minim minim
                        esse tempor laborum consequat esse adipisicing eu
                        reprehenderit enim.
                    </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>      
                                    <AccordionItem >
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                            App installation failed, how to update system information?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                        <p>
                        Exercitation in fugiat est ut ad ea cupidatat ut in
                        cupidatat occaecat ut occaecat consequat est minim minim
                        esse tempor laborum consequat esse adipisicing eu
                        reprehenderit enim.
                    </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>      
                                    <AccordionItem >
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                            App installation failed, how to update system information?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                        <p>
                        Exercitation in fugiat est ut ad ea cupidatat ut in
                        cupidatat occaecat ut occaecat consequat est minim minim
                        esse tempor laborum consequat esse adipisicing eu
                        reprehenderit enim.
                    </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>                                      
                            </Accordion>
                        
                    </Col>
                    
                    </Row>
                </Container>
            </section>
            {/*Download our App now ! Section Start Here */}
            <section className="download-app">
                <Container>
                    <Row>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                        <h2>Download our App now !</h2>
                        <p>The rise of mobile devices transforms the way we consume information entirely <br/> and the world's most elevant channels such as Facebook.</p>
                        <ul>
                            <li><Link to="#"><img src={ImagePath.Googleplay} alt="Googleplay" /></Link></li>
                            <li><Link to="#"><img src={ImagePath.Appstor} alt="Appstor" /></Link></li>
                        </ul>

                    </Col>
                    </Row>
                </Container>
            </section>
            
        </React.Fragment>
    );
};

export default Home;