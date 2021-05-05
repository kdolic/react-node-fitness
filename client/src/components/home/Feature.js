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
                    <img src="https://img.icons8.com/ios/80/fa314a/strength.png" alt='exercise' />
                    <h3>Exercises</h3>
                    <p>Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.</p>
                </div>
                <div className='feature'>
                    <img src="https://img.icons8.com/dotty/80/fa314a/meal.png" alt='fasting' />
                    <h3>Fasting</h3>
                    <p>Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.</p>
                </div>
                <div className='feature'>
                    <img src="https://img.icons8.com/pastel-glyph/80/fa314a/define-location--v1.png" alt='goals' />
                    <h3>Goals</h3>
                    <p>Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.</p>
                </div>
                <div className='feature'>
                    <img src="https://img.icons8.com/carbon-copy/80/fa314a/calendar--v1.png" alt='streak' />
                    <h3>Streaks</h3>
                    <p>Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.</p>
                </div>
            </div>
        </section>
    )
}

export default Feature
