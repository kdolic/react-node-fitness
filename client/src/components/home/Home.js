import React from 'react';
import Banner from './Banner';
import Feature from './Feature';
import Gallery from './Gallery';
import Team from '../home/Team';
import Contact from '../home/Contact';
import Footer from '../Footer';

const Home = () => {
    return (
        <div className='home'>
            <h1>HOME</h1>
            <h1>HOME</h1>
            <h1>HOME</h1>
            <h1>HOME</h1>
            {/* <Banner/> */}
            <Feature/>
            <Gallery/>
            <Team/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default Home
