import React from "react";
import {Nav} from "react-bootstrap";
import "../css/Footer.css";

const Footer = () => {
    return (
        <footer className='footer'>
            <Nav className='footer-navbar'>
                    <Nav.Link className='footer-nav' href="/">Home</Nav.Link>
                    <Nav.Link className='footer-nav' href="#">Features</Nav.Link>
                    <Nav.Link className='footer-nav' href="#">About</Nav.Link>
                    <Nav.Link className='footer-nav' href="#">Gallery</Nav.Link>
                    <Nav.Link className='footer-nav' href="#">Team</Nav.Link>
                
                {/* <hr/> */}
            </Nav>
            <Nav className='left'> 
                <Nav.Link className='support' href='#'>SUPPORT</Nav.Link>
                <Nav.Link className='support' href='#'>Pricing</Nav.Link>
                <Nav.Link className='support' href='#'>Guides</Nav.Link>
                <Nav.Link className='support' href='#'>Training</Nav.Link>
                <Nav.Link className='support' href='#'>Customer Service</Nav.Link>
                <br/>
                <Nav.Link className='members' href='#'>MEMBERS</Nav.Link>
                <Nav.Link className='members' href='#'>The DEV.FIT App</Nav.Link>
                <Nav.Link className='members' href='#'>Store</Nav.Link>
                <Nav.Link className='members' href='#'>FAQS</Nav.Link>
                <br/>
            </Nav>
            <div className='middle'>
                <h1>LOGO</h1>
                <p>Develop Yourself, Develop Your Fit</p>
            </div>
            <Nav className='right'>
                <Nav.Link className='legal' href='#'>LEGAL</Nav.Link>
                <Nav.Link className='legal' href='#'>Claim</Nav.Link>
                <Nav.Link className='legal' href='#'>Privacy</Nav.Link>
                <Nav.Link className='legal' href='#'>Terms</Nav.Link>
                <br/>
                <Nav.Link className='solutions' href='#'>SOLUTIONS</Nav.Link>
                <Nav.Link className='solutions' href='#'>Marketing</Nav.Link>
                <Nav.Link className='solutions' href='#'>Analytics</Nav.Link>
                <Nav.Link className='solutions' href='#'>Commerce</Nav.Link>
                <Nav.Link className='solutions' href='#'>Insights</Nav.Link>
            </Nav>
            <div className='bottom'>
                <hr/>
                <p>© DEV.FIT, Inc. All rights reserved.</p>
                <div className='social'>
                    <div className="icons8-facebook"></div>
                    <div className="icons8-twitter"></div>
                    <div className="icons8-instagram"></div>
                    <div className="icons8-play-button"></div>
                    <div className="icons8-tiktok"></div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
