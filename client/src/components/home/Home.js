import React from 'react';
import Banner from './Banner';
import About from './About';
import Feature from './Feature';
import Gallery from './Gallery';
import Team from '../home/Team';
import Contact from '../home/Contact';
import Footer from '../Footer';

const Home = () => {
    return (
        <div className='home'>
            <Banner/>
            <Feature/>
            <About/>
            <Gallery/>
            <Team/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default Home
