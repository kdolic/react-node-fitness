import React from "react";
import {Nav, NavDropdown} from "react-bootstrap";
import logo from '../assets/images/Logo.png';
import "../css/Navbar.css";

const Navbar = () => {

  return (
<section className='navContainer'>
  <Nav className="links">
    <Nav.Link className="link" href="/">Home</Nav.Link>
    <Nav.Link className="link" href="#features">Features</Nav.Link>
    <Nav.Link className="link" href="#about">About</Nav.Link>
    <Nav.Link className="link" href="#gallery">Gallery</Nav.Link>
    <Nav.Link href="/"><img src={logo} alt='logo' className='navTitle' /></Nav.Link>
    <Nav.Link className="link" href="#team">Team</Nav.Link>
    <Nav.Link className="link" href="#contact">Contact</Nav.Link>
    <div className='dropdown'>
      <NavDropdown title={<span className="link dropdown-nav" >Account&#9662;</span>}>
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
