import React from 'react';
import '../../css/Contact.css';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import Mail from '@material-ui/icons/Mail';

const Contact = () => {
    return (
        <section className='contactContainer gradient'>
            <div className='contactTitle'>
                <h1><span>Get</span> In Touch</h1>
            </div>
            <div className='contactForm'>
                <div>
                    <h2>Please fill out the form below to send us an email and we will get back to you as soon as possible.</h2>
                    <form action="/contact">
                        <div>
                            <input className='contactInput' type='text' required id='fullName' name='fullName' placeholder='Name :' />
                            <input className='contactInput' required id='email' name='email' type='email' placeholder='Email :' />
                        </div>
                        <div>
                            <input className='contactInput' type='text' required id='subject' name='subject' placeholder='Subject :' />
                            <textarea className='contactInput' name="message" cols="100" rows="6" type='text' placeholder='Message :'></textarea>
                            <button className='contactButton' type='submit'>Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className='contactInfo'>
                <h2>Contact Info</h2>
                <h4>Feel free to contact regarding any issues, questions, and any other inquries.</h4>
                <div className='contactIcon'>
                    <LocationOnIcon />
                    <h3>Location</h3>
                </div>
                    <p>Chicago, IL</p>
                <div className='contactIcon'>
                    <PhoneIcon />
                    <h3>Phone</h3>
                </div>
                    <p>+1 123 456 7890</p>
                <div className='contactIcon'>
                    <MailIcon />
                    <h3>Phone</h3>
                </div>
                    <p>devfitsupport@company.com</p>
            </div>
        </section>
    )
}

export default Contact
