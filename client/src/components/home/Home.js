import React from 'react';
import Banner from './Banner';
import Feature from './Feature';
import Team from '../home/Team';
import Footer from '../Footer';

const Home = () => {
    return (
        <div className='home'>
            <h1>HOME</h1>
            {/* <Banner/> */}
            <Feature/>
            <Team/>
            <Footer/>
        </div>
    )
}

export default Home
