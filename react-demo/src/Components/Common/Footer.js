import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';

const Footer = () =>{
    return(
        <React.Fragment>
            <section className="bgcolor-blue p-top-bottom-60">
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={5} lg={5} xl={5}>
                            <div className="widget">
                                
                            <div className="widget-title">WELCOME TO THE WORLD OF REACT</div>
                            <p className="mb-5">Built with love in Fort Worth, Texas, USA<br/> All rights reserved. Copyright © 2020.</p>                            
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={7} lg={7} xl={7}>
                            <Row>
                            <Col xs={12} sm={12} md={4} lg={4} xl={4}>
                                <div class="widget">
                                <div class="widget-title">Discover</div>
                                <ul class="list">
                                <li><NavLink to="/">Features</NavLink></li>
                                <li><NavLink to="/">Layouts</NavLink></li>
                                <li><NavLink to="/">Corporate</NavLink></li>
                                <li><NavLink to="/">Updates</NavLink></li>
                                <li><NavLink to="/">Pricing</NavLink></li>
                                <li><NavLink to="/">Customers</NavLink></li>
                                </ul>
                                </div>
                                </Col>
                                <Col xs={12} sm={12} md={4} lg={4} xl={4}>
                                <div class="widget">
                                <div class="widget-title">Discover</div>
                                <ul class="list">
                                <li><NavLink to="/">Features</NavLink></li>
                                <li><NavLink to="/">Layouts</NavLink></li>
                                <li><NavLink to="/">Corporate</NavLink></li>
                                <li><NavLink to="/">Updates</NavLink></li>
                                <li><NavLink to="/">Pricing</NavLink></li>
                                <li><NavLink to="/">Customers</NavLink></li>
                                </ul>
                                </div>
                                </Col>
                                <Col xs={12} sm={12} md={4} lg={4} xl={4}>
                                <div class="widget">
                                <div class="widget-title">Discover</div>
                                <ul class="list">
                                <li><NavLink to="/">Features</NavLink></li>
                                <li><NavLink to="/">Layouts</NavLink></li>
                                <li><NavLink to="/">Corporate</NavLink></li>
                                <li><NavLink to="/">Updates</NavLink></li>
                                <li><NavLink to="/">Pricing</NavLink></li>
                                <li><NavLink to="/">Customers</NavLink></li>
                                </ul>
                                </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    )
}

export default Footer; 