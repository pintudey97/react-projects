import React, {useState} from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import {ImagePath} from '../../ImagePath';

const Header = () =>{
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
  
    return(
        <React.Fragment>
        <Navbar expand="md">
        <NavLink to="/" style={{ width:'80px'}}><img src={ImagePath.Microsoft} alt="logo" /></NavLink>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto mr-0 align-items-center" navbar>
            <NavItem>
              <NavLink to="/" className="ml-2">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/About" className="ml-2">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/Contact" className="ml-2">Contact</NavLink>
            </NavItem>
            {/* <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> */}
          </Nav>
        </Collapse>
      </Navbar>
        </React.Fragment>
    )
}

export default Header;