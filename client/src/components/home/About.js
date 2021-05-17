import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../css/About.css';
import aboutUs from '../../assets/images/aboutUs.jpg';

const About = () => {
    return (
        <section id='about' className='aboutContainer'>
                <div className='aboutTitle'>
                    <h1>Abou<span className='title-span gradient'>t D</span>ev.Fit</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className='aboutContent'>
                    <img src={aboutUs} alt="aboutImg" width='300rem'/>
                    <div className='aboutSection'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <p>Welcome to DEV.FIT. <br /><span className='slogan'>Develop Yourself, Develop Your Fit</span></p>
                    </div>
                </div>
                <div className='aboutCards'>
                    <h2>Learn More About Us</h2>
                    <Container className='cardContainer'>
                        <Row>
                            <Col className='card'>
                                <h3>Why DEV.FIT? <img src="https://img.icons8.com/ios-glyphs/30/fa314a/long-arrow-right.png" alt='right_arrow' /></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                            </Col>
                            <Col className='card'>
                                <h3>Inquries <img src="https://img.icons8.com/ios-glyphs/30/fa314a/long-arrow-right.png" alt='right_arrow' /></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col className='card'>
                                <h3>DEV.FIT Development <img src="https://img.icons8.com/ios-glyphs/30/fa314a/long-arrow-right.png" alt='right_arrow' /></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                            </Col>
                            <Col className='card'>
                                <h3>The DEV.FIT Mobile App <img src="https://img.icons8.com/ios-glyphs/30/fa314a/long-arrow-right.png" alt='right_arrow' /></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                            </Col>
                        </Row>
                    </Container>
                </div>
        </section>
    )
}

export default About
