import React from "react";
import "../css/Footer.css";

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='left'>
                <ul>
                    <li>Solutions</li>
                    <li>Marketing</li>
                    <li>Analytics</li>
                    <li>Commerce</li>
                    <li>Insights</li>
                </ul>
                <br/>
                <ul>
                    <li>Members</li>
                    <li>The Dev.Fit App</li>
                    <li>Store</li>
                    <li>FAQS</li>
                </ul>
                <br/>
            </div>
            <div className='middle'>

            </div>
            <div className='right'>
                <ul>
                    <li>Legal</li>
                    <li>Claim</li>
                    <li>Privacy</li>
                    <li>Terms</li>
                </ul>
                <br/>
                <ul>
                    <li>Support</li>
                    <li>Pricing</li>
                    <li>Guides</li>
                    <li>Training</li>
                    <li>Customer Service</li>
                </ul>
            </div>
            <div className='bottom'>
                <hr/>
                <p>© DEV.FIT, Inc. All rights reserved.</p>
                <div className='social'>
                    <div class="icons8-facebook"></div>
                    <div class="icons8-twitter"></div>
                    <div class="icons8-instagram"></div>
                    <div class="icons8-play-button"></div>
                    <div class="icons8-tiktok"></div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
