import React, { useContext, useEffect } from "react";
import { Col, Container, Navbar, Row, Form, NavDropdown } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { ImagePath } from "../../ImagePath";
import AuthCheck, { UserDetails } from '../context/context';


const Header = () => {
  const checklogin = useContext(AuthCheck);

  const navigate = useNavigate();

  const Logout =()=>{
    localStorage.clear();
    useEffect(()=>{
      if(!checklogin === true){
          navigate('/login');
      }
    },[]);
  }

  const getUsername = useContext(UserDetails);
  const usernameb = JSON.parse(getUsername);

    return (
        <React.Fragment>
<section className="header">
        <Container fluid>
            <Row>
                <Col xs={12} sm={12} md={12} lg={12}>
                <Navbar expand="lg">
      
        <Navbar.Brand href="#home"><img src={ImagePath.Logo} alt="theme-logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <ul className="navbar-nav">                        
            <li className="nav-item"><Link className="nav-link" to='/'>Home</Link> </li>
            <li className="nav-item"><Link className="nav-link" to='/profile'>Profile</Link> </li> 
            <li className="nav-item"><Link className="nav-link" to='Details'>Details</Link> </li>  
            <li className="top-search-nav">
                <Form className="form-inline">
            <Form.Control
              type="search"
              placeholder="Search"
              className="form-control"
              aria-label="Search"
            />
            <span><FaSearch /></span>
          </Form></li>
          {!checklogin === false ? 
          <NavDropdown title={usernameb.username} id="basic-nav-dropdown" className="login-profile">
          <Link className="nav-link" to='/profile'>My Profile</Link>
          <Link className="nav-link" onClick={Logout}>Sign Out</Link>
        </NavDropdown>  : 
          <>
          <li className="nav-item signup"><Link className="nav-link" to='/signup'>Signup</Link></li> 
          <li className="nav-item"><Link className="nav-link" to='/login'>Login</Link></li>
          </> }
          <li></li>
          </ul>
        </Navbar.Collapse>
      
    </Navbar>
                </Col>
            </Row>
        </Container>
    </section>
        </React.Fragment>
    );
}
 
export default Header;