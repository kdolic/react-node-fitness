import React from "react";
import {Nav, NavDropdown} from "react-bootstrap";
import "../css/Navbar.css";

const Navbar = () => {

  return (
<section className='navContainer'>
  <Nav className="links">
    <Nav.Link className='navTitle' href="/">Dev.Fit</Nav.Link>
    <Nav.Link className="link" href="/">Home</Nav.Link>
    <Nav.Link className="link" href="#">Features</Nav.Link>
    <Nav.Link className="link" href="#">About</Nav.Link>
    <Nav.Link className="link" href="#">Gallery</Nav.Link>
    <Nav.Link className="link" href="#">Team</Nav.Link>
    <Nav.Link className="link" href="#">Contact</Nav.Link>
    <div className='dropdown'>
      <NavDropdown  title={<span className="link dropdown-nav" >Account&#9662;</span>}>
      <div className='dropdown-content'>
        <NavDropdown.Item className="link" href='/register'>Register</NavDropdown.Item>
        <br/>
        <NavDropdown.Item className="link" href='/login'>Login</NavDropdown.Item>
        <br/>
        <NavDropdown.Divider />
        <NavDropdown.Item className="link">Support</NavDropdown.Item>
      </div>
      </NavDropdown>
    </div>
  </Nav>
</section>
  );
};

export default Navbar;
