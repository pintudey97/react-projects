import React,{useState} from 'react';
import { NavLink, Link } from 'react-router-dom';
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, Col, Container, Row } from 'reactstrap';
import { ImagePath } from '../../ImagePath';

const Header = () => {


    const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

    return (
        <React.Fragment>

            <section className="navigation">
            <Container>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Navbar expand="md">
                        <NavbarBrand href="/"><img src={ImagePath.Logo} alt="logo"/> </NavbarBrand>
                        <NavbarToggler onClick={toggle} />
                        <Collapse isOpen={isOpen} navbar className="justify-content-end">
                        <Nav navbar>
                            <NavItem>
                            <Link to="/">Home</Link>
                            </NavItem> 
                            <NavItem>
                            <NavLink to="/about">About AppLab</NavLink>
                            </NavItem>  
                            <NavItem>
                            <NavLink to="/keyfeatures">Key Features</NavLink>
                            </NavItem>  
                            <NavItem>
                            <Link to="/Pricing">Pricing</Link>
                            </NavItem> 
                            <NavItem>
                            <NavLink to="/testiminial">Testiminial</NavLink>
                            </NavItem>  
                            <NavItem>
                            <Link to="/faq">FAQ</Link>
                            </NavItem> 
                            <NavItem>
                            <NavLink to="/tryfor-free">Try for free</NavLink>
                            </NavItem>            
                        </Nav>          
                        </Collapse>
                    </Navbar>
                    </Col>
                </Row>
        
      </Container>
      </section> 
        </React.Fragment>
    );
};

export default Header;