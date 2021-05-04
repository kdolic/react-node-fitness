import React from 'react';
import Banner from './Banner';
import Footer from '../Footer';
import Team from '../home/Team';

const Home = () => {
    return (
        <div className='home'>
            <h1>HOME</h1>
            {/* <Banner/> */}
            <Team/>
            <Footer/>
        </div>
    )
}

export default Home
