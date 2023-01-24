import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem
  } from 'reactstrap';


const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const {totalUniqueItems, isEmpty} = useCart();

    return (
        <React.Fragment>
            <header className="header_section">
            <Navbar color="light" light expand="lg" className="custom_nav-container">
        <NavbarBrand><Link to="/"><span>Sportpar</span></Link></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link to="/" className="nav-link">Home</Link>
            </NavItem>
            <NavItem>
              <Link to="/about" className="nav-link">About</Link>
            </NavItem>
            <NavItem>
              <Link to="/products" className="nav-link">Products</Link>
            </NavItem>
            <NavItem>
              <Link to="/contact" className="nav-link">Contact</Link>
            </NavItem>
            <NavItem>
              <Link to="/cart" className="nav-link position-relative"><FontAwesomeIcon icon={faCartShopping} />
              {isEmpty ? ' ' : <span className="cartCount">{totalUniqueItems}</span>}
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </header>
        </React.Fragment>
    );
}
 
export default Header;