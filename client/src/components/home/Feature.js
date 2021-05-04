import React from 'react';
import '../../css/Feature.css';

const Feature = () => {
    return (
        <section className='featContainer'>
            <div className='title'>
                <h1>Fea<span className='title-span gradient'>tu</span>res</h1>
            </div>
            <div className='features'>
                <div className='feature'>
                    <h1>ICON</h1>
                    <h3>Exercise</h3>
                    <p></p>
                </div>
                <div className='feature'>
                    <h1>ICON</h1>
                    <h3>Fasting</h3>
                    <p></p>
                </div>
                <div className='feature'>
                    <h1>ICON</h1>
                    <h3>Goals</h3>
                    <p></p>
                </div>
                <div className='feature'>
                    <h1>ICON</h1>
                    <h3>Streak</h3>
                    <p></p>
                </div>
            </div>
        </section>
    )
}

export default Feature
