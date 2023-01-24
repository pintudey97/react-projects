import React, { useState } from 'react';
import './about.css';
import { Container, Row, Col, Nav, NavItem, TabContent, TabPane, Button, Collapse } from 'reactstrap';
import { ImagePath } from '../../ImagePath';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faProjectDiagram, faBullhorn, faTags, faFolderOpen, faLandmark } from '@fortawesome/free-solid-svg-icons';
import Homedata from '../../jsondata';
import InnerBanner from '../Common/InnerBanner';
import Whatwedo from '../Common/WhatWeDo';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
import Collapsible from 'react-collapsible';



const About = () =>{

    const [count, setCount] = useState(0);
    const numberIncrize = () =>{
        setCount(count + 1);
    }
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
      if(activeTab !== tab) setActiveTab(tab);
    }

  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const toggle1 = () => setIsOpen1(!isOpen1);
  const toggle2 = () => setIsOpen2(!isOpen2);
  const Toggle3 = () => setIsOpen3(!isOpen3);

    return(
        <React.Fragment>
            {/* About us banner section Start Here */}
            <InnerBanner
                bannerimg={ImagePath.contactbanner}
                pagename="About us"
                pagetext="This is About us page. Morbi sagittis, sem quis lacinia faucibus, orci ipsum gravida tortor, vel interdum mi sapien ut justo. Nulla varius consequat magna, id molestie ipsum volutpat quis. A true story, that never been told!. Fusce id mi diam, non ornare orci. Pellentesque ipsum erat, facilisis ut venenatis eu, sodales vel dolor. The most happiest time of the day!."
            />

    <button onClick={numberIncrize}>{count}</button>
            
            
            {/* WHAT WE DO */}
            <section className="bgcolor-gray p-top-bottom-60">
                <Container>
                    <Row>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                        <div className="wellcome-section">
                            <h2>WHAT WE DO</h2>
                            <p className="padding-bottom-40">Create amam ipsum dolor sit amet, Beautiful nature, and rare feathers!.</p>
                        </div>
                    </Col>
                    </Row>
                    <Row>
                        {/* {Homedata.WhatWeDo.cardData.map((item, i) =>
                        <Col xs={12} sm={6} md={6} lg={4} xl={4} className="d-flex flex-collumn">
                            <div className="tiles">
                                <h2>{item.title}</h2>
                                <p>{item.text}</p>
                            </div>
                        </Col>
                        )} */}
                        
                        {Homedata.AboutWhatWeDo.cardData.map((item, i) =>
                        <Whatwedo
                            img={ImagePath[item.imgurl]}
                            title={item.title}
                            text={item.text}
                         />
                        )}
                    </Row>
                </Container>
            </section>

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
                    <Col xs={12} sm={6} md={6} lg={4} xl={4} className="d-flex flex-collumn">
                        <div className="service-icon d-flex"><FontAwesomeIcon icon={faCoffee} /></div>
                            <div className="tiles">
                                <h2>Fast processing</h2>
                                <p>Lorem ipsum dolor sit amet, blandit vel sapien vitae, condimentum ultricies magna et</p>
                            </div>
                        </Col>
                        <Col xs={12} sm={6} md={6} lg={4} xl={4} className="d-flex flex-collumn">
                        <div className="service-icon d-flex"><FontAwesomeIcon icon={faProjectDiagram} /></div>
                            <div className="tiles">
                                <h2>Flexible Layouts</h2>
                                <p>Lorem ipsum dolor sit amet, blandit vel sapien vitae, condimentum ultricies magna et</p>
                            </div>
                        </Col>
                        <Col xs={12} sm={6} md={6} lg={4} xl={4} className="d-flex flex-collumn">
                        <div className="service-icon d-flex"><FontAwesomeIcon icon={faBullhorn}/></div>
                            <div className="tiles">
                                <h2>Unlimited Colors</h2>
                                <p>Lorem ipsum dolor sit amet, blandit vel sapien vitae, condimentum ultricies magna et</p>
                            </div>
                        </Col>
                        <Col xs={12} sm={6} md={6} lg={4} xl={4} className="d-flex flex-collumn">
                        <div className="service-icon d-flex"><FontAwesomeIcon icon={faTags} /></div>
                            <div className="tiles">
                                <h2>Premium Sliders</h2>
                                <p>Lorem ipsum dolor sit amet, blandit vel sapien vitae, condimentum ultricies magna et</p>
                            </div>
                        </Col>
                        <Col xs={12} sm={6} md={6} lg={4} xl={4} className="d-flex flex-collumn">
                        <div className="service-icon d-flex"><FontAwesomeIcon icon={faFolderOpen} /></div>
                            <div className="tiles">
                                <h2>Modern Design</h2>
                                <p>Lorem ipsum dolor sit amet, blandit vel sapien vitae, condimentum ultricies magna et</p>
                            </div>
                        </Col>
                        <Col xs={12} sm={6} md={6} lg={4} xl={4} className="d-flex flex-collumn">
                        <div className="service-icon d-flex"><FontAwesomeIcon icon={faLandmark} /></div>
                            <div className="tiles">
                                <h2>Clean Modern Code</h2>
                                <p>Lorem ipsum dolor sit amet, blandit vel sapien vitae, condimentum ultricies magna et</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="bgcolor-gray p-top-bottom-60">
                <Container>
                    <Row>
                    <Col xs={12} sm={12} md={12} xl={12} lg={12}>
                        <div className="wellcome-section text-center">
                        <h2 className="auto">OUR TEAM</h2>
                            <p className="padding-bottom-40">The most happiest time of the day!. Morbi sagittis, sem quis lacinia faucibus, 
                               orci ipsum gravida tortor, vel interdum mi sapien ut justo. Nulla varius consequat magna, 
                               id molestie ipsum volutpat quis. A true story, that never been told!. Fusce id mi diam, non ornare orci. 
                               Pellentesque ipsum erat, facilisis ut venenatis eu, sodales vel dolor..</p>
                        </div>
                        </Col>  
                    </Row>
                    <Row>
                        <Col xs={12} sm={6} md={6} lg={3} xl={3}>
                            <div className="blog-section">
                                <div className="blog-image">
                                    <img src={ImagePath.team1} alt="blog-1"  className="img-fluid"/>
                                </div>
                                <div className="blog-data">
                                <span>Jan 21,2020</span> <span> 33 Comments</span>
                               <h2>Alea Smith</h2>
                               <p>Curabitur pulvinar euismod ante, ac sagittis 
                                ante posuere ac. </p>
                                </div>
                            </div>
                        </Col>

                        <Col xs={12} sm={6} md={6} lg={3} xl={3}>
                            <div className="blog-section">
                                <div className="blog-image">
                                    <img src={ImagePath.team2} alt="blog-2"  className="img-fluid"/>
                                </div>
                                <div className="blog-data">
                                <span>Jan 21,2020</span> <span> 33 Comments</span>
                               <h2>Alea Smith</h2>
                               <p>Curabitur pulvinar euismod ante, ac sagittis 
                                ante posuere ac. </p>
                                
                                </div>
                            </div>
                        </Col>

                        <Col xs={12} sm={6} md={6} lg={3} xl={3}>
                            <div className="blog-section">
                                <div className="blog-image">
                                    <img src={ImagePath.team3} alt="blog-3"  className="img-fluid"/>
                                </div>
                                <div className="blog-data">
                                <span>Jan 21,2020</span> <span> 33 Comments</span>
                               <h2>Alea Smith</h2>
                               <p>Curabitur pulvinar euismod ante, ac sagittis 
                                ante posuere ac. </p>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} sm={6} md={6} lg={3} xl={3}>
                            <div className="blog-section">
                                <div className="blog-image">
                                    <img src={ImagePath.team4} alt="blog-3"  className="img-fluid"/>
                                </div>
                                <div className="blog-data">
                                <span>Jan 21,2020</span> <span> 33 Comments</span>
                               <h2>Alea Smith</h2>
                               <p>Curabitur pulvinar euismod ante, ac sagittis 
                                ante posuere ac. </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Container>
            <section className="about-tab p-top-bottom-60">
            <Nav tabs>
        <NavItem>
          <NavLink to="#"
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
            Tab1
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="#"
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
            Tab2
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="#"
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('3'); }}
          >
            Tab3
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          tab 1 Curabitur pulvinar euismod ante, ac sagittis ante posuere ac.Curabitur pulvinar euismod ante, ac sagittis ante posuere ac.Curabitur pulvinar euismod ante, ac sagittis ante posuere ac.
        </TabPane>
        <TabPane tabId="2">
          Tab 2 Curabitur pulvinar euismod ante, ac sagittis ante posuere ac.Curabitur pulvinar euismod ante, ac sagittis ante posuere ac.
        </TabPane>
        <TabPane tabId="3">
          Tab 3 Curabitur pulvinar euismod ante, ac sagittis ante posuere ac.Curabitur pulvinar euismod ante, ac sagittis ante posuere ac.
        </TabPane>
      </TabContent>     

    </section>
</Container>
        <section className="bgcolor-gray p-top-bottom-60">
            <Container>
                <section className="collapssection">
                    <Button color="primary" onClick={toggle1} style={{ marginBottom: '1rem' }}>Toggle</Button>
                    <Collapse isOpen={isOpen1}>
                        <section>                   
                            Anim pariatur cliche reprehenderit,
                            enim eiusmod high life accusamus terry richardson ad squid. Nihil
                            anim keffiyeh helvetica, craft beer labore wes anderson cred
                            nesciunt sapiente ea proident. 
                            </section>                           
                    </Collapse>
                </section>
                <section className="collapssection">
                    <Button color="primary" onClick={toggle2} style={{ marginBottom: '1rem' }}>Toggle2</Button>
                    <Collapse isOpen={isOpen2}>
                        <section>                   
                            Anim pariatur cliche reprehenderit,
                            enim eiusmod high life accusamus terry richardson ad squid. Nihil
                            anim keffiyeh helvetica, craft beer labore wes anderson cred
                            nesciunt sapiente ea proident. 
                            </section>                           
                    </Collapse>
                </section>
                <section className="collapssection">
                    <Button color="primary" onClick={Toggle3} style={{ marginBottom: '1rem' }}>Toggle3</Button>
                    <Collapse isOpen={isOpen3}>
                        <section>                   
                            Anim pariatur cliche reprehenderit,
                            enim eiusmod high life accusamus terry richardson ad squid. Nihil
                            anim keffiyeh helvetica, craft beer labore wes anderson cred
                            nesciunt sapiente ea proident. 
                            </section>                           
                    </Collapse>
                </section>
            </Container>
        </section>

        <section className="p-top-bottom-60">
            <Container>
                <section className="collapssection">
                    
                <Collapsible trigger="Start here">
                    <p>This is the collapsible content. It can be any element or React component you like.</p>
                    <p>It can even be another Collapsible component. Check out the next section!</p>
                </Collapsible>
                <Collapsible trigger="kolkata">
                    <p>This is the collapsible content. It can be any element or React component you like.</p>
                    <p>It can even be another Collapsible component. Check out the next section!</p>
                </Collapsible>
                <Collapsible trigger="Modi ji">
                    <p>This is the collapsible content. It can be any element or React component you like.</p>
                    <p>It can even be another Collapsible component. Check out the next section!</p>
                </Collapsible>

                </section>
            </Container>
        </section>
        </React.Fragment>
    )
}

export default About; 