import React from "react";
import {Nav, NavDropdown} from "react-bootstrap";
import "../css/Navbar.css";

const Navbar = () => {

  return (
<section className='navContainer'>
  <Nav className="links">
    <h1 className='navTitle' href='/'>DevFit</h1>
    <Nav.Link className="link" href="/">Home</Nav.Link>
    <Nav.Link className="link" href="#">Features</Nav.Link>
    <Nav.Link className="link" href="#">About</Nav.Link>
    <Nav.Link className="link" href="#">Gallery</Nav.Link>
    <Nav.Link className="link" href="#">Team</Nav.Link>
    <NavDropdown className="link" title="Account ▼">
      <NavDropdown.Item className="link" href='/register'>Register</NavDropdown.Item>
      <br/>
      <NavDropdown.Item className="link" href='/login'>Login</NavDropdown.Item>
      <br/>
      <NavDropdown.Divider />
      <NavDropdown.Item className="link">Support</NavDropdown.Item>
    </NavDropdown>
  </Nav>
</section>
  );
};

export default Navbar;
