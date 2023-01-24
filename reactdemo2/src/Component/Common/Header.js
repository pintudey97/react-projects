import React, { useState } from 'react';
import { Container, Row, Col, Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
const Header = () =>{
    
    const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
    return(
        <React.Fragment>
            <section className="">
                <Container fluid ={true}>
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={12} xl={12} className="p-0">
                        <Navbar color="light" light expand="md">
                        <NavbarBrand href="/">reactstrap</NavbarBrand>
                        <NavbarToggler onClick={toggle} />
                        <Collapse isOpen={isOpen} navbar>
                        <Nav className="ml-auto mr-0" navbar>
                            <NavItem>
                            <NavLink to="/" className="px-2">Home</NavLink>
                            </NavItem>
                            <NavItem>
                            <NavLink to="/About" className="px-2">About us</NavLink>
                            </NavItem>     
                            <NavItem>
                            <NavLink to="/Service" className="px-2">Service</NavLink>
                            </NavItem> 
                            <NavItem>
                            <NavLink to="/Contact">Contact</NavLink>
                            </NavItem>
                            <NavItem>
                            <NavLink to="/Api">Api</NavLink>
                            </NavItem>  
                        </Nav>
                        
        </Collapse>
      </Navbar>
      
                        </Col> 
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    )
}
export default Header;